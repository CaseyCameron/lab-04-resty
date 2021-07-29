import React from 'react';

const ControlForm = () => {
  return (
    <form>
      <label hfmlFor='url'>URL:</label>
      <input
        type='text'
        placeholder='URL'
      />
      <button>Go!</button>
      <br />
      <button value='GET'>GET</button>
      <button value='POST'>POST</button>
      <button value='PUT'>PUT</button>
      <button value='PATCH'>Patch</button>
      <button value='DELETE'>DELETE</button>
      <br />
      <textarea type='text' placeholder='Raw JSON Body' />
    </form>
  );
};

export default ControlForm;