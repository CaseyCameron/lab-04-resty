import React from 'react';
import History from './History';
import PropTypes from 'prop-types';
import style from './HistoryList.css';

const HistoryList = ({ history }) => {
  const historyElements = history.map((element, index) => (
    <li key={index} data-testid='history-id'>
      <History {...element} />
    </li>
  ));
  return (
    <ul className={style.HistoryList} aria-label='history-items'>{historyElements}</ul>
  );
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