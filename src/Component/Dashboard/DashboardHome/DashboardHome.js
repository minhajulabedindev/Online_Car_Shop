import React, { useEffect, useState } from "react";

import useAuth from "../../Hooks/useAuth";
import DashboardHomes from "./DashboardHomes";

const DashboardHome = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-scrubland-76608.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  console.log(users);
  return (
    <div className="container ">
      <h1>THis Dashboard Home </h1>
      <div className="row mb-2">
        <div div className="col-4">
          Name
        </div>
        <div div className="col-4">
          email
        </div>
        <div div className="col-4">
          Id
        </div>{" "}
        <hr />
      </div>

      <div className="row">
        {users.map((users) => (
          <DashboardHomes users={users} key={users.email}>
            {" "}
          </DashboardHomes>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
