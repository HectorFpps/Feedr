import React from "react";
import { Link } from "react-router-dom";
import './style/Authentification.css'

export default class Authentification extends React.Component {
    render() {
        return (
            <div className="auth-wrapper">
                <form>
                    <h3>Login Here</h3>
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
                        <div className="social">
                          <div className="go"><i className="fab fa-google"></i>  Google</div>
                        </div>
                    </div>
                    
                </form>
            </div>
        );
    }
}