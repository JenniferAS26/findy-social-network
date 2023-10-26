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

    if (username === 'team_CMKJ' && password === '12345') {

      navigate('/');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Credenciales incorrectas',
        text: 'Por favor, inténtalo de nuevo.',
      });
    }
  };

  return (
    <div className="signin">
      <img src={logo} alt="logo" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
      <p>No tienes una cuenta? <Link to="/sign-up">Regístrate</Link></p>
    </div>
  );
};

export default SignIn;
