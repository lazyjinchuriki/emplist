import React, { useState } from "react";
import UserList from "../UserList/UserList";
import "./Navbar.css";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <nav className="navbar">
      <input
        type="text"
        className="search-input"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <UserList page={2} searchTerm={searchTerm} />
    </nav>
  );
}

export default Navbar;
