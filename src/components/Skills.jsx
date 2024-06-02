
import { FaUsers, FaInfoCircle, FaCalendarAlt, FaGraduationCap, FaUserFriends, FaDesktop, FaCode, FaLightbulb } from 'react-icons/fa';
import '../styles/Skills.css';

function Skills() {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      
      <div className="skills-container">
        
        <div className="skill-card">
          <h3>Languages</h3>
          <div className="skill-item">
            <i className="devicon-javascript-plain colored"></i>
            <span>JavaScript</span>
          </div>
          <div className="skill-item">
            <i className="devicon-typescript-plain colored"></i>
            <span>TypeScript</span>
          </div>
          <div className="skill-item">
            <i className="devicon-python-plain colored"></i>
            <span>Python</span>
          </div>
          <div className="skill-item">
            <i className="devicon-csharp-plain colored"></i>
            <span>C#</span>
          </div>
          <div className="skill-item">
            <i className="devicon-html5-plain colored"></i>
            <span>HTML</span>
          </div>
          <div className="skill-item">
            <i className="devicon-php-plain colored"></i>
            <span>PHP</span>
          </div>
          <div className="skill-item">
            <i className="devicon-arduino-plain colored"></i>
            <span>Arduino</span>
          </div>
          <div className="skill-item">
            <i className="devicon-mysql-plain colored"></i>
            <span>MySQL</span>
          </div>
        </div>
        
        <div className="skill-card">
          <h3>Frameworks & Libraries</h3>
          <div className="skill-item">
            <i className="devicon-react-original colored"></i>
            <span>React</span>
          </div>
          <div className="skill-item">
            <i className="devicon-redux-original colored"></i>
            <span>Redux</span>
          </div>
          <div className="skill-item">
            <i className="devicon-nodejs-plain colored"></i>
            <span>Node.js</span>
          </div>
          <div className="skill-item">
            <i className="devicon-express-original colored"></i>
            <span>Express</span>
          </div>
          <div className="skill-item">
            <i className="devicon-flutter-plain colored"></i>
            <span>Flutter</span>
          </div>
          <div className="skill-item">
            <i className="devicon-dart-plain colored"></i>
            <span>Dart</span>
          </div>
          <div className="skill-item">
            <i className="devicon-kotlin-plain colored"></i>
            <span>Kotlin</span>
          </div>
        </div>
        
        <div className="skill-card">
          <h3>Databases</h3>
          <div className="skill-item">
            <i className="devicon-mysql-plain colored"></i>
            <span>MySQL</span>
          </div>
          <div className="skill-item">
            <i className="devicon-postgresql-plain colored"></i>
            <span>PostgreSQL</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Languages</h3>
          <div className="language-skill">
            <span>Spanish (Native)</span>
            <div className="progress-bar">
              <div className="progress spanish"></div>
            </div>
          </div>
          <div className="language-skill">
            <span>English (B2)</span>
            <div className="progress-bar">
              <div className="progress english"></div>
            </div>
          </div>
        </div>

        <div className="skill-card">
          <h3>Personal Skills</h3>
          <div className="personal-skill-item">
            <FaUsers className="fa-icon" />
            <span>Leadership</span>
          </div>
          <div className="personal-skill-item">
            <FaInfoCircle className="fa-icon" />
            <span>Organizing and synthesizing information</span>
          </div>
          <div className="personal-skill-item">
            <FaCalendarAlt className="fa-icon" />
            <span>Event and meeting planning</span>
          </div>
          <div className="personal-skill-item">
            <FaGraduationCap className="fa-icon" />
            <span>Self-taught</span>
          </div>
          <div className="personal-skill-item">
            <FaUserFriends className="fa-icon" />
            <span>Sociable</span>
          </div>
          <div className="personal-skill-item">
            <FaDesktop className="fa-icon" />
            <span>Good computer and software skills</span>
          </div>
          <div className="personal-skill-item">
            <FaCode className="fa-icon" />
            <span>Quick learner of programming languages</span>
          </div>
          <div className="personal-skill-item">
            <FaLightbulb className="fa-icon" />
            <span>Creativity and innovative mindset</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;
