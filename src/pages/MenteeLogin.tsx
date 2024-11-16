import { Link } from 'react-router-dom';

const MenteeLogin = () => {
  return (
    <div>
      <h1>WELCOME MENTEES</h1>
      <p>LOGIN</p>
      {/* Link to Create Account */}
      <Link to="/MenteeDash">Go to Mentee Dashboard</Link>
    </div>
  );
};

export default MenteeLogin;
