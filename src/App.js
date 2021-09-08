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
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="container">
        <Contact />
      </div>
      <div>
        <Footer portfolio={portfolio}/>
      </div>
    </div>
  );
}

export default App;
