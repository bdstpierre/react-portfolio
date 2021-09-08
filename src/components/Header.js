import React from 'react';
import Navigation from './Navigation';
import headShot from './profile2.jpg';

function Header({currentPage, handlePageChange}) {

    return(
        
        <div className="row">
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />          
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