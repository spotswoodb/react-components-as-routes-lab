import React from 'react';
import { movies } from '../data';

const Movies = () => {
  
  const moviesDiv = movies.map((m, i) => (
    <div key={i}>
      <h3>Title: {m.title}</h3>
      <p>Time {m.time}</p>
      <ul>
        {m.genres.map ((g, i) => (
          <li key={i}>{g}</li>
        ))}
      </ul>
    </div>
  ))
  
  return (
    <div>
        <h1>Movies Page</h1>
        {moviesDiv}
    </div>
  );
};

export default Movies;
