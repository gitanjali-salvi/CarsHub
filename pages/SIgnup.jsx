import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Validation from './SignupValidation';
import backgroundImage from '../assets/all-images/signup.png'; // Import your background image

function Signup() {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: event.target.value}));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);
    
    // Check if there are no validation errors
    if (!validationErrors.name && !validationErrors.email && !validationErrors.password) {
      try {
        const response = await fetch('http://localhost:8081/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        console.log(await response.json());
        
        // Change the route by updating the URL
        window.location.href = '/login';
      } catch (err) {
        console.error('There was a problem with your fetch operation:', err);
      }
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100' style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="name"><strong>Name</strong></label>
            <input type="text" placeholder='Enter Name' name='name' onChange={handleInput} value={values.name} className='form-control rounded-0' />
            {errors.name && <span className='text-danger'>{errors.name}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder='Enter Email' name='email' onChange={handleInput} value={values.email} className='form-control rounded-0' />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder='Enter Password' name='password' onChange={handleInput} value={values.password} className='form-control rounded-0' />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-success w-100'><strong>Sign Up</strong></button>
        </form>
        <p>You agree to our terms and conditions</p>
        <Link to='/login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
      </div>
    </div>
  );
}

export default Signup;
