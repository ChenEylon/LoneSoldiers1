import React  ,{useState}  from 'react'
import './WarmShoulder.css'
import { Link } from "react-router-dom";

export const WarmShoulderPage = ({index}) => {
  const [warmShoulderArr, setwarmShoulderArr] = useState(JSON.parse(localStorage.getItem("warmShoulderArr")));
 
  let imgUrl = warmShoulderArr[index].img;
  let phone = warmShoulderArr[index].phone;
  let contact = warmShoulderArr[index].contact;
  let discription = warmShoulderArr[index].discription;
  let  condition = warmShoulderArr[index].condition;
  let  lastName= warmShoulderArr[index]. lastName;
  let name = warmShoulderArr[index].name;
  let id = warmShoulderArr[index].id;


  return (
    <div id="card-container">
      <div id="image-container">
        <img id="the-img" src={imgUrl} />
        <div id="info">
        <div id="card-discription">
        <h3>"{name}{lastName}"</h3>
          <span>
            {condition} 
          </span>
          <span>  Call:{phone}</span>
        </div>
      </div>
      </div>
        <div id="buy-section">
        <span id="price">{contact}</span>
        <span id="price">{id}</span>
        <span id="view-btn">{discription}</span>
        </div>
    </div>
  );
}
