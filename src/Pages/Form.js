import React, { useState } from 'react';
import './style/Form.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function MyForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pwd, setpassword] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:5000/login', { email });
            if (response.status === 200) {
                console.log('User exists');
                alert("You're Logged In now!")
                navigate('/');
                return;
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert("User doesn't exist. Please SignUp instead!");
                navigate('/SignUp')
            } else {
                console.error('Error:', error);
                alert("An error occurred. Please try again later.");
            }
        }
    };
    return (
        <form onSubmit={handleSubmit} className='App'>

            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} autoFocus required
                /><br />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={pwd}
                    onChange={(e) => setpassword(e.target.value)} required
                /><br />
            </label><br />
            <button type="submit">Submit</button>
            <link /><br />
            <p>dosen't seems you have an account?  <a href="SignUp">SignUP</a> now!</p>
        </form>
    );
}