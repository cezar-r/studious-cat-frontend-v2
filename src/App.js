import React from "react";
import {Routes, Route } from "react-router-dom";
import CalendarPage from './pages/calendar-page/CalendarPage';
import ProfilePage from './pages/profile-page/ProfilePage';
import CreateProfilePage from './pages/create-profile-page/CreateProfilePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CalendarPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/create-profile" element={<CreateProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
