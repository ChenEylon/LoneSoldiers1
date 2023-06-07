import React ,{useState} from 'react'
import './SweetHome.css'

export const SweetHomePage = ({ index }) => {
  const [sweetHomeArr, setsweetHomeArr] = useState(JSON.parse(localStorage.getItem("sweetHomeArr")));
 
  let imgUrl = sweetHomeArr[index].img;
  let phone = sweetHomeArr[index].phone;
  let contact = sweetHomeArr[index].contact;
  let discription = sweetHomeArr[index].discription;
  let  condition = sweetHomeArr[index].condition;
  let  lastName= sweetHomeArr[index]. lastName;
  let name = sweetHomeArr[index].name;
  let id = sweetHomeArr[index].id;
  let numberOfSouls = sweetHomeArr[index].numberOfSouls;
  let aboutUs = sweetHomeArr[index].aboutUs;
  let location = sweetHomeArr[index].location;

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
        <span id="price">{location}</span>
        <span id="price">{aboutUs}</span>
        <span id="price">{numberOfSouls}</span>
        <span id="view-btn">{discription}</span>
        </div>
    </div>
  );
}
