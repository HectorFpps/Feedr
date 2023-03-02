import React from "react";
import { Link } from "react-router-dom";
import './style/Authentification.css'

export default class SignUp extends React.Component {
    render() {
        return (
            <div className="auth-wrapper">
                <form>
                    <h3>Sign Up</h3>
                    <div className="form-wrapper">
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Email or Phone" id="username" />
                        </div>
                        
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Password" id="password" />
                        </div>
                        

                        <button>Sign Up</button>
                        <div className="go">Google</div>
                        
                        <span>Already have an account? <Link to="/log-in">Log In</Link></span>
                    </div>
                    
                </form>
            </div>
        );
    }
}