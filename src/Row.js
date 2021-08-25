import React, { useEffect, useState } from "react";
import axios from "./axios";
function Row({ title }) {
  const [movies, setmovies] = useState([]);
  useEffect(() => {}, []);
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
