import React from "react";
import { Link } from "react-router-dom";
import './style/Authentification.css'

export default class LogIn extends React.Component {
    render() {
        return (
            <div className="auth-wrapper">
                <form>
                    <h3>Log In</h3>
                    <div className="form-wrapper">
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Email or Phone" id="username" />
                        </div>
                        
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Password" id="password" />
                        </div>
                        

                        <button>Log In</button>
                        <div className="go">Google</div>
                        
                        <span>Don`t have an account yet? <Link to="/sign-up">Sign Up</Link></span>
                    </div>
                    
                </form>
            </div>
        );
    }
}