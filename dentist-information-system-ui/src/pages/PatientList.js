import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PatientList() {
    const [patients, setPatients] = useState([]);
    const [searchTermFirstName, setSearchTermFirstName] = useState('');
    const [searchTermLastName, setSearchTermLastName] = useState('');

    useEffect(() => {
        fetch("http://localhost:8080/listOfPatients")
            .then(response => response.json())
            .then(data => setPatients(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // searching by first name and last name
    const handleSearchFirstName = (event) => {
        setSearchTermFirstName(event.target.value);
    }

    const handleSearchLastName = (event) => {
        setSearchTermLastName(event.target.value);
    }

    const filteredPatients = patients.filter(patient => {
        return (patient.firstName.toLowerCase().includes(searchTermFirstName.toLowerCase()) && 
        patient.lastName.toLowerCase().includes(searchTermLastName.toLowerCase()));
    });

    return (

        <div className="container">
            
            <h2 className="text-center">List of Patients</h2>

            <div className="row">
            <div className="col">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search by first name" 
                    value={searchTermFirstName} 
                    onChange={handleSearchFirstName} 
                />
            </div>
            <div className="col">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search by last name" 
                    value={searchTermLastName} 
                    onChange={handleSearchLastName} 
                />
            </div>
            </div>

            <div className="mt-4">
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPatients.map(patient => (
                        <tr key={patient.id}>
                            <td>{patient.firstName}</td>
                            <td>{patient.lastName}</td>
                            <td>{(new Date(patient.dateOfBirth)).toLocaleString('sk-SK').split(" ").slice(0, 3).join(" ")}</td>
                            <td>
                                <Link to={`/listOfPatients/${patient.id}`} className="btn btn-primary">Details</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default PatientList;
