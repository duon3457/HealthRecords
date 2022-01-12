import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/layout/App.css';
import '../css/layout/HeaderNavBar.css';

import img from '../img/NewHeaderLogo.png';

export default class HeaderNavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    handleLogoutClick() {
        this.props.handleLogout();
    }

    render() {
        return (
            <div className="header-wrapper">
                <div className="header">
                    <img src={ img } />
                </div>
                <div className="nav-wrapper">
                    <ul className="navbar">
                        <li><NavLink exact="true" activestyle={{ color: "red" }} to={ "/" }>Home</NavLink></li>
                        <li><NavLink exact="true" activestyle={{ color: "red" }} to={ "/news" }>News</NavLink></li>
                        <li><NavLink exact="true" activestyle={{ color: "red" }} to={ "/about" }>About</NavLink></li>
                        { !this.props.name && <li><NavLink exact="true" to={ "/login" }>Login</NavLink></li> }
                        { !this.props.name && <li><NavLink exact="true" to={ "/signup" }>Sign Up</NavLink></li> }
                        { this.props.name && <li><NavLink exact="true" to={ "/user" }>Hello, { this.props.name }</NavLink></li> }
                        { this.props.name && <li><button onClick={ this.handleLogoutClick.bind(this) }>Logout</button></li> }
                    </ul>
                </div>
            </div>
        );
    };
}
