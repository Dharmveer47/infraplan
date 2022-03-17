import React, { useState } from "react";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import "./Styles/App.css";
// I can also use Context api and useReducer to manage state //
//  but in this case it's small project, that's why i'm not use //

function App() {
  const [data, setData] = useState(" ");
  return (
    <div className="App">
      <Navbar data={data} setData={setData} />
      <Landing data={data} />
    </div>
  );
}

export default App;
