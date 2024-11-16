import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateAccount from './pages/CreateAccount';
import MenteeLogin from './pages/MenteeLogin';
import MentorLogin from './pages/MentorLogin';
import MenteeDash from './pages/MenteeDash';
import MentorDash from './pages/MentorDash';
import Invitation from './pages/Invitation';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/CreateAccount">Create Account</Link></li>
            <li><Link to="/MenteeLogin">Mentee Login</Link></li>
            <li><Link to="/MentorLogin">Mentor Login</Link></li>

          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/MenteeLogin" element={<MenteeLogin />} />
          <Route path="/MentorLogin" element={<MentorLogin />} />
          <Route path="/MenteeDash" element={<MenteeDash />} />
          <Route path="/MentorDash" element={<MentorDash />} />
          <Route path="/Invitation" element={<Invitation />} />
        </Routes>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
