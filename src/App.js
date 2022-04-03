import React from "react"
import './App.css';
import Header from "./Compoents/Header/Header";
import NavBar from "./Compoents/NavBar/NavBar";
import Profile from "./Compoents/Profile/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <NavBar/>
      <Profile/>
    </div>
  );
}

export default App;
