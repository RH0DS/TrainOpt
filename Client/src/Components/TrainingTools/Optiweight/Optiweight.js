import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import './Optiweight.css'
import Header from "../../Header/Header";


function Optiweight(props) {

    const [name, setName] = useState("");
    const [weight, setWeight] = useState("");

  return (
    <>
    <Header/>
    <div className="optiweightContainer">

        <input
        type="number"
        placeholder="Enter your current weight"
        value={weight}
        onChange={(e)=> setWeight(e.target.value)}
        required
        />

    <div>
        <button className="red"> button 1 </button>
        <button className="green"> button 2 </button>
        <button className="blå"> button 3 </button>
        <button > button 4 </button>
        <button> button 5 </button>
    </div>

    <div>
        {weight}
    </div>
    </div>
    </> 
  );
}





export default Optiweight;