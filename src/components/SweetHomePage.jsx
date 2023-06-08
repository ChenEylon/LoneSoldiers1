import React ,{useState} from 'react'
import './SweetHome.css'

export const SweetHomePage = ({ index }) => {
  const [sweetHomeArr, setsweetHomeArr] = useState(JSON.parse(localStorage.getItem("sweetHomeArr")));
 
  let imgUrl = sweetHomeArr[index].img;
  let phone = sweetHomeArr[index].phone;
  let contact = sweetHomeArr[index].contact;
  let discription = sweetHomeArr[index].discription;
  let  condition = sweetHomeArr[index].conditions;
  let  lastName= sweetHomeArr[index]. lastName;
  let name = sweetHomeArr[index].name;
  let id = sweetHomeArr[index].id;
  let numberOfSouls = sweetHomeArr[index].numberOfSouls;
  let aboutUs = sweetHomeArr[index].aboutUs;
  let location = sweetHomeArr[index].location;

  return (
    
      <div className="sweet-home-card-container">
              <img className="image-container-sweet" src={imgUrl} alt=""  />
          <div className="description-container-sweet">
              <div className="description-header-container">    
                  <p  className="description-header">
                    {lastName}
                  </p>
              </div>
              <div className="description-content-container">
                  <p className="description-content">
                      <div id="soules">מספר נפשות בבית: {numberOfSouls}</div>
                      <div id="about">{aboutUs}</div>
                      <div id="address">כתובת:{location}</div>
                      <div id="contact">איש קשר: {name} {lastName},{phone}</div>
                      <div id="conditions">תנאים: {condition}</div>
                  </p>
              </div>
          </div>
          
   </div>
  
);
}