import "./App.css";
import React, { useState } from "react";

// to test, copy and paste entire file to App.js
function App() {
  const [resourceType, setResourceType] = useState("posts");

  return (
    <div className="App" style={{ margin: "3rem" }}>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </div>
  );
}

export default App;
