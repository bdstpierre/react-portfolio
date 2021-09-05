import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import portfolio from './components/websites';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body className="container">
        <Portfolio portfolio={portfolio} />
      </body>
    </div>
  );
}

export default App;
