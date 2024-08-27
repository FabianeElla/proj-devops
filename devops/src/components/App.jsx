import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: ""

  });

  function handleChange(event) {
    const { value, name } = event.target;

    setContact((prevContact) => {
      if (name === "fName") {
        return {
          fName: value,
        };
      } else if (name === "lName") {
        return {
            fName: prevContact.fName,
            lName: value,
        };
    }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
