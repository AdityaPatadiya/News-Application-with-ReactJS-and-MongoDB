import React from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import MyForm from './Form';
import Sources from './News_Sources';
import Business from './Business_News';
import Sports from './Sports_news';
import Tech from './Technology_News';
import Health from './Health_News';
import General from './General_News_Page';
import SignUp from './SignUp';
import Footer from './footer';
import Science from './Science_News';
import Categories from './Categories';
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Form" element={<MyForm />} />
          <Route path="/News_Sources" element={<Sources />} />
          <Route path="/Business_News" element={<Business />} />
          <Route path="/Sports_news" element={<Sports />} />
          <Route path="/Technology_News" element={<Tech />} />
          <Route path="/Health_News" element={<Health />} />
          <Route path="/General_News_Page" element={<General />} />
          <Route path="/Science_News" element={<Science />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}


function HomePage() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch("https://newsapi.org/v2/top-headlines?country=in&pagesize=50&apiKey=8e483ece11494f4da3d1889194bc4790")
        .then(res => res.json())
        .then(data => {
          if (data.status === "ok") {
            setArticles(data.articles);
          } else {
            console.error("Error fetching data:", data.message);
          }
        })
        .catch(err => console.error("Error fetching data:", err));
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <br />
      <h1 className="text-center">"Grab a Cup of Tea with Our Newsletter!"</h1>
      <br />

      <div className="row">
        {articles.map((article, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card">
              <img
                src={article.urlToImage}
                alt=""
                className="card-img-top"
                style={{
                  width: "100%",
                  height: "200px", // Set a fixed height for the images
                  objectFit: "cover", // Maintain aspect ratio (cover image)
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text" style={{ maxHeight: "3.4em", overflow: "hidden", textOverflow: "ellipsis" }}>{article.description}</p>
                <a href={article.url} className="btn btn-warning" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;