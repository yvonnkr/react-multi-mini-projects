import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className='ui negative message'>
      <i className='close icon'></i>
      <div className='header'>Error!</div>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
