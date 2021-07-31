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
    <section className={style.Form}>
      <form aria-label='api-form' onSubmit={handleSubmit}>
        <p>https://last-airbender-api.herokuapp.com/api/v1/characters/5cf5679a915ecad153ab68c8</p>
        <label></label>
        <input
          value={urlValue}
          type='text'
          placeholder='URL'
          onChange={handleURLChange}
        />
        <button className='button' name='submit'>Go!</button>
        <br />
        <label><input type='radio' name='method' value='GET' checked={method === 'GET'} onChange={handleMethod} />GET</label>
        <label><input type='radio' name='method' value='POST' checked={method === 'POST'} onChange={handleMethod} />POST</label>
        <label><input type='radio' name='method' value='PUT' checked={method === 'PUT'} onChange={handleMethod} />PUT</label>
        <label><input type='radio' name='method' value='PATCH' checked={method === 'PATCH'} onChange={handleMethod} />PATCH</label>
        <label><input type='radio' name='method' value='DELETE' checked={method === 'DELETE'} onChange={handleMethod} />DELETE</label>
        <br />
        <textarea value={bodyValue} type='text' placeholder='Raw JSON Body' onChange={handleBodyValueChange} />
      </form>
    </section>
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