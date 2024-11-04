import React, { useEffect, useState } from "react";
import "./users.css";
import axios from "axios";
import CreateUser from "./Create_user/CreateUser";

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get("https://reqres.in/api/users");
    const data = response.data.data;
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h3>List of Users</h3>
      <div className="container">
        {users && users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt="avatar" className="avatar" />
            <div className="user-info">
              <p>
                {user.first_name} {user.last_name}
              </p>
              <p>{user.email}</p>
            </div>
          </div>
        ))}
      </div>
      <CreateUser users={users} />
    </>
  );
};

export default Users;
