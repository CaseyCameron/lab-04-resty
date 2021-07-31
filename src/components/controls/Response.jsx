import React from 'react';
import PropTypes from 'prop-types';
import style from './Response.css';

const Response = ({ response }) => {
  return (
    <section className={style.Response}>
      <pre>
        <code className="prettyprint" data-testid='responseBody'>
          {JSON.stringify(response, null, 4)}
        </code>
      </pre>
    </section>
  );
};

Response.propTypes = {
  response: PropTypes.any.isRequired,
}

export default Response;