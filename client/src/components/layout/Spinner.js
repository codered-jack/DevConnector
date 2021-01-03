import React from 'react';
import spinner from './spinner.gif';
export default () => {
  return (
    <>
      <img
        src={spinner}
        style={{ height: '100px',width:'100px', margin: 'auto', display: 'block' }}
        alt='Loading...'
      />
    </>
  );
};
