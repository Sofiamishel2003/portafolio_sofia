import '../styles/Blog.css';

function Blog() {
  return (
    <div className="blog">
      <h2>Blog</h2>
      <div className="posts">
        {/* Aquí puedes agregar tus publicaciones */}
        <div className="post-card">
          <h3>Título del Blog 1</h3>
          <p>Resumen del blog 1.</p>
          <a href="#">Leer más</a>
        </div>
        <div className="post-card">
          <h3>Título del Blog 2</h3>
          <p>Resumen del blog 2.</p>
          <a href="#">Leer más</a>
        </div>
        {/* Agrega más publicaciones según sea necesario */}
      </div>
    </div>
  );
}

export default Blog;
