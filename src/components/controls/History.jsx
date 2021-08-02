import React from 'react';
import PropTypes from 'prop-types';

const History = ({ method, urlValue }) => {
  return (
    <>
      <p>{method}</p>
      <p>{urlValue}</p>
    </>
  )
};

History.propTypes = {
  method: PropTypes.string.isRequired,
  urlValue: PropTypes.string.isRequired,
};

export default History;