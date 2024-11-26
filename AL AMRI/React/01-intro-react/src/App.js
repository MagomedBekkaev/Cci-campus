import logo from './logo.svg';
import './App.css';

function Navbar() {
  return (
    
    <nav className="navbar">
    <ul className="navbar-menu">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Équipe</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
)}

function Header() {
  return(
    <header className="header">
    <h1 className="header-title">Découvrez notre équipe</h1>
    <p className="header-subtitle">Une présentation élégante et moderne</p>
  </header>
)}

function About() {
  return (
    <section className="about">
    <div className="about-content">
        <h2>À propos de nous</h2>
        <p>
        Nous sommes une équipe de passionnés, spécialisée dans la création d'interfaces utilisateur élégantes et fonctionnelles.
        Avec une expertise en développement et en design, nous aimons créer des expériences web modernes et interactives.
        </p>
    </div>
</section>
)}

function Button() {
  return (
    <button className="card-button">En savoir plus</button>
  )
}

function Card() {
  return(

    <div className="cards-container">
    <div className="card">
        <img src="https://i.pravatar.cc/300?img=11" alt="Portrait" className="card-image" />
        <div className="card-content">
            <h2 className="card-title">Maxime Faubert</h2>
            <p className="card-description">
                Développeur Front-end passionné par les interfaces élégantes et réactives.
            </p>
            <Button />
        </div>
    </div>
    <div className="card">
        <img src="https://i.pravatar.cc/300?img=10" alt="Portrait" className="card-image" />
        <div className="card-content">
            <h2 className="card-title">Emilie Goudreau</h2>
            <p className="card-description">
                Designer créatif avec un œil pour le détail et l'harmonie des couleurs.
            </p>
            <Button />
        </div>
    </div>
    <div className="card">
        <img src="https://i.pravatar.cc/300?img=32" alt="Portrait" className="card-image" />
        <div className="card-content">
            <h2 className="card-title">Alice Lafond</h2>
            <p className="card-description">
                Chef de projet avec une expertise en gestion agile et communication efficace.
            </p>
            <Button />
        </div>
    </div>
    <div className="card">
        <img src="https://i.pravatar.cc/300?img=7" alt="Portrait" className="card-image" />
        <div className="card-content">
            <h2 className="card-title">Paul Guédry</h2>
            <p className="card-description">
                Développeur Full-stack aimant résoudre des problèmes complexes avec du code propre.
            </p>
            <Button />
        </div>
    </div>
</div>
  )
}

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
    <About/>
    <Card/>
    <Footer/>
    </>
  );
}

export default App;
