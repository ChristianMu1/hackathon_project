import { useState } from "react";
import "./App.css";

//Make sure they can only have three max

function App() {
  const [displayPrompt, setDisplayPrompt] = useState(true);
  const [responses, setResponses] = useState(<p>No Responses So Far</p>);

  function handleSubmit(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const descriptors = Array.from(
      event.target.querySelectorAll('input[name="descriptors"]:checked'),
    ).map((input) => input.value);

    // Need atleast one field
    if (!name && descriptors.length === 0) {
      alert("Empty form");
      return;
    }

    // Cant have more than 3
    if (descriptors.length > 3) {
      alert("Cant have more than 3");
      return;
    }

    const reqBody = JSON.stringify({
      name: name,
      descriptors: descriptors,
    });
    // console.log(reqBody)

    // Send to backend
    fetch("httpBLABLABLA", {
      headers: {
        "Content-Type": "application/json",
      },
      body: reqBody,
    }).then((response) => console.log(response));

    //returns a JSON

    // Display people
    setDisplayPrompt(false);
  }

  return (
    <main>
      {displayPrompt ? (
        <form onSubmit={handleSubmit}>
          <h1>Team Search</h1>

          <div className="name-container">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter name..."
            />
          </div>

          <small className="descriptors-name">
            <u>Skills & Technologies</u>
          </small>
          <div className="descriptors-container">
            <div className="type-value">
              <input
                type="checkbox"
                name="descriptors"
                value="Authentification"
              />
              Authentification
            </div>

            <div className="type-value">
              <input type="checkbox" name="descriptors" value="Express" />
              REST
            </div>

            <div className="type-value">
              <input type="checkbox" name="descriptors" value="Database" />
              Database Integration
            </div>

            <div className="type-value">
              <input type="checkbox" name="descriptors" value="Animation" />
              Animation
            </div>

            <div className="type-value">
              <input type="checkbox" name="descriptors" value="UI/UX" />
              UI/UX
            </div>

            <div className="type-value">
              <input type="checkbox" name="descriptors" value="Express" />
              Express
            </div>

            <div className="type-value">
              <input type="checkbox" name="descriptors" value="HTML" />
              HTML
            </div>

            <div className="type-value">
              <input type="checkbox" name="descriptors" value="React" />
              React
            </div>

            <div className="type-value">
              <input type="checkbox" name="descriptors" value="Tailwind" />
              Tailwind
            </div>
          </div>

          <button type="submit"> Look For Teammates </button>
        </form>
      ) : (
        <h1>
          {responses}
          <button onClick={() => setDisplayPrompt(true)}>Search</button>
        </h1>
      )}
    </main>
  );
}

export default App;
