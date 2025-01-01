import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [fullName, setFullName] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (fullName.trim()) {
            navigate(`/Dashboard/${fullName}`); 
        } else {
            alert("Enter your name");
        }
    };

    return (
        <div className='data'>
            <div className='onboardingtitle'>
                <span>Log in to Wope</span>
            </div>
            <div className='onboardingSocial'>
                <div className='connect'>
                    <div className='gglbtn'>
                        <button className='socialBtn'>
                            <img className='googleImg' src='/google.png' />
                            <span className='buttonText'>Continue with Google</span>
                        </button>
                    </div>

                    <p className='or'>or</p>

                    <div className='emailDiv'>
                        <form>
                            <input
                                type='text'
                                placeholder='Full name'
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className='emailInput'
                            />
                        </form>
                        <form>
                            <input type='email' placeholder='Enter e-mail' className='emailInput' />
                        </form>
                        <form>
                            <input type='password' placeholder='Password' className='emailInput' />
                        </form>
                    </div>

                    <div className='emailAndForgot'>
                        <button className='socialBtn default' onClick={handleLogin}>
                            <span className='buttonText'>Log in</span>
                        </button>
                        <span className='forgotPass'>Forgot password?</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
