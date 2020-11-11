import React from 'react';
import UserIcon from '../../assets/userIcon.svg';
import LoginIcon from '../../assets/loginIcon.svg';
import SignUpIcon from '../../assets/signUpIcon.svg';
function Navigator() {
  return(
    <nav className="navbar navbar-default">
      <div className="navbar-container">
      <div className="brand">
        <a href="/">Recipy</a>
      </div>
      <ul className="nav navbar-item">
        <li>Food</li>
        <li>Community</li>
      </ul>
      <ul className="nav login-register">
        <li className="nav"><a href="/"><img src={UserIcon}  alt='' style={{width: '20px', height: '20px'}}/>Users</a></li>
        <li className="nav"><a href="/"><img src={SignUpIcon}  alt='' style={{width: '20px', height: '20px'}}/>Sign Up</a></li>
        <li className="nav"><a href="/"><img src={LoginIcon} alt='' style={{width: '20px', height: '20px'}}/>Register</a></li>
      </ul>
      </div>
    </nav>
  )
}

export default Navigator;