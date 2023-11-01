import { useContext, useState } from 'react';
import './styles.scss';
import Swal from 'sweetalert2';
import logo from '../../assets/icons/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { getUserByParams } from '../../services/userService.js';
import { AuthContext } from '../../auth/context/AuthContext';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { login } = useContext( AuthContext )

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log('Username:', username);
      const users = await getUserByParams({ username });

      console.log('User:', users);

      if (users.length > 0) {
        const user = users[0];
        if (user.password === password) {
          login(username, password)
          navigate(`/${user.username}`);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Incorrect Password',
            text: 'Please try again.',
            confirmButtonColor: '#FF7674',
            customClass: {
              confirmButton: 'custom-button-width',
            }
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'User Not Found',
          text: 'Please check your username or sign up.',
          confirmButtonColor: '#FF7674',
          customClass: {
            confirmButton: 'custom-button-width',
          }
        });
      }
    } catch (error) {
      console.error('Error fetching user:', error);
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
