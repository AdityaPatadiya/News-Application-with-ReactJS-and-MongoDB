import { useState, useEffect } from "react";

function Sources() {
    const [sources, setSources] = useState([]);

    useEffect(() => {
      const fetchData = () => {
        fetch("https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=8e483ece11494f4da3d1889194bc4790")
          .then(res => res.json())
          .then(data => {
            if (data.status === "ok") {
              setSources(data.sources); // store the source key from api.
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
        <h1 className="text-center">News Sources</h1>
        <div className="row">
          {sources.map(source => (
            <div key={source.id} className="col-md-3">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title"><a href={source.url} target="_blank" rel="noopener noreferrer">{source.name}</a></h5>
                  <p className="card-text">{source.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Sources