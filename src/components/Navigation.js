import React from 'react';

function Navigation({currentPage, handlePageChange}) {
    return (
        <nav className="nav nav-pills flex-column flex-lg-row">
            <a className={currentPage === 'About' ? 'flex-sm-fill text-sm-center nav-link active' : 'flex-sm-fill text-sm-center nav-link'} aria-current="page" href="#about" onClick={() => handlePageChange('About')}>About</a>

            <a className={currentPage === 'Skills' ? 'flex-sm-fill text-sm-center nav-link active' : 'flex-sm-fill text-sm-center nav-link'} href="#skills" onClick={() => handlePageChange('Skills')}>SKILLS</a>

            <a className={currentPage === 'Portfolio' ? 'flex-sm-fill text-sm-center nav-link active' : 'flex-sm-fill text-sm-center nav-link'} href="#portfolio" onClick={() => handlePageChange('Portfolio')}>PORTFOLIO</a>

            <a className={currentPage === 'Resume' ? 'flex-sm-fill text-sm-center nav-link active' : 'flex-sm-fill text-sm-center nav-link'} href="#resume" onClick={() => handlePageChange('Resume')} >RESUME</a>

            <a className={currentPage === 'Contact' ? 'flex-sm-fill text-sm-center nav-link active' : 'flex-sm-fill text-sm-center nav-link'} href="#contact" onClick={() => handlePageChange('Contact')} >CONTACT</a>

        </nav>  
    );
}

export default Navigation;