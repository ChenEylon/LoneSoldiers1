import React ,{useState} from 'react'
import './WalkingWith.css'

export const WalkingWithPage = () => {
  const [walkingArr, setwalkingArr] = useState(JSON.parse(localStorage.getItem("walkingArr")));
 
  let imgUrl = walkingArr[index].img;
  let phone = walkingArr[index].phone;
  let contact = walkingArr[index].contact;
  let discription = walkingArr[index].discription;
  let  lastName= walkingArr[index]. lastName;
  let name = walkingArr[index].name;
  let id = walkingArr[index].id;


  return (
    <div id="card-container">
      <div id="image-container">
        <img id="the-img" src={imgUrl} />
        <div id="info">
        <div id="card-discription">
        <h3>"{name}{lastName}"</h3>
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

