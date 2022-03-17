import React, { useState  } from "react";
import Logo from "../logo.svg";
import "../Styles/Navbar.css";
const Navbar = ({setData ,setSearchTrue}) => {

  const [search, setSearch] = useState("");
 

  const sumbitHandler = (e) => {
    e.preventDefault();
    setData(search);
    setSearchTrue(true);
    setSearch(" ");
  };
  return (
    <form onSubmit={sumbitHandler} className="nav_bar">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="inputArea">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter user first name, title"
        
        />
      </div>
    </form>
  );
};

export default Navbar;
