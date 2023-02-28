import React from 'react';
import { Link } from 'react-router-dom';
import './style/navbar.css';

export default class Navbar extends React.Component {
    render() {
        return(
            <nav>
                <div className="navbar">
                    <Link to="/" className="navbar-left">LOGO</Link>
                    <div className="navbar-right">
                        <div className='search-div'>
                            <input className="search" type="text" placeholder="Search"></input>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                            </button>
                        </div>
                        
                        <Link to="/profile" className="profile">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </Link>

                        <Link to="/createUser">Create User</Link>
                    </div>
                </div>
            </nav>
        );
    }
}
