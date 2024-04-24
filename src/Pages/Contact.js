import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './style/contact.css';

function Contact() {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();

        setIsSending(true);

        try {
            await emailjs.sendForm('service_nyvjgub', 'template_txj15zw', form.current, {
                publicKey: 'TNCGnFnQPwvyhbdRn',
            });
            setIsSent(true);
            form.current.reset(); // Reset the form fields
        } catch (error) {
            console.log('FAILED...', error.text);
        } finally {
            setIsSending(false);
        }
        
    };

    return (
        <div className="contact-container">
            <h2 className="contact-heading">Contact Us</h2>
            <p className="contact-description">
                We'd love to hear from you! Please feel free to reach out to us with any questions, feedback, or inquiries.
                Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <label className="form-label">Name</label>
                <input type="text" name="from_name" className="form-input" required autoFocus />
                <label className="form-label">Email</label>
                <input type="email" name="from_email" className="form-input" required />
                <label className="form-label">Message</label>
                <textarea name="message" className="form-textarea" required></textarea>
                <button type="submit" className={`form-submit ${isSent ? 'sent' : ''}`} disabled={isSending}>
                    {isSending ? 'Sending...' : isSent ? 'Sent!' : 'Send'}
                </button>
            </form>
        </div>
    );
}

export default Contact;
