import React from 'react';
import headShot from './profile2.jpg';
import './Header.css';

function Header() {

    return(
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Barry St. Pierre</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">SKILLS</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">RESUME</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">CONTACT</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>            <div className="jumbotron text-center">
                <div className="row">
                    <h1>Barry St. Pierre</h1>
                    <p>An experienced mechanical engineer moving into Full Stack Web Development</p>
                </div>
            </div>
        </div>
    );
}

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>

export default Header;