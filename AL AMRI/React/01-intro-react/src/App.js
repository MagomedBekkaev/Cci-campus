import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Card } from './components/Card/Card';

function Footer() {
  return (
    <footer className="footer">
    <ul className="footer-links">
        <li><a href="#">À propos</a></li>
        <li><a href="#">Projets</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Mentions légales</a></li>
    </ul>
</footer>
  )
}

function App() {
  return (
    <>
    <Navbar /> 
    <Header />
    <About />
    <Card />
    <Footer/>
    </>
  );
}

export default App;
