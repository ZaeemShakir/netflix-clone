import "./App.css";
import Row from "./Row";
import React from "react";
import request from "./request";
function App() {
  return (
    <div className="App">
      <div>
        <Row title="Netflix Orignal" fetchURL={request.fetchNetflixOrignals} />
        <Row title="Trendings" fetchURL={request.fetchTrending} />
      </div>
    </div>
  );
}

export default App;
