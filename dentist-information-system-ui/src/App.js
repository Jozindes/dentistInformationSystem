import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PatientList from './pages/PatientList';
import AddPatient from './pages/AddPatient';
import PatientDetails from './pages/PatientDetails';
import AddVisit from './pages/AddVisit';

function App() {

    return (
        <>
            <BrowserRouter>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Dentist Information System</Link>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addNewPatient">Add a Pacient</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/listOfPatients">List of Patients</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="mt-4"> { /* Odsadenie od menu */}
                </div>

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/listOfPatients" element={<PatientList />} />
                    <Route path="/addNewPatient" element={<AddPatient />} />
                    <Route path="/listOfPatients/:id" element={<PatientDetails />} />
                    <Route path="/addNewVisit/:id" element={<AddVisit />} />
                </Routes>

            </BrowserRouter>
        </>
    );
}

export default App;