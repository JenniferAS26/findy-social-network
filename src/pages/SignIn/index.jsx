import { useContext, useState } from 'react';
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

  const { login } = useContext( AuthContext )

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const usersByEmail = await getUserByParams({ email });

      if (usersByEmail.length > 0) {
        const user = usersByEmail[0];
        if (user.password === password) {
          login(email, password)
          navigate(`/${user.username}`);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Contraseña incorrecta',
            text: 'Por favor, inténtalo de nuevo.',
            confirmButtonColor: '#FF7674',
            customClass: {
              confirmButton: 'custom-button-width',
            }
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Usuario no encontrado',
          text: 'Por favor, verifica tu correo electrónico, o regístrate.',
          confirmButtonColor: '#FF7674',
          customClass: {
            confirmButton: 'custom-button-width',
          }
        });
      }
    } catch (error) {
      console.error('Error al buscar al usuario:', error);
    }
  };

  return (
    <div className="signin">
      <img src={logo} alt="logo" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Correo electrónico" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
      <p>¿No tienes una cuenta? <Link to="/sign-up">Regístrate</Link></p>
    </div>
  );
};

export default SignIn;
