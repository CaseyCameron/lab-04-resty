import React from 'react';
import PropTypes from 'prop-types';
import style from './ControlForm.css';

const ControlForm = ({
  urlValue,
  handleURLChange,
  handleMethod,
  method,
  bodyValue,
  handleBodyValueChange,
  handleSubmit
}) => {

  return (
    <section>
      <form className={style.Form} aria-label='api-form' onSubmit={handleSubmit}>
        <p>https://last-airbender-api.herokuapp.com/api/v1/characters/5cf5679a915ecad153ab68c8</p>
        <input
          style={{ width: '120vh' }}
          className='url'
          value={urlValue}
          type='text'
          placeholder='URL'
          onChange={handleURLChange}
        />
        <br />
        <section>
          <input type='radio' id='get' name='method' value='GET' checked={method === 'GET'} onChange={handleMethod} />
          <label for='get'>GET</label>
          <input type='radio' id='post' name='method' value='POST' checked={method === 'POST'} onChange={handleMethod} />
          <label for='post'>POST</label>
          <input type='radio' id='put' name='method' value='PUT' checked={method === 'PUT'} onChange={handleMethod} />
          <label for='put'>PUT</label>
          <input type='radio' id='patch' name='method' value='PATCH' checked={method === 'PATCH'} onChange={handleMethod} />
          <label for='patch'>PATCH</label>
          <input type='radio' id='delete' name='method' value='DELETE' checked={method === 'DELETE'} onChange={handleMethod} />
          <label for='delete'>DELETE</label>
          <button name='submit'>Go!</button>
        </section>
        <br />
        <textarea value={bodyValue} type='text' placeholder='Raw JSON Body' onChange={handleBodyValueChange} />
      </form>
    </section >
  );
};

ControlForm.propTypes = {
  urlValue: PropTypes.string.isRequired,
  handleURLChange: PropTypes.func.isRequired,
  handleMethod: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
  bodyValue: PropTypes.string.isRequired,
  handleBodyValueChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ControlForm;