import { useContext, useState, useEffect } from 'react';
import './styles.scss';
import Swal from 'sweetalert2';
import logo from '../../assets/icons/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { getUserByParams } from '../../services/userService.js';
import { AuthContext } from '../../auth/context/AuthContext';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('email');
    const storedPassword = sessionStorage.getItem('password');
    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      handleSubmit(new Event('submit'), true);
    }
  }, []);

  const handleSubmit = async (event, isPageLoad = false) => {
    event.preventDefault();

    try {
      const usersByEmail = await getUserByParams({ email });

      if (usersByEmail.length > 0) {
        const user = usersByEmail[0];
        if (user.password === password) {
          // Store session information in Session Storage
          sessionStorage.setItem('email', email);
          sessionStorage.setItem('password', password);

          login(email, password);
          navigate(`/${user.username}`);
        } else {
          if (!isPageLoad) {
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
        }
      } else {
        if (!isPageLoad) {
          Swal.fire({
            icon: 'error',
            title: 'User Not Found',
            text: 'Please check your email or sign up.',
            confirmButtonColor: '#FF7674',
            customClass: {
              confirmButton: 'custom-button-width',
            }
          });
        }
      }
    } catch (error) {
      console.error('Error while searching for the user:', error);
    }
  };

  return (
    <div className="signin">
      <img src={logo} alt="logo" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      <p>Do not have an account? <Link to="/sign-up">Sign up</Link></p>
    </div>
  );
};

export default SignIn;
