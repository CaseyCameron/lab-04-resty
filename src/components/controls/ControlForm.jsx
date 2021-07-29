import React from 'react';

const ControlForm = ({
  urlValue,
  handleURLChange,
  handleMethod,
  bodyValue,
  handleBodyValueChange
}) => {

  return (
    <form>
      <label>URL:</label>
      <input
        value={urlValue}
        type='text'
        placeholder='URL'
        onChange={handleURLChange}
      />
      <button>Go!</button>
      <br />
      <button value='GET' onClick={handleMethod}>GET</button>
      <button value='POST' onClick={handleMethod}>POST</button>
      <button value='PUT' onClick={handleMethod}>PUT</button>
      <button value='PATCH' onClick={handleMethod}>Patch</button>
      <button value='DELETE' onClick={handleMethod}>DELETE</button>
      <br />
      <textarea value={bodyValue} type='text' placeholder='Raw JSON Body' onChange={handleBodyValueChange} />
    </form>
  );
};

export default ControlForm;