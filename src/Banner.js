import React, { useState, useEffect } from "react";
import axios from "./axios";
import request from "./request";
import "./Banner.css";

const baseurl = "https://image.tmdb.org/t/p/original/";
function Banner() {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(request.fetchNetflixOrignals);
      setmovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return response;
    }
    fetchData();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "Cover",
        backgroundImage: `url(${baseurl}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      {/* background image*/}
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.orignal_name}
        </h1>
        <div>
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <div>
          <h1 className="banner_description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </div>
      <div className="banner_fadebottom" />
    </header>
  );
}

export default Banner;
