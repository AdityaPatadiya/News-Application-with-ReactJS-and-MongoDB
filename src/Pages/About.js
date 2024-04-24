import React from 'react';

const About = () => {
    return (
        <div className="container">
            <div className="text-center mt-5">
                <h1>About INSIGHTTIMES</h1>
                <hr className="bg-white" style={{ width: '150px', height: '3px', margin:"auto auto auto auto" }} />
            </div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <h2>Our Mission</h2>
                    <p>
                        <strong>INSIGHTTIMES</strong> is committed to delivering reliable, unbiased news coverage that informs, inspires, and engages our readers. Our mission is to provide insightful analysis and in-depth reporting on the most important issues facing our world today.
                    </p>
                    <p>
                        We believe that access to accurate information is essential for a well-informed society. Through our journalism, we aim to empower our readers to make informed decisions and participate actively in their communities.
                    </p>
                </div>
                <div className="col-md-6">
                    <h2>Our Team</h2>
                    <p>
                        Our team of dedicated journalists, editors, and contributors brings together diverse perspectives and expertise to deliver high-quality news content. With a focus on integrity and excellence, we uphold the highest standards of journalistic ethics in all our reporting.
                    </p>
                    <p>
                        Meet the individuals behind <strong>INSIGHTTIMES</strong> who are passionate about uncovering the truth and bringing you the latest updates from around the globe.
                    </p>
                </div>
            </div>
            <div className="text-center mt-5">
                <h2>Contact Us</h2>
                <p>If you have any questions, feedback, or story ideas, we'd love to hear from you!</p>
                <p>Email: info@insighttimes.com</p>
            </div>
        </div>
    );
}

export default About;
