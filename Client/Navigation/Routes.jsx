import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveNavBar from './BottomNav';
import Home from '../src/Home/Home';
import UserProfilePage from '../src/User/YouPage';
import LikedVideosPage from '../src/User/LikePage';
import DislikedVideosPage from '../src/User/DislikePage';
import VideoFeedbackForm from '../src/User/VideoFeed';
import DownloadsPage from '../src/User/Downloads';
import UserFeedbackForm from '../src/User/UserFeedback';
import SettingsPage from '../src/User/Setting';
import ChangePasswordForm from '../src/Forms/ChangePassword';
import ForgotPasswordForm from '../src/Forms/ForgotPassword';
import LoginForm from '../src/Forms/LogIn';
import SignUp from '../src/Forms/SignUp';
import CropForm from '../src/Forms/CropDetail';


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
          <Route path="/forgot_password" element={ <ForgotPasswordForm/> } />
          <Route path="/login" element={ <LoginForm/> } />
          <Route path="/signup" element={ <SignUp/> } />
          <Route path="/addcrop" element={ <CropForm/> } />
        </Routes>
      </div>
    </Router>
  );
};

export default AllRoute;
