import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from '../Home/Home.jsx';
import UserProfilePage from '../User/YouPage';
import LikedVideosPage from '../User/LikePage';
import DislikedVideosPage from '../User/DislikePage';
import DownloadsPage from '../User/Downloads';
import UserFeedbackForm from '../User/UserFeedback';
import VideoFeedbackForm from '../User/VideoFeed';
import SettingsPage from '../User/Setting';
import ChangePasswordForm from '../Forms/ChangePassword';
import ForgotPasswordForm from '../Forms/ForgotPassword';
import LoginForm from '../Forms/LogIn';
import SignUp from '../Forms/SignUp';
import CropForm from '../Forms/CropDetail';
import UpdateDetails from '../Forms/UpdateUser';
import UpdateContact from '../Forms/UpdateContact';
import ResponsiveNavBar from './BottomNav.jsx';



const AllRoute = () => {
  return (
    <Router>
      <div className="min-h-screen pb-16 md:pb-0">
        {/* Navbar */}
        <ResponsiveNavBar />

        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/scan" element={<QRScanner />} /> */}
          {/* <Route path="/upload" element={<UploadVideo />} /> */}
          {/* <Route path="/videos" element={<VideoStreamingPage />} /> */}
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/likes" element={<LikedVideosPage />} />
          <Route path="/dislikes" element={<DislikedVideosPage />} />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="/feedback" element={<UserFeedbackForm />} />
          <Route path="/video-feedback" element={<VideoFeedbackForm />} />
          <Route path='/setting' element={<SettingsPage/>} />
          <Route path="/change_password" element={ <ChangePasswordForm/> } />
          <Route path="/change_contact" element={ <UpdateContact/> } />
          <Route path="/forgot_password" element={ <ForgotPasswordForm/> } />
          <Route path="/login" element={ <LoginForm/> } />
          <Route path="/signup" element={ <SignUp/> } />
          <Route path="/addcrop" element={ <CropForm/> } />
          <Route path='/update-profile' element={<UpdateDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AllRoute;
