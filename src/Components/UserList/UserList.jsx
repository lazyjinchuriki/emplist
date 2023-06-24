import React, { useEffect, useState } from "react";
import "./UserList.css";

function UserList({ searchTerm }) {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch("https://reqres.in/api/users?page=2");
    //     const data = await response.json();
    //     console.log(data);
    //     setUsers(data.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

    // Fetch user data from page 1
    const fetchPage1Data = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users?page=1"); // Replace with your API endpoint for page 1
        const data = await response.json();
        setUsers(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    // Fetch user data from page 2
    const fetchPage2Data = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users?page=2"); // Replace with your API endpoint for page 2
        const data = await response.json();
        setUsers((prevUsers) => [...prevUsers, ...data.data]);
      } catch (error) {
        console.log(error);
      }
    };

    // Fetch data from both pages
    const fetchData = async () => {
      await Promise.all([fetchPage1Data(), fetchPage2Data()]);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = users.filter(
      (user) =>
        user.first_name.includes(searchTerm) ||
        user.last_name.includes(searchTerm) ||
        user.email.includes(searchTerm)
    );
    setFilteredUsers(filteredData);
  }, [users, searchTerm]);

  return (
    <div className="userList">
      {filteredUsers.map((user) => (
        <div key={user.id}>
          <p className="id">{user.id}</p>
          <div className="box">
            <img src={user.avatar} alt={user.first_name} />
          </div>
          <h3>
            {user.first_name} {user.last_name}
          </h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
