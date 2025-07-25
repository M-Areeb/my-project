import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/users', formData);
            alert(res.data.message);
        } catch (err) {
            console.error(err.response?.data || err.message);
            console.log('Submitting:', formData);
            alert(err.response?.data?.error || "Failed to register");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" type="email" required />
            <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Password" required />
            <button type="submit">Register</button>
        </form>
    );
}

export default Signup;
