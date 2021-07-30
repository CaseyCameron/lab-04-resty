import React from 'react';

const ControlForm = ({
  urlValue,
  handleURLChange,
  handleMethod,
  bodyValue,
  handleBodyValueChange,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <p>https://last-airbender-api.herokuapp.com/api/v1/characters/5cf5679a915ecad153ab68c8</p>
      <label>URL:</label>
      <input
        value={urlValue}
        type='text'
        placeholder='URL'
        onChange={handleURLChange}
      />
      <button name='submit'>Go!</button>
      <br />
      <label>
        <input type='radio' value='GET' onChange={handleMethod} />
        <span>GET</span>
      </label>
      <label>
        <input type='radio' value='POST' onChange={handleMethod} />
        <span>POST</span>
      </label>
      <label>
        <input type='radio' value='PUT' onChange={handleMethod} />
        <span>PUT</span>
      </label>
      <label>
        <input type='radio' value='PATCH' onChange={handleMethod} />
        <span>PATCH</span>
      </label>
      <label>
        <input type='radio' value='DELETE' onChange={handleMethod} />
        <span>DELETE</span>
      </label>
      <br />
      <textarea value={bodyValue} type='text' placeholder='Raw JSON Body' onChange={handleBodyValueChange} />
    </form>
  );
};

export default ControlForm;