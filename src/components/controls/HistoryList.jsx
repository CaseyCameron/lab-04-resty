import React from 'react';
import History from './History';
import PropTypes from 'prop-types';

const HistoryList = ({ history }) => {
  const historyElements = history.map((element, index) => (
    <li key={index}>
      <History {...element} />
    </li>
  ));
  return <ul>{historyElements}</ul>
};

HistoryList.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      method: PropTypes.string.isRequired,
      urlValue: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HistoryList;