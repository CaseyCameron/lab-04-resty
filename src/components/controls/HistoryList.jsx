import React from 'react';
import History from './History';

const HistoryList = ({ history }) => {
  console.log('HistoryList', history);
  console.log('History Method', history[0].method);
  const historyElements = history.map((element, index) => (
    <li key={index}>
      <History {...element} />
    </li>
  ));
  return <ul>{historyElements}</ul>
}

export default HistoryList;