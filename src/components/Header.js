import React from 'react';
import headShot from './profile2.jpg';

function Header({currentPage, handlePageChange}) {

    return(
        <div className="row">
            <nav className="nav nav-pills flex-column flex-sm-row">
                            <a className={currentPage === 'About' ? 'flex-sm-fill text-sm-center nav-link active' : 'flex-sm-fill text-sm-center nav-link'} aria-current="page" href="#about" onClick={() => handlePageChange('About')}>About</a>

                            <a className={currentPage === 'Skills' ? 'flex-sm-fill text-sm-center nav-link active' : 'flex-sm-fill text-sm-center nav-link'} href="#skills" onClick={() => handlePageChange('Skills')}>SKILLS</a>

                            <a className={currentPage === 'Portfolio' ? 'flex-sm-fill text-sm-center nav-link active' : 'flex-sm-fill text-sm-center nav-link'} href="#portfolio" onClick={() => handlePageChange('Portfolio')}>PORTFOLIO</a>

                            <a className={currentPage === 'Resume' ? 'flex-sm-fill text-sm-center nav-link active' : 'flex-sm-fill text-sm-center nav-link'} href="#resume" onClick={() => handlePageChange('Resume')} >RESUME</a>

                            <a className={currentPage === 'Contact' ? 'flex-sm-fill text-sm-center nav-link active' : 'flex-sm-fill text-sm-center nav-link'} href="#contact" onClick={() => handlePageChange('Contact')} >CONTACT</a>

            </nav>            
            <div className="jumbotron text-center">
                <div className="row">
                    <div className="col-sm-3">
                        <img className="headshot" src={headShot}/>
                    </div>
                    <div className="col-sm-9 text-start">
                        <h1>Barry St. Pierre</h1>
                        <p>An experienced mechanical engineer moving into Full Stack Web Development</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>

export default Header;