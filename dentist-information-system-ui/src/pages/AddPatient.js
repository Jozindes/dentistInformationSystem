import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddPatient() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    // add a pacient to the database
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth,
            address: address,
            email: email,
            phoneNumber: phoneNumber
        };

        fetch('http://localhost:8080/addNewPatient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                navigate('/listOfPatients');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (

        <div className="container">
            
            <h2 className="text-center">Add a new pacient</h2>

            <div className="mt-4">
            </div>
            
            <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
                <div className="mb-3 w-25">
                    <label for="firstName" className="form-label">First name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="fisrtName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First name"
                        required
                    />
                </div>
                <div className="mb-3 w-25">
                    <label for="lastName" className="form-label">Last name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last name"
                        required
                    />
                </div>
                <div className="mb-3 w-25">
                    <label for="dateOfBirth" className="form-label">Date of Birth</label>
                    <input
                        type="date"
                        className="form-control"
                        id="dateOfBirth"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        placeholder="Date of Birth"
                        required
                    />
                </div>
                <div className="mb-3 w-25" >
                    <label for="address" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                        required
                    />
                </div>
                <div className="mb-3 w-25">
                    <label for="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="mb-3 w-25">
                    <label for="phoneNumber" className="form-label">Phone number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Phone number"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    
    );
}

export default AddPatient;
