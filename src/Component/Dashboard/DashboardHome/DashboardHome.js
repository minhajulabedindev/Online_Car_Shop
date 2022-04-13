import React, { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../Hooks/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();
  const { items, setItems } = useState([]);
  useEffect(() => {
    fetch("https://afternoon-scrubland-76608.herokuapp.com/card")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return <div></div>;
};

export default DashboardHome;
