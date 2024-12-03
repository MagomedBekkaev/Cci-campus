import classes from "./Navbar.module.css"

const Navbar = () => {  
    return (
      <nav className={classes.navbar}>
        <ul className={classes["navbar-menu"]}>
            <li><a href="#"className="navbar-link">Accueil</a></li>
            <li><a href="#"className="navbar-link">Équipe</a></li>
            <li><a href="#"className="navbar-link">Services</a></li>
            <li><a href="#"className="navbar-link">Contact</a></li>
        </ul>
      </nav>
    )
  }

  export default Navbar;