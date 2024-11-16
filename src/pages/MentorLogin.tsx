import { Link } from 'react-router-dom';

const MentorLogin = () => {
  return (
    <div>
      <h1>WELCOME MENTORS</h1>
      <p>LOGIN</p>
      {/* Link to Create Account */}
      <Link to="/MentorDash">Go to Mentor Dashboard</Link>
    </div>
  );
};

export default MentorLogin;