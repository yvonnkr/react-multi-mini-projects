import React from 'react';

const JsxApp = () => {
  const buttonText = { text: 'Click Me' };
  const labelText = 'Enter Name:';
  return (
    <div>
      <h2>Functional Component jsx</h2>
      <label className='label' htmlFor='name'>
        {labelText}
      </label>
      <input id='name' type='text' />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  );
};

export default JsxApp;

// ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<App />, document.querySelector('#root'));
