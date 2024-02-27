import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function PatientDetails() {
    const { id } = useParams();

    const [patient, setPatient] = useState(null);
    const [visits, setVisits] = useState([]);

    // fetching patient data
    useEffect(() => {
        fetch(`http://localhost:8080/listOfPatients/${id}`)
            .then(response => response.json())
            .then(data => setPatient(data))
            .catch(error => console.error('Error fetching patient data:', error));

        fetch(`http://localhost:8080/listOfPatients/listOfVisits/${id}`)
            .then(response => response.json())
            .then(data => setVisits(data))
            .catch(error => console.error('Error fetching visits data:', error));
    }, [id]);

    if (!patient) {
        return <div>Loading the data.</div>;
    }

    return (

        <div className="container">

            <h2 className="text-center">Patient information</h2>

            <div className="mt-4">
            </div>

            <table className="table">
                <tbody>
                    <tr>
                        <td><strong>First Name:</strong></td>
                        <td>{patient.firstName}</td>
                    </tr>
                    <tr>
                        <td><strong>Last Name:</strong></td>
                        <td>{patient.lastName}</td>
                    </tr>
                    <tr>
                        <td><strong>Date of Birth:</strong></td>
                        <td>{patient.dateOfBirth}</td>
                    </tr>
                    <tr>
                        <td><strong>Address:</strong></td>
                        <td>{patient.address}</td>
                    </tr>
                    <tr>
                        <td><strong>Email:</strong></td>
                        <td>{patient.email}</td>
                    </tr>
                    <tr>
                        <td><strong>Phone Number:</strong></td>
                        <td>{patient.phoneNumber}</td>
                    </tr>
                    <tr>
                        <td><strong>Patient from:</strong></td>
                        <td>{(new Date(patient.patientFrom)).toLocaleString('sk-SK').split(" ").slice(0, 3).join(" ")}</td>
                    </tr>
                </tbody>

                <div className="mt-4">
                </div>

            </table>

            <h2 className="text-center">Patient visits</h2>

            <div className="mt-4">
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Date of Visit</th>
                        <th>Description</th>
                        <th>Recommended Visit</th>
                    </tr>
                </thead>
                <tbody>
                    {visits.map(visit => (
                        <tr key={visit.id}>
                            <td>{(new Date(visit.dateOfVisit)).toLocaleString('sk-SK').split(" ").slice(0, 3).join(" ")}</td>
                            <td>{visit.description}</td>
                            <td>{(new Date(visit.recommendedVisit)).toLocaleString('sk-SK').split(" ").slice(0, 3).join(" ")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="container d-flex flex-column align-items-center">
                <Link to={`/addNewVisit/${patient.id}`} className="btn btn-primary">Add a visit</Link>
            </div>

        </div>
    );
}

export default PatientDetails;
