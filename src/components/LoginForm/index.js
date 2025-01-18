import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'
import "../SIgnup/index"
import logo from '../logo/logo.png'; 

import GoogleButton from 'react-google-button'


import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    if (token) {
      Cookies.set('jwt_token', token, { expires: 30 });
      this.props.history.replace('/');
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    console.log(jwt_token)
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    console.log(username)
    const userDetails = {username, password}
    const url = 'http://localhost:4000/login'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }
    
    try{
    const response = await fetch(url, options)
    const data = await response.json()
    console.log("Response Data:", data);
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      console.log("errormsg",data.error)
      this.onSubmitFailure(data.error)
    }
    }catch (error) {
      this.onSubmitFailure('Something went wrong, please try again!');
    }

  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-form-container">
        <img
          src={logo}
          className="login-website-logo-mobile-img"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-img"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            // src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            src={logo}
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
       {/*    <button
            type="button"
            className="google-login"
            onClick={() => window.location.href = 'http://localhost:4000/auth/google'}
          >
              <img
              src="https://image.similarpng.com/very-thumbnail/2021/09/Logo-Search-Google--on-transparent-background-PNG.png"
              alt="Google"
              className="google-icon"
            />
            Continue with Google
          </button> */}

          <GoogleButton
          onClick={() => (window.location.href = 'http://localhost:4000/auth/google')}
          />


          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
         
          <p> 
          New User?{' '}
          <a href="/signup" className="login-link">
          Register here
          </a>
          </p>
        </form>


      </div>
    )
  }
}

export default LoginForm
