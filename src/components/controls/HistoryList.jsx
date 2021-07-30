import React from 'react';

const HistoryList = ({ history }) => {
  const historyElements = history.map(element, index => (
    <li key={index}>
      <History {...history}
      />
    </li>
  ));
  return (<ul>{historyElements}</ul>)
}

export default HistoryList;