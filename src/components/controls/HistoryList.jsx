import React from 'react';
import History from './History';

const HistoryList = ({ history }) => {
  console.log('HistoryList', history);
  const historyElements = history.map((element, index) => (
    <li key={index}>
      <History {...element} />
    </li>
  ));
  return <ul>{historyElements}</ul>
}

export default HistoryList;