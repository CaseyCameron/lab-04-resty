import React from 'react';

const ControlForm = (handleMethod) => {
  return (
    <form>
      <label>URL:</label>
      <input
        type='text'
        placeholder='URL'
      />
      <button>Go!</button>
      <br />
      <button value='GET' onClick={handleMethod}>GET</button>
      <button value='POST' onClick={handleMethod}>POST</button>
      <button value='PUT' onClick={handleMethod}>PUT</button>
      <button value='PATCH' onClick={handleMethod}>Patch</button>
      <button value='DELETE' onClick={handleMethod}>DELETE</button>
      <br />
      <textarea type='text' placeholder='Raw JSON Body' />
    </form>
  );
};

export default ControlForm;