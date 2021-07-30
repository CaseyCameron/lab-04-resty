import React from 'react';
import PropTypes from 'prop-types';

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

History.propTypes = {
  method: PropTypes.string.isRequired,
  urlValue: PropTypes.string.isRequired,
};

export default History;