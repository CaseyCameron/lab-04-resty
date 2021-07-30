import React from 'react';
import PropTypes from 'prop-types';

const Response = ({ response }) => {
  return (
    <pre>
      <code className="prettyprint" placeholder='Your JSON response here'>
        {JSON.stringify(response, null, 4)}
      </code>
    </pre>
  );
};

Response.propTypes = {
  response: PropTypes.any.isRequired,
}

export default Response;