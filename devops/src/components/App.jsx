import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""

  });

  function handleChange(event) {
    const { value, name } = event.target;

    setContact((PREVCOMENT) => {
      if (name === "fName") {
        return {
          fName: value,
        };
      } else if (name === "lName") {
        return {
            fName: PREVCOMENT.fName,
            lName: value
        };
    } else {
        return {
            fName: PREVCOMENT.fName,
            lName: PREVCOMENT.lName,
            email: value
        };
    }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} name="email" placeholder="Email" type="email"/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
