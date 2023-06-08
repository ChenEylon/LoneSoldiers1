import React, { useState } from "react";
import "./WalkingWith.css";


export const WalkingWithPage = ({ index }) => {
  const [walkingArr, setwalkingArr] = useState(
    JSON.parse(localStorage.getItem("walkingArr"))
  );
  let imgUrl = walkingArr[index].img;
  let phone = walkingArr[index].phone;
  let contact = walkingArr[index].contact;
  let discription = walkingArr[index].discription;
  let lastName = walkingArr[index].lastName;
  let name = walkingArr[index].name;
  let email = walkingArr[index].id;
  
  function handleClick(){
     alert(`תודה שבחרת ב${name} להיות המנטור שלך, הוא יצור קשר בקרוב`)
  }

  return (
    <div id="waking-card-container">
      <div id="waking-card">
      <div id="image-container">
        <img id="the-img" src={imgUrl} />
      </div>

          <div id="card-discription">
            <h1 id="name-title">{name} {lastName}</h1>
            <div>
            <div id="vol-description">
              <h3>קצת עלי:</h3>
              <p>{discription}</p>
            </div>
            <div>
              <h3>מוזמן לפנות אלי בכל שאלה בטלפון: {phone}</h3>
            </div>
            </div>
          <button className="grab-my-hand-btn" onClick={()=>handleClick()}>grab my hand</button>
          </div>
          </div>
    </div>
  );
};
