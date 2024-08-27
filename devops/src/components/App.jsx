import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setContact(() => {
      if (name === "fName") {
        return {
          fName: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName}
      </h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
