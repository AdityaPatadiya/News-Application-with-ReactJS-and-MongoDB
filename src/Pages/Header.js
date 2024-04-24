import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style/Header.css';

export default function Header() {
    const location = useLocation();

    const handleSearch = () => {
        const searchQuery = document.getElementById('newsQuery').value;
        // For demonstration purposes, log the search query to the console
        console.log("Search query:", searchQuery);
        // You can further process the search query (e.g., fetch search results from API)
    };

    return (
        <>
            <div className="container-fluid m-0 p-0">
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand text-warning" to="#">INSHGHTTIMES</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/" id="general">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/Contact" ? "active" : ""}`} to="/Contact" id="contact">Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/About" ? "active" : ""}`} to="/About" id="about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/Form" ? "active" : ""}`} to="/Form" id="form">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/News_Sources" ? "active" : ""}`} to="/News_Sources" id="sources">Sources</Link>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="text" id="newsQuery" placeholder="Search news" />
                                    <button className="btn btn-outline-warning" type="button" onClick={handleSearch}>Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
                <aside className="mt-0">
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className="container-fluid m-0 p-0">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/General_News_Page" ? "active" : ""}`} to="/General_News_Page" id="general-news">Entertainment</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/Business_News" ? "active" : ""}`} to="/Business_News" id="business-news" >Business</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/Sports_news" ? "active" : ""}`} to="/Sports_news" id="sports-news">Sports</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/Technology_News" ? "active" : ""}`} to="/Technology_News" id="technology-news">Technology</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/Health_News" ? "active" : ""}`} to="/Health_News" id="health-news">Health</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/Science_News" ? "active" : ""}`} to="/Science_News" id="science-news">Science</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </aside>
            </div>
        </>
    );
}
