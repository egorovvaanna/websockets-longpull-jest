import React from "react";
import "./App.css";
import { LongPulling } from "./components/LongPulling";
import  Websock from "./components/Websockets";

function App() {
  return (
    <div className="App">
      {/* <LongPulling /> */}
      <Websock/>
    </div>
  );
}

export default App;
