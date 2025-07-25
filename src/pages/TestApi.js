import React, { useEffect, useState } from 'react';

import axios from 'axios';

const TestApi = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/test1')
            .then((res) => {
                setMessage(res.data.message);
            })
            .catch((err) => {
                console.error('API Error:', err);
                setMessage('Error connecting to backend');
            });
    }, []);

    return (
        <div>
            <h2>Test API Connection</h2>
            <p>{message}</p>
        </div>
    );
};

export default TestApi;
