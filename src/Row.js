import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.table(movies);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="posters">
        {movies.map((movie) => {
          return (
            <img
              className="row_posters"
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
