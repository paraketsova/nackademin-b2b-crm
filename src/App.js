import React from 'react';

function App() {

  function handleOnSubmit(e) {
    e.preventDefault()
    console.log("Form submitted")
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>Email</label>
        <input />
        <label>Password</label>
        <input />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default App;
