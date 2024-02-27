import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function AddVisit() {
    const [description, setDescription] = useState('');
    const [recommendedVisit, setRecommendedVisit] = useState('');
    const navigate = useNavigate();

    const { id } = useParams(); // získanie parametrov z URL

    // add a patient visit to the database
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            description: description,
            recommendedVisit: recommendedVisit,
        };

        fetch(`http://localhost:8080/addNewVisit/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                navigate(`/listOfPatients/${id}`);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (

        <div className="container">

            <h2 className="text-center">Add a new visit</h2>

            <div className="mt-4">
            </div>

            <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
                <div className="mb-3 w-25">
                    <label for="description" className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                        required
                    />
                </div>

                <div className="mb-3 w-25">
                    <label for="recommendedVisit" className="form-label">Recommended visit</label>
                    <input
                        type="date"
                        className="form-control"
                        id="recommendedVisit"
                        value={recommendedVisit}
                        onChange={(e) => setRecommendedVisit(e.target.value)}
                        placeholder="Date of Next Visit"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default AddVisit;
