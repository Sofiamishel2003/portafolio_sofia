import '../styles/Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portafolio</h2>
      <div className="projects">
        {/* Aquí puedes agregar tus proyectos */}
        <div className="project-card">
          <h3>Proyecto 1</h3>
          <p>Descripción del proyecto 1.</p>
        </div>
        <div className="project-card">
          <h3>Proyecto 2</h3>
          <p>Descripción del proyecto 2.</p>
        </div>
        {/* Agrega más proyectos según sea necesario */}
      </div>
    </div>
  );
}

export default Portfolio;
