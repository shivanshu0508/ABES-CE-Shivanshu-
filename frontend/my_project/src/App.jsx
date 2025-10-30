import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.css";
import './App.css'
import img from './assets/Images/logo.jpg';
import Card from './component/Card';
import Navbar from './component/Navbar';
import Comp2 from './component/Comp2';

function App() {

  return (
    <div>
      <Navbar name="Home"/> 
      <br />
      <Comp2 />
      <br />
      <br />
      <br />
      <div id='dv'>
      <Card disn="Pizza" img="https://jambubakers.com/wp-content/uploads/2023/07/pizza.png" disp="₹120" />
      <Card disn="Burgar" img="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg" disp="₹140" />
      <Card disn="Momoes" img="https://upload.wikimedia.org/wikipedia/commons/a/a1/Momo_nepal.jpg" disp="₹150" />
      </div>

      
      <Navbar name="Ghaziabad"/> 

    </div>
  );
}

export default App