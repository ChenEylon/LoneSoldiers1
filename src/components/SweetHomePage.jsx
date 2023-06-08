import React ,{useState} from 'react'
import './SweetHome.css'
import emailjs from 'emailjs-com';

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
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_70o4oqk', 'template', e.target, 'ZjMePZlpfng_2A2Jl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    };

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
                  <div className="description-content">
                      <div id="soules">מספר נפשות בבית: {numberOfSouls}</div>
                      <div id="about">{aboutUs}</div>
                      <div id="address">כתובת:{location}</div>
                      <div id="contact">איש קשר: {name} {lastName},{phone}</div>
                      <div id="conditions">תנאים: {condition}</div>
                  </div>
              </div>
          </div>
          

      <form className="email-form" onSubmit={sendEmail}>
      <input type="hidden" name="id" value={id} />
        <input type="hidden" name="name" value={name} />
        <button type="submit">Send Email</button>
      </form>
    </div>
  );

   
  

}