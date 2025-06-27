import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import UserForm from './Forms/SignUp'
import ChangePasswordForm from './Forms/ChangePassword'
import LoginForm from './Forms/LogIn'
import ForgotPasswordForm from './Forms/ForgotPassword'
import SearchAddress from './Forms/Address'
import TodoAccordion from './Home/DisplayTodo'
import Home from './Home/Home'
import CropForm from './Forms/CropDetail'
import UserProfilePage from './User/YouPage'
import LikesPage from './User/LikePage'
import DislikedVideosPage from './User/DislikePage'
import DownloadsPage from './User/Downloads'
import UserFeedbackForm from './User/UserFeedback'
import VideoFeedbackForm from './User/VideoFeed'
import BottomNavBar from '../Navigation/BottomNav'
import AllRoute from '../Navigation/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AllRoute/>
    {/* <UserProfilePage/> */}
    {/* <VideoFeedbackForm/> */}
    {/* <BottomNavBar/> */}
    {/* <DownloadsPage/> */}
    {/* <TodoAccordion /> */}
    {/* <DislikedVideosPage/> */}
    {/* <UserForm/> */}
    {/* <ChangePasswordForm/> */}
    {/* <LoginForm/> */}
    {/* <ForgotPasswordForm/> */}
  
    {/* <div className="neon-red rounded-lg p-6 mt-10 text-3xl bg-red-500 border border-red-300 text-white/80 font-bold">
      Kishan Mitr
    </div> */}
    </>

  )
}

export default App
