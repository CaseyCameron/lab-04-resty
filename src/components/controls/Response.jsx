import React from 'react';

const Response = ({ response }) => {
  return (
    <pre>
      <code className="prettyprint" placeholder='Your JSON response here'>
        {JSON.stringify(response, null, 4)}
      </code>
    </pre>
  );
};

export default Response;