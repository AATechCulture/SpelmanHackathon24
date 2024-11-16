import AppButton from './components/AppButton';
const App = () => {
  return <AppButton></AppButton>
}
export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import MenteeLogin from './components/MenteeLogin';
import MentorLogin from './components/MentorLogin';
import CreateAccount from './components/CreateAccount';
import MenteeDash from './components/MenteeDash';
import MentorDash from './components/MentorDash';
import AcceptDecline from './components/AcceptDecline';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mentee-login" element={<MenteeLogin />} />
        <Route path="/mentor-login" element={<MentorLogin />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/mentee-dash" element={<MenteeDash />} />
        <Route path="/mentor-dash" element={<MentorDash />} />
        <Route path="/accept-decline" element={<AcceptDecline />} />
      </Routes>
    </Router>
  );
};

export default App;
