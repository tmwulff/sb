import React from "react";
import { useState, useEffect } from "react";
  
const Home = () => {
    const [data, setdata] = useState({
        Teams: []
    });

    // // Using useEffect for single rendering
    // useEffect(() => {
    //     // Using fetch to fetch the api from 
    //     // flask server it will be redirected to proxy
    //     fetch("/data").then((res) =>
    //         res.json().then((data) => {
    //             // Setting a data from api
    //             setdata({
    //                 Teams: data.Teams,
    //             });
    //         })
    //     );
    // }, []);

  return (
    <div>
      <h1>Live Games</h1>
    </div>
  );
};
  
export default Home;