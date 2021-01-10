import React, { useRef } from 'react';

function App() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function handleOnSubmit(e) {
    e.preventDefault()
    console.log("Form submitted")
    console.log(emailInputRef.current.value)
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>Email</label>
        <input ref={emailInputRef} />
        <label>Password</label>
        <input ref={passwordInputRef} />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default App;
