import { useState } from 'react';
import './styles.scss';
import Swal from 'sweetalert2';
import logo from '../../assets/icons/logo.svg';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === 'cris_123' && password === 'cris1234') {
      navigate('/');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Incorrect Credentials',
        text: 'Please try again.',
        confirmButtonColor: '#FF7674',
        customClass: {
          confirmButton: 'custom-button-width',
        }
      });
    }
  };

  return (
    <div className="signin">
      <img src={logo} alt="logo" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      <p>Do not have an account? <Link to="/sign-up">Sign Up</Link></p>
    </div>
  );
};

export default SignIn;
