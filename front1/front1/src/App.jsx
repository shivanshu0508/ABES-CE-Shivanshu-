import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'
const App = () => {
  const [show, setShow] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/about")
      .then((res) => {
        setShow(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div><h2>Data Show</h2></div>
      
      {show.map((item, index) => (
        <div key={item.id} id="card" >
          <h3>{item.name}</h3>
          <h3>{item.class}</h3>
          <img 
      src={item.img} 
      alt={item.name}
      width={100}
      height={100}
    />
        </div>
      ))}
    </div>
  );
};

export default App;
