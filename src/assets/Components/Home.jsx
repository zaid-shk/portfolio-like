import React from "react";
import myImage from "/assets/Image.png"; // adjust the path

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <img src={myImage} alt="Example" />
    </div>
  );
}

export default App;