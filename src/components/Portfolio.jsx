import '../styles/Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="section">
        <h3>Projects</h3>
        <div className="projects">
          <div className="project-card">
              <img src="/Blog.png" alt="Cetacean Blog" />
              <h4>Cetacean Blog</h4>
              <p>This blog about cetaceans is built with Vite and React. It features user token validation, API connection, and allows users to create, edit, and delete posts.</p>
              <a href="https://my-blog-one-beige-60.vercel.app/?#/login" target="_blank" rel="noopener noreferrer">Demo</a>
              <a href="https://github.com/Sofiamishel2003/My_Blog.git" target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
            <div className="project-card">
              <img src="/calculadora.png" alt="Calculator" />
              <h4>Calculator</h4>
              <p>This calculator project is built with Next.js and React. It includes testing implementations, decimal divisions, and floating point addition.</p>
              <a href="https://simple-calculator-git-main-sofia-velasquezs-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>
              <a href="https://github.com/Sofiamishel2003/simple-calculator.git" target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
            <div className="project-card">
              <img src="/Tablau.png" alt="BI Dashboard" />
              <h4>BI Dashboard</h4>
              <p>This project involved creating a reporting dashboard for a company using a star schema database in Tableau and Power BI.</p>
              <a href="https://github.com/nicollegordillo/Proyecto03_bd.git" target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
            <div className="project-card">
              <img src="/cetaceansApi.png" alt="Cetacean API" />
              <h4>Cetacean API</h4>
              <p>This API project for cetaceans includes user authentication with token validation.</p>
              <a href="https://cetaceans-blog-api.vercel.app/posts" target="_blank" rel="noopener noreferrer">Demo</a>
              <a href="https://github.com/Sofiamishel2003/CetaceansBlogApi.git" target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
        </div>
      </div>
      <div className="section">
        <h3>Basic Algorithms</h3>
        <div className="algorithms">
          <div className="algorithm-card">
            <img src="public/HanoiVisualStack.png" alt="Algorithm 1" />
            <h4>Towers of Hanoi</h4>
            <p>This application demonstrates the Tower of Hanoi problem using stacks. Developed with Python and Tkinter, it visually shows the movement of disks between rods.</p>
            <a href="https://github.com/Sofiamishel2003/Hanoi-visual-with-stack.git" target="_blank" rel="noopener noreferrer">Source Code</a>
          </div>
          <div className="algorithm-card">
            <img src="public/infixtopostfix.png" alt="Algorithm 2" />
            <h4>Infix to Postfix Converter</h4>
            <p>This JavaScript application converts infix expressions to postfix using a stack data structure. The web-based tool simplifies the understanding of expression conversion.</p>
            <a href="https://github.com/Sofiamishel2003/Infix-to-postfix.git" target="_blank" rel="noopener noreferrer">Source Code</a>
          </div>
          <div className="algorithm-card">
            <img src="public/sorts.png" alt="Algorithm 3" />
            <h4>Sorting Algorithms</h4>
            <p>This Python application compares different sorting algorithms: Bubble Sort, Counting Sort, Insertion Sort, and Quick Sort. It shows the time complexity and performance of each sort.</p>
            <a href="https://github.com/Sofiamishel2003/Sorts.git" target="_blank" rel="noopener noreferrer">Source Code</a>
          </div>
          <div className="algorithm-card">
            <img src="public/ArbolesBinarios.png" alt="Algorithm 4" />
            <h4>Binary Trees Visualization</h4>
            <p>This Python application visualizes binary trees, displaying the tree structure and providing functionalities for pre-order, in-order, and post-order traversals.</p>
            <a href="https://github.com/Sofiamishel2003/Arboles-Binarios-Visuales.git" target="_blank" rel="noopener noreferrer">Source Code</a>
          </div>
          {/* Add more algorithms as needed */}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
