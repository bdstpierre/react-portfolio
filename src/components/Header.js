import React from 'react';
import headShot from './profile2.jpg';
import './Header.css';

function Header({currentPage, handlePageChange}) {

    return(
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className={currentPage === 'About' ? 'nav-link active' : 'nav-lin'} aria-current="page" href="#about" onClick={() => handlePageChange('About')}>About</a>
                        </li>
                        <li className="nav-item">
                        <a className={currentPage === 'Skills' ? 'nav-link active' : 'nav-lin'} href="#skills" onClick={() => handlePageChange('Skills')}>SKILLS</a>
                        </li>
                        <li className="nav-item">
                        <a className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-lin'} href="#portfolio" onClick={() => handlePageChange('Portfolio')}>PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                        <a className={currentPage === 'Resume' ? 'nav-link active' : 'nav-lin'} href="#resume" onClick={() => handlePageChange('Resume')} >RESUME</a>
                        </li>
                        <li className="nav-item">
                        <a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-lin'} href="#contact" onClick={() => handlePageChange('Contact')} >CONTACT</a>
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