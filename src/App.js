import React, { useState } from 'react'
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import portfolio from './components/portfolio_data';

function App() {

  const [currentPage, setCurrentPage] = useState('About')

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About portfolio={portfolio}/>
    }
    if (currentPage === 'Skills') {
      return <Skills portfolio={portfolio}/>
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio portfolio={portfolio}/>
    }
    if (currentPage === 'Resume') {
      return <Resume portfolio={portfolio}/>
    }

    return <Contact portfolio={portfolio}/>
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <header className="App-header">
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <div className="container">
        {renderPage()}
      </div>
      <div>
        <Footer portfolio={portfolio}/>
      </div>
    </div>
  );
}

export default App;
