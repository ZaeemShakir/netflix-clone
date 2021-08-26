import "./App.css";
import Row from "./Row";
import React from "react";
import request from "./request";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="app">
      <div>
        {/*Nav Bar */}
        {/*Banner */}
        <Nav />
        <Banner />
        <Row
          title="Netflix Original"
          fetchUrl={request.fetchNetflixOrignals}
          isLargeRow
        />
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
