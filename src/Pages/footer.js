import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div>
                <footer className="bg-dark text-center text-lg-start text-white">
                    <div className="container p-4">
                        <div className="text-center row my-4">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                                <div className="shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: '150px', height: '150px' }}>
                                    <h3 style={{ color: "yellow" }}>INSIGHTTIMES</h3>
                                </div>
                                <p className="text-center">"Navigating Today's News, Empowering Tomorrow's Decisions."</p>

                                <ul className="list-unstyled d-flex flex-row justify-content-center">
                                    <li>
                                        <Link className="text-white px-2" to="#!"></Link>
                                    </li>
                                    <li>
                                        <Link className="text-white px-2" to="#!"></Link>
                                    </li>
                                    <li>
                                        <Link className="text-white ps-2" to="#!"></Link>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4"><u>Pages</u></h5>

                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <Link to="" className="text-white text-decoration-none">Home</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/Contact" className="text-white text-decoration-none">ContactUs</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/About" className="text-white text-decoration-none">AboutUs</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/Form" className="text-white text-decoration-none">Login</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/News_Sources" className="text-white text-decoration-none">Sources</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4"><u>Categories</u></h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <Link to="/General_News_Page" className="text-white text-decoration-none">General</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/Business_News" className="text-white text-decoration-none">Business</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/Sports_news" className="text-white text-decoration-none">Sports</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/Technology_News" className="text-white text-decoration-none">Technology</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/Health_News" className="text-white text-decoration-none">Health</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/Science_News" className="text-white text-decoration-none">Science</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4"><u>Social media links</u></h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <a href="https://www.linkedin.com/in/aditya-patadiya-5356a3247/" target='_blank' class="fa fa-linkedin text-decoration-none text-blue"></a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="https://www.instagram.com/adityasoni7669/" target='_blank' class="fa fa-instagram text-decoration-none text-danger"></a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="https://twitter.com/Aditya419586282" target='_blank' class="fa fa-twitter text-decoration-none text-blue"></a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="https://github.com/Adityason" target='_blank' class="fa fa-github text-decoration-none text-black"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2024 Copyright:
                        <span> Aditya, Aditya and <a href='https://newsapi.org/' target='_blank'>NewsAPI</a></span>
                    </div>
                </footer>
            </div>
        </>
    )
}
