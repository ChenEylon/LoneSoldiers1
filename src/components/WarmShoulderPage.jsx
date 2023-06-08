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
  let enmail = warmShoulderArr[index].id;

  function handleClick(){
    alert(`תודה שבחרת ב${name} להיות שם בשבילך, הוא יצור קשר בקרוב`)
 }

 return (
   <div id="warm-container">
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