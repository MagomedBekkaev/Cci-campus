import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Card } from './components/Card/Card';
import Footer from './components/Footer/Footer';

function App() {

  const users = [
    {
      name: "Alice Dupont",
      photo: "https://i.pravatar.cc/300?img=12",
      description: "Designer UX/UI avec une passion pour les expériences utilisateur intuitives."
    },
    {
      name: "Jean Martin",
      photo: "https://i.pravatar.cc/300?img=13",
      description: "Développeur Full-stack avec une expertise en Node.js et React."
    },
    {
      name: "Claire Dubois",
      photo: "https://i.pravatar.cc/300?img=14",
      description: "Chef de projet avec une expérience en gestion d'équipes agiles."
    }
  ];

const usersArray = users.map((user, index) => (
  <Card
    key={index}
    name={user.name}
    photo={user.photo}
    description={user.description}
  />
));

  return (
    <>
    <Navbar /> 
    <Header />
    <About />
    <div className="cards-container">
      {usersArray}
    </div>
    <Footer />
    </>
  );
}

export default App;
