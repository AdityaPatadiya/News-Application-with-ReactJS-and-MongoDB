import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './style/Form.css';
import axios from 'axios';
import bcrypt from 'bcryptjs';

export default function MyForm() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [Interests, setInterests] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!name || !email || !password || !acceptedTerms) {
            alert('Please fill out all required fields and accept terms.');
            return;
        }
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Accepted Terms:', acceptedTerms);
        console.log('Selected Option:', Interests);

        const hashedPassword = await bcrypt.hash(password, 5);
        try {
            let result = await fetch("http://127.0.0.1:5000/register", {
                method: "POST",
                body: JSON.stringify({ name, email, password: hashedPassword, Interests }),
                headers: { 'Content-Type': 'application/json' }
            })
            console.log(result)
            if (result) {
                alert("User registered successfully!");
            }
            // Clear form fields after successful registration
            setName('');
            setEmail('');
            setpassword('');
            setAcceptedTerms(false);
            setInterests([]);
            navigate('/');

        } catch (error) {
            const response = await axios.post('http://127.0.0.1:5000/login', { email });
            if (response.status === 200) {
                console.log('User exists');
                alert("The user with this email is already exist. Please Login instead!")
                navigate('/Form');
                return;
            }
        }
    };
    const handleButtonClick = (buttonValue) => {
        const updatedInterests = [...Interests];
        const index = updatedInterests.indexOf(buttonValue);
        if (index === -1) {
            updatedInterests.push(buttonValue);
        } else {
            updatedInterests.splice(index, 1);
        }
        setInterests(updatedInterests);
    };
    return (
        <form onSubmit={handleSubmit} className='App'>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} autoFocus required
                /><br />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} required
                /><br />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)} required
                /><br />
            </label>
            <label>
                <input className='check'
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)} required
                />
                I accept the terms and conditions
            </label><br />
            <p>Selete the topics from below that you want to read the most:-</p>
            <div className='checkOptions'>
                <p className="d-inline-wrap gap-1">
                    <button
                        type="button"
                        className={`btn m-1 ${Interests.includes('All') ? 'active' : ''}`}
                        onClick={() => handleButtonClick('All')}
                    >
                        All
                    </button>
                    <button
                        type="button"
                        className={`btn m-1 ${Interests.includes('Entertainment') ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Entertainment')}
                    >
                        Entertainment
                    </button>
                    <button
                        type="button"
                        className={`btn m-1 ${Interests.includes('Business') ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Business')}
                    >
                        Business
                    </button>
                    <button
                        type="button"
                        className={`btn m-1 ${Interests.includes('Science') ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Science')}
                    >
                        Science
                    </button>
                    <button
                        type="button"
                        className={`btn m-1 ${Interests.includes('Technology') ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Technology')}
                    >
                        Technology
                    </button>
                    <button
                        type="button"
                        className={`btn m-1 ${Interests.includes('Health') ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Health')}
                    >
                        Health
                    </button>
                    <button
                        type="button"
                        className={`btn m-1 ${Interests.includes('Sports') ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Sports')}
                    >
                        Sports
                    </button>
                </p>
            </div>
            <br />
            <button type="submit">Submit</button>
            <link /><br /><br />
            <p>seems you have visited before?  <a href="Form">Sign in</a> now!</p>
        </form>
    );
}