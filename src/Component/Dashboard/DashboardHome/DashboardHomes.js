// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import useAuth from "../Hooks/useAuth";
// import DashboardHome from "./DashboardHome";

// const DashboardHomes = () => {
//   const { user } = useAuth();

//   const [saveProduct, setSaveProduct] = useState([]);
//   console.log(saveProduct);
//   //fetch savedProduct API
//   useEffect(() => {
//     fetch("https://afternoon-scrubland-76608.herokuapp.com/card")
//       .then((res) => res.json())
//       .then((data) => setSaveProduct(data));
//   }, []);

//   const UsersProduct = saveProduct.filter((product) => product.email === user.email);
//   return (
//     <div>
//       {/* {UsersProduct.map((product) => (
//         <DashboardHome key={product._id} product={product}></DashboardHome>
//       ))} */}
//     </div>
//   );
// };

// export default DashboardHomes;
