import { Link } from 'react-router-dom';

const CreateAccount = () => {
  return (
    <div>
      <h1>Apply Today!</h1>
      <p>Create an account here</p>
      {/* Link to Create Account */}
      <Link to="/HomePage">Go back to HomePage to login</Link>
    </div>
  );
};

export default CreateAccount;
