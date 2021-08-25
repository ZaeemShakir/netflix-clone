import "./App.css";
import Row from "./Row";
import React from "react";
import request from "./request";
function App() {
  return (
    <div className="App">
      <div>
        <Row title="Netflix Original" fetchUrl={request.fetchNetflixOrignals} />
        <Row title="Trendings" fetchUrl={request.fetchTrending} />
        <Row title="Romance" fetchUrl={request.fetchRomanceMovies} />
        <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
        <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
        <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
        <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      </div>
    </div>
  );
}

export default App;
