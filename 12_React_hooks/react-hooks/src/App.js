import "./App.css";
import React, { useState, useEffect, useRef } from "react";

// to test, copy and paste entire file to App.js
function App() {
  const [name, setName] = useState("");
  // the useState for renderCount below is just an example to use with the useEffect to set renderCount
  // const [renderCount, setRenderCount] = useState(0);

  // useRef can be used to store information that persists through re-render, but it doesn't cause a re-render like state does

  // Use case #1:
  // useRef can take a default value, we're using 0 as below
  const renderCount = useRef(1);
  // useRef will return an object with a key named current. And the initial value will be set to current. Like this: {current: 0}
  // when we update the current property, that's what's persisted between renders

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  // the useEffect below will run an infinite loop, the component just keep rendering again and again. Which  is why useState is not a good choice to count render.
  // useEffect(() => {
  //   setRenderCount((prevRenderCount) => prevRenderCount + 1);
  // });

  // Use case #2:

  return (
    <div className="App" style={{ margin: "3rem" }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>My name is {name}</h1>
      <h2>I rendered {renderCount.current} times</h2>
    </div>
  );
}

export default App;
