import React from "react";
import { Link } from "react-router-dom";
import './style/Authentification.css'

export default class Authentification extends React.Component {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = (event) => {
        event.preventDefault();
        const data = {
            "email": email,
            "password": password
        };
        axios.post("http://localhost:27017/auth/login", data)
        .then(response => {
            console.log(response)
            location.reload();
        })
        .catch(error => {
            console.log(error)
        });
    }
        
    render() {
        return (
            <div className="auth-wrapper">
                <form>
                    <h3>Login Here</h3>

                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Email or Phone" id="username" />

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" id="password" />

                    <button onClick={submit}>Log In</button>
                    <div className="social">
                      <div className="go"><i className="fab fa-google"></i>  Google</div>
                      <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
                    </div>
                </form>
            </div>
        );
    }
}