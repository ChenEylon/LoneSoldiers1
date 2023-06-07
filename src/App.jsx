
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

function App() {


  return (
    <>
      <div className='body'>
        <Routes>
          <Route path="/" element={<Login />} />
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
