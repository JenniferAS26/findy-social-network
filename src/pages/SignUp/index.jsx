import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import { Link, useNavigate } from 'react-router-dom';
import './styles.scss';
import flechitaIcon from '../../assets/icons/flechita.png';
import { createUser } from '../../services/userService.js';
import { getUserByParams } from '../../services/userService.js';
import Swal from 'sweetalert2';

const SignUpForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    birthdate: '',
    username: '',
    email: '', 
    phoneNumber: '',
    gender: '',
    bio: '',
    pronouns: '',
    urlImage: ''
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, userId: uuid() });
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name.trim() !== '' && /^[a-zA-Z\s]*$/.test(formData.name);
      case 2:
        return formData.password.trim() !== '' && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(formData.password);
      case 3:
        return formData.birthdate.trim() !== '';
      case 4:
        return formData.username.trim() !== '' && /^[a-zA-Z\s]*$/.test(formData.username);
      case 5:
        return formData.email.trim() !== '' && /\S+@\S+\.\S+/.test(formData.email);
      case 6:
        return formData.phoneNumber.trim() !== '' && /^[0-9]*$/.test(formData.phoneNumber);
      default:
        return true;
    }
  };

  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (isStepValid()) {
      try {
        const existingUser = await getUserByParams({ username: formData.username, email: formData.email });
        if (existingUser.length > 0) {
          Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: 'A user with this username or email already exists!',
            confirmButtonColor: '#FF7674',
            customClass: {
              confirmButton: 'custom-button-width'
            }
          });
        } else {
          const newUser = await createUser(formData);
          // console.log(newUser);
          Swal.fire({
            icon: 'success',
            title: 'Successful Registration',
            text: 'Your account has been created successfully!',
            confirmButtonColor: '#FF7674',
            customClass: {
              confirmButton: 'custom-button-width'
            }
          }).then(() => {
            navigate('/sign-in');
          });
        }
      } catch (error) {
        console.error('Error creating the user:', error);
      }
    }
  };

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
            <h2>What is your name?</h2>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <button onClick={handleNextStep} disabled={!isStepValid()}>
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2>Create a password</h2>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <p>Create a password with at least 6 characters, including an uppercase letter, a lowercase letter, a number, and a special character !#$%</p>
            <button onClick={handleNextStep} disabled={!isStepValid()}>
              Next
            </button>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2>When were you born?</h2>
            <input
              type="date"
              name="birthdate"
              placeholder="Date of birth"
              value={formData.birthdate}
              onChange={handleChange}
              required
            />
            <p>Specify your date of birth. Even if this account is for a business, a pet, etc., no one will see it unless you decide to share it.</p>
            <button onClick={handleNextStep} disabled={!isStepValid()}>
              Next
            </button>
          </div>
        )}
        {step === 4 && (
          <div>
            <h2>Create your username</h2>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <p>Add a username; you can change it anytime you want.</p>
            <button onClick={handleNextStep} disabled={!isStepValid()}>
              Next
            </button>
          </div>
        )}
        {step === 5 && (
          <div>
            <h2>Enter your email</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button onClick={handleNextStep} disabled={!isStepValid()}>
              Next
            </button>
          </div>
        )}
        {step === 6 && (
          <div>
            <h2>What is your mobile number?</h2>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Mobile number"
              value={formData.phoneNumber}
              onChange={handleChange}
              pattern="[0-9]*"
              required
            />
            <p>We may send you SMS notifications for security and login purposes.</p>
            <button onClick={handleSignUp} disabled={!isStepValid()}>
              Sign Up
            </button>
          </div>
        )}
      </div>
      <p className="sign-in-link">
        Already have an account? <Link className="link" to="/sign-in">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUpForm;
