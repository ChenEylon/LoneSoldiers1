
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import { VolunteerLayout } from './components/VolunteerLayout'
import { Volunteerpage } from './components/Volunteerpage'
import { SoldierLayout } from './components/SoldierLayout'
import { Homepage } from './components/Homepage'
import { SweetHome } from './components/SweetHome'
import { WalkingWith } from './components/WalkingWith'
import { WarmShoulder } from './components/WarmShoulder'
import  SignUp  from './components/SignUp'
import LoneSoldier from './json/LoneSoldier.json'
import sweetHome from './json/SweetHome.json'
import users from './json/users.json'
import walkingWithYou from './json/walkingWithYou.json'
import warmShoulder from './json/warmShoulder.json'
import FormHouse from './components/FormHouse'

function App() {
  if(!localStorage.getItem("loneSoldierArr")){
    localStorage.setItem("loneSoldierArr",JSON.stringify(LoneSoldier.LoneSoldier));
  }
  if(!localStorage.getItem("usersArr")){
    localStorage.setItem("usersArr",JSON.stringify(users.users));
  }
  if(!localStorage.getItem("walkingArr")){
    localStorage.setItem("walkingArr",JSON.stringify(walkingWithYou.walkingWithYou));
  }
  if(!localStorage.getItem("warmShoulderArr")){
    localStorage.setItem("warmShoulderArr",JSON.stringify(warmShoulder.warmShoulder));
  }
  
  if(!localStorage.getItem("sweetHomeArr")){
    localStorage.setItem("sweetHomeArr",JSON.stringify(sweetHome.sweetHome));
  }

  return (
    <>
      <div className='body'>
        <Routes>
          <Route path="/" element={<FormHouse />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/VolunteerLayout" element={<VolunteerLayout />} />
          <Route path='/VolunteerLayout/Volunteerpage' element={<Volunteerpage />} />
          <Route path="/VolunteerLayout/SoldierLayout" element={<SoldierLayout />} />
          <Route path='/VolunteerLayout/Homepage' element={<Homepage />} />
          <Route path='/VolunteerLayout/SweetHome' element={<SweetHome />} />
          <Route path='/VolunteerLayout/WalkingWith' element={<WalkingWith />} />
          <Route path='/VolunteerLayout/WarmShoulder' element={<WarmShoulder />} />
        </Routes>
      </div>
    </>
  )
}

export default App
