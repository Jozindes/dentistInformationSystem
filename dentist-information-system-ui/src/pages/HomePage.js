import React from 'react';
import { useState, useEffect } from 'react';

// current time component
function CurrentDateTime({ setDateTime }) {
    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
    }, []);
    return null;
}

function HomePage() {
    const [dateTime, setDateTime] = useState(new Date());
    return (
        <>
            <div className="container text-center">
                <h2>Welcome to the DENTIST Information System</h2>

                <div className="mt-4">
                </div>

                <p>This system is simple and in indevelopment.</p>
                <p>Current date and time: {dateTime.toLocaleString()}</p>
            </div>
            
            <CurrentDateTime setDateTime={setDateTime} />
        </>
    );
}

export default HomePage;
