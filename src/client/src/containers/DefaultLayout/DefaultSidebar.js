import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'


class DefaultLayout extends Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand" to="/">
                            <img src="assets/img/logo.svg" className="navbar-brand-img mx-auto" alt="..."></img>
                        </Link>
                        <div className="navbar-user d-md-none">
                            <div className="dropdown">
                                <a href="#!" id="sidebarIcon" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="avatar avatar-sm avatar-online">
                                        <img src="assets/img/avatars/profiles/avatar-1.jpg" className="avatar-img rounded-circle" alt="..."></img>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="sidebarIcon">
                                    <a href="profile-posts.html" className="dropdown-item">Profile</a>
                                    <a href="settings.html" className="dropdown-item">Settings</a>
                                    <hr className="dropdown-divider"></hr>
                                    <a href="sign-in.html" className="dropdown-item">Logout</a>
                                </div>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="sidebarCollapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">
                                        <i className="fe fe-home"></i> Dashboard
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">
                                        <i className="fe fe-home"></i> Settings
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Router>
        )
    }
}

export default DefaultLayout
