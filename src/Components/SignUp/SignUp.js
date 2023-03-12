import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <input className="loginpage_text" type="text" placeholder='Mobile number or email address' />
                <input className="loginpage_text" type="text" placeholder='Full Name' />
                <input className="loginpage_text" type="text" placeholder='Username' />
                <input className="loginpage_text" type="password" placeholder='Password' />
                <button className="login_btn">Sign Up</button>
                <p className='loginpage_signup'>
                By signing up, you agree to our <span className='bold_text'>Terms, Data Policy</span> and <span className='bold_text'>Cookie Policy</span>.
                </p>
            </div>
        );
    }
}
export default SignUp;