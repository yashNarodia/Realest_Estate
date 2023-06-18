import React from 'react'
import{Link,} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import {connect } from 'react-redux'
import PropTypes from 'prop-types'
import {login} from '../actions/auth'

const Login = ({login,isAuthenticated}) => {
  const [formData, setFormData] = React.useState({
    email : '',
    password : ''
  });
  const {email, password} = formData;
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
  const onSubmit = e => {
    e.preventDefault();
    login(email, password);

  }
  if (isAuthenticated){
    return (<redirect to="/"/>)
  }

  return(
    <div className='auth'>
      <Helmet>
        <title>Realest Estate -Login</title>
        <meta name="description" content="Login page"/>
      </Helmet>
      <h1 className='auth__title'>Sign In</h1>
      <p className='auth__lead'>Sign into your Account</p>
      <form className='auth__form' onSubmit={e =>onSubmit(e)}>
        <div className='auth__form__group'>
          <input className='auth__form__input' type='email' placeholder='email' name='email'value={email} onChange={e => onChange(e)} required />
        </div>
        <div className='auth__form__group'>
          <input className='auth__form__input' type='password' placeholder='password' name='password'value={password} onChange={e => onChange(e)} required minLength='6'/>
        </div>
        <button className='auth__form__button' type='submit'>Login</button>
      </form>
      <p className='auth__authtext'>  Dont have an account? <Link className='auth__authtext__link' to='/signup'>Sign Up</Link></p>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, {login})(Login)