import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [usersArr, setUsersArr] = useState(JSON.parse(localStorage.getItem("usersArr")) || []);
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginData, setLoginData] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [theUser, setTheUser] = useState(null);
  
  useEffect(() => {
    setTheUser(usersArr?.find((user) => user.email === username));
  }, [usersArr, username]);

  
  useEffect(() => {
    const loginDataString = localStorage.getItem('loginData');
    if (loginDataString) {
      const parsedLoginData = JSON.parse(loginDataString);
      setLoginData(parsedLoginData);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (theUser && theUser.password === password) {
      const updatedLoginData = {
        [username]: password
      };
      const updatedLoginDataString = JSON.stringify(updatedLoginData);

      localStorage.setItem('loginData', updatedLoginDataString);

      setLoginData(updatedLoginData);
      setSubmitted(true);
      // setIsLogIn(true);

      const url = `/Volunteerpage`;
      window.history.pushState({}, "", url);
      window.location.reload();
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  };

  return (
    <div>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white">
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">התחבר בתור מתנדב</h2>
                  <p className="text-white-50 mb-5">אנא הכנס אימייל וסיסמה</p>
                  <div className="form-outline form-white mb-4">
                    <input type="email" className="form-control form-control-lg" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label className="form-label">אימייל</label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input type="password" className="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label className="form-label">סיסמה</label>
                  </div>
                  <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleLogin}>התחבר</button>
                </div>
                <div>
                  <p className="mb-0">אין לך עדיין חשבון? <Link to="/SignUp" className="text-white-50 fw-bold">הירשם</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
