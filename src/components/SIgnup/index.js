import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import GoogleButton from 'react-google-button'

import { enviornments } from "../../config/environment"
import "./index.css"




const Signup = () => {
  const [formData, setFormData] = useState({ username: '', password: '', email: '' });
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const baseUrl = enviornments.REACT_APP_BACKEND_URL
      console.log("baseUrl", baseUrl)
      const endPoint = "register"
      const finalUrl = `${baseUrl}${endPoint}`
      console.log("finalUrl", finalUrl)
      console.log("formData", formData)
      // const response = await axios.post(process.env.REACT_APP_BACKEND_URL + 'register', formData);
      const response = await axios.post(finalUrl, formData);
      console.log("response", response)



      history.push('/login');
    } catch (error) {
      alert(error.response?.data?.error || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="image-section">
        <img
          src="https://www.shutterstock.com/image-photo/happy-playful-young-woman-smiles-600nw-2078634502.jpg"
          alt="Fashion"
          className="fashion-image"
        />
      </div>
      <div className="form-section">
        <h1>Join the Shopping App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input-field"
            onChange={handleChange}
            value={formData.username}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            onChange={handleChange}
            value={formData.password}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
            onChange={handleChange}
            value={formData.email}
          />
          <button type="submit" className="create-account" disabled={loading}>
            {loading ? 'Signing Up...' : 'Create Account'}
          </button>
          {/* <button
            type="button"
            className="google-login"
            onClick={() => (window.location.href = `${enviornments.REACT_APP_BACKEND_URL}auth/google`)}
          >
            <img
              src="https://image.similarpng.com/very-thumbnail/2021/09/Logo-Search-Google--on-transparent-background-PNG.png"
              alt="Google"
              className="google-icon"
            />
            Continue With Google
          </button> */}



          {/* <GoogleButton
            onClick={() => (window.location.href =enviornments.REACT_APP_BACKEND_URL + 'auth/google')}
          /> */}

          <GoogleButton
            onClick={() => (window.location.href = `${enviornments.REACT_APP_BACKEND_URL}auth/google`)}
          />
        </form>
        <p>
          Already have an account?{' '}
          <a href="/login" className="login-link">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};



export default Signup;
