import React, { useState, useEffect } from "react";
import './style/healthnews.css'

function Science() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            fetch("https://newsapi.org/v2/top-headlines?category=science&pagesize=50&language=en&apiKey=8e483ece11494f4da3d1889194bc4790")
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
            <h1 className="text-center">Let's see, What Science is saying?</h1>
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

export default Science;