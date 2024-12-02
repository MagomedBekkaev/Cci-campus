import Button from "../Button/Button"

export const Card = () => {
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