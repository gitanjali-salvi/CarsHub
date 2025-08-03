import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
import backgroundImage from '../assets/all-images/signup.png'; // Import your background image



function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleInput = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);
    
    // Check if there are no validation errors
    if (!validationErrors.email && !validationErrors.password) {
    try {
        const res = await axios.post('http://localhost:8081/login', values)
        //console.log(res);
          if(res.data === "Success") {
            window.location.href = '/';
          } else  {
            alert("No record exists !!");
          }
        } catch (err) {
          console.error(err);
        }
    }
  };
  
  return (
    <div className='d-flex justify-content-center align-items-center vh-100' style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              value={values.email}
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              value={values.password}
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Log in</strong></button>
          <p>You agree to our terms and conditions</p>
        </form>
        <Link to='/' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Back to Home</Link>
      </div>
    </div>
  );
}

export default Login;
