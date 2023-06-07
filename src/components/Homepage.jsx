import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalkingArrowRight,faHouse,faPhoneVolume } from '@fortawesome/free-solid-svg-icons';



export const Homepage = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src="https://www.newarab.com/sites/default/files/media/images/F433CDF2-DFED-4DAA-94AB-8D6FEADAC990.jpg" alt="Soldiers" />
        <div className="image-text-overlay">
          <p>התנדב ועזור לחיילים בודדים</p>
        </div>
      </div>
      <div className="website-description">
        <div className="website-description-container">
          <div className="website-description-image">
            <img src='../soldierboy.png' alt="Soldier" />
          </div>
          <div className="website-description-container-complete">
            <div className="website-description-pos-right">
              <p className="website-description-header">מה אנחנו מציעים?</p>
              <p className="website-description-content">
                ברוך הבא לאתר התנדבויות למען חיילים בודדים! האתר הזה מיועד לאנשים רוצים להתנדב ולתמוך בחיילים שנמצאים במצבים בודדים וללא קשרים משפחתיים במהלך שירותם הצבאי.<br/>
                התנדבות באמצעותנו מספקת את ההזדמנות לתת מעצמך ולתמוך בחיילים בדרך שמתאימה לך.<br/>
                בנוסף, תוכל לקבל מידע מפורט על הפרויקטים הקיימים והצרכים הנוכחיים של החיילים, כדי שתוכל לבחור את האפשרות המתאימה לך ולהתנדב בצורה שתתחשב בכל המערכות והתנאים שלך.<br/>
                אנו מזמינים אותך להצטרף אלינו ולהיות חלק ממערך התמיכה החשוב הזה.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="activity-wrapper-container">
        <div className="activity-large-container">
          <div className="activity-container">
            <div className="info-activity-container">
              <div className="activity-icon">
              <FontAwesomeIcon icon={faHouse} style={{ color: 'white' }} />
              </div>
              <p className="activity-text">ספק בית לחייל בודד ותעשה להם את היום</p>
              <p className="activity-description">ספקו לחייל בודד את ביתכם החם והתנדבו היום בכדי לעזור לקהילה ולחמם לעוד חייל את הלב. אנחנו רק נקשר אתכם אל החייל שלכם וקבלו אותו באהבה</p>
              <div className="sign-button">
              <Link to='/Soldier/WalkingWith' ><button>ללכת איתך</button></Link>
              </div>
            </div>
          </div>
          <div className="activity-container">
            <div className="info-activity-container">
              <div className="activity-icon">
              <FontAwesomeIcon icon={faPersonWalkingArrowRight} style={{ color: 'white' }} />

              </div>
              <p className="activity-text">ספק בית לחייל בודד ותעשה להם את היום</p>
              <p className="activity-description">ספקו לחייל בודד את ביתכם החם והתנדבו היום בכדי לעזור לקהילה ולחמם לעוד חייל את הלב. אנחנו רק נקשר אתכם אל החייל שלכם וקבלו אותו באהבה</p>
              <div className="sign-button">
              <Link to='/Soldier/SweetHome'> <button> בית חם</button></Link>
              </div>
            </div>
          </div>
          <div className="activity-container">
            <div className="info-activity-container">
              <div className="activity-icon">
              <FontAwesomeIcon icon={faPhoneVolume} style={{ color: 'white' }} />
              </div>
              <p className="activity-text">ספק בית לחייל בודד ותעשה להם את היום</p>
              <p className="activity-description">ספקו לחייל בודד את ביתכם החם והתנדבו היום בכדי לעזור לקהילה ולחמם לעוד חייל את הלב. אנחנו רק נקשר אתכם אל החייל שלכם וקבלו אותו באהבה</p>
              <div className="sign-button">
              <Link to='/Soldier/WarmShoulder'> <button> כתף חמה</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
