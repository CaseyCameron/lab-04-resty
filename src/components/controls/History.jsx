import React from 'react';

const History = ({ method, urlValue }) => {
  return (
    <figure>
      <figcaption>
        <p>{method}</p>
        <p>{urlValue}</p>
      </figcaption>
    </figure>
  )
};

export default History;