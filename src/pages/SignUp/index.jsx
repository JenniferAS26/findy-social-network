import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Agrega useNavigate
import './styles.scss';
import flechitaIcon from '../../assets/icons/flechita.png';

const SignUpForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    birthdate: '',
    username: '',
    phoneNumber: '',
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name.trim() !== '';
      case 2:
        return formData.password.trim() !== '' && formData.password.length >= 6;
      case 3:
        return formData.birthdate.trim() !== '';
      case 4:
        return formData.username.trim() !== '';
      case 5:
        return formData.phoneNumber.trim() !== '';
      default:
        return true;
    }
  };

  const navigate = useNavigate(); // Obtiene la función de navegación

  return (
    <div className="signup-form">
      <div className="form-step">
        {step > 1 && (
          <img
            src={flechitaIcon}
            alt="Previous"
            className="previous-button"
            onClick={handlePreviousStep}
          />
        )}
        {step === 1 && (
          <div>
            <h2>¿Cómo te llamas?</h2>
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <button onClick={handleNextStep} disabled={!isStepValid()}>
              Siguiente
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2>Crea una contraseña</h2>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <p>Crea una contraseña de al menos 6 letras o números. Debe ser algo difícil de adivinar.</p>
            <button onClick={handleNextStep} disabled={!isStepValid()}>
              Siguiente
            </button>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2>¿Cuándo naciste?</h2>
            <input
              type="date"
              name="birthdate"
              placeholder="Fecha de nacimiento"
              value={formData.birthdate}
              onChange={handleChange}
              required
            />
            <p>
              Indica tu fecha de nacimiento. Aunque esta cuenta sea para un negocio, una mascota, etc., nadie la verá
              a menos que decidas compartirla.
            </p>
            <button onClick={handleNextStep} disabled={!isStepValid()}>
              Siguiente
            </button>
          </div>
        )}
        {step === 4 && (
          <div>
            <h2>Crea tu nombre de usuario</h2>
            <input
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <p>Agrega un nombre de usuario; puedes cambiarlo cuando quieras.</p>
            <button onClick={handleNextStep} disabled={!isStepValid()}>
              Siguiente
            </button>
          </div>
        )}
        {step === 5 && (
          <div>
            <h2>¿Cuál es tu número de celular?</h2>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Número de celular"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <p>
              Es posible que te enviemos notificaciones por SMS con fines de seguridad e inicio de sesión.
            </p>
            <button onClick={() => {
              if (isStepValid()) {
                navigate('/'); // Redirige al usuario a la ruta '/'
              }
            }} disabled={!isStepValid()}>
              Registrarse
            </button>
          </div>
        )}
      </div>
      <p className="sign-in-link">
        ¿Ya tienes cuenta? <Link className="link" to="/sign-in">Inicia Sesión</Link>
      </p>
    </div>
  );
};

export default SignUpForm;
