import React, { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../Hooks/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();
  const { items, setItems } = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/card")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return <div></div>;
};

export default DashboardHome;
