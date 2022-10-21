import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Share/Navbar";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
