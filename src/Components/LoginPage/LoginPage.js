import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import TestImage from './TestImage.png';
import Parallelogram from './Parallelogram.png';
import './LoginPage.css';
import Google from './google.svg';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogIn: true
        }
    }
    changeLogin = () => {
        if(this.state.isLogIn)
            this.setState({isLogIn: false});
        else
            this.setState({isLogIn: true});
    }
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6} className='loginpage'>
                        <div className='loginpage_main'>
                            <div className='loginpage_leftpart'>
                                <img className='loginpage_logo' src={Parallelogram} alt="Parallelogram logo" />
                                <div className='loginpage_signin'>

                                    {
                                        this.state.isLogIn ? <SignIn /> : <SignUp />
                                    }

                                    <div className='login_ordiv'>
                                        <div className='login_divider'></div>
                                        <div className='login_or'>OR</div>
                                        <div className='login_divider'></div>
                                    </div>
                                    {
                                        this.state.isLogIn ? 
                                        <div>
                                        <div className='login_google'>
                                            <img src={Google} alt="google logo" width="20px" style={{ "marginRight": "5px" }} className="google_icon" />
                                            <div className='login_line'>Log in with Google</div>
                                            </div>
                                        <div className='login_forgot'>Forgot password?</div>
                                    </div>
                                    :
                                    <div>
                                    <p className="Signin_signuppage">Sign up to find accounts and phone numbers of your friends.</p>
                                    <button className="login_btn">Log in with LinkedIn</button>
                                    </div>
                                    }
                                    
                                </div>
                            </div>
                            <div className='loginpage_signupoption'>
                                {
                                    this.state.isLogIn ?
                                        <div className='loginpage_signin'>
                                            Don't have an account? <span onClick={this.changeLogin} style={{ "fontWeight": "bold", "color": "#0375f6" }} >Sign up</span>
                                        </div>
                                        :
                                        <div className='loginpage_signin'>
                                            Have an account? <span className="sign_options" onClick={this.changeLogin} style={{ "fontWeight": "bold", "color": "#0375f6" }} >Sign in</span>
                                        </div>
                                }
                            </div>
                        </div>
                        <div className='loginpage_rightpart'>
                            <img className="loginpage_testimage" src={TestImage} alt="Just a Test element" />
                        </div>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </div>
        );
    }
}
export default LoginPage;