import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const directorsDiv = directors.map((d, i) => (
    <div key={i}>
      <h3>Name {d.name}</h3>
      <ul>
        {d.movies.map((m,i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsDiv}
    </div>
  );
}

export default Directors
