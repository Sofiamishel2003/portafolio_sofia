import { motion } from 'framer-motion';
import '../styles/AboutMe.css';

const cards = [
  {
    title: "Scout",
    description: "I was a Scout for 8 years, deeply involved in various activities. I achieved the highest leadership rank in my category and participated in multiple competitions and trainings certified by the UN.",
    image: "/Scouts.jpg",
  },
  {
    title: "Taekwondo Federation",
    description: "In 2023, I was federated in Taekwondo and achieved second place in national competitions, showcasing my dedication and skill in the sport.",
    image: "/Taekwondo.jpg",
  },
  {
    title: "Daily MMA Training",
    description: "I currently train in Mixed Martial Arts (MMA) daily, maintaining my physical fitness and enhancing my combat skills.",
    image: "/MMA.jpg",
  },
  {
    title: "Social Activism",
    description: "I am actively involved in social activism, advocating for women's rights and protesting against injustices that I feel strongly about.",
    image: "/SocialActivism.jpg",
  }
];

function AboutMe() {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <p>
      Hello! I&apos;m Sofía Velásquez, a multifaceted individual with a passion for learning, creativity, and making a positive impact. My journey in programming began at the age of 12, and since then, I have developed a robust skill set, particularly focusing on Python in recent years. I am currently pursuing a degree in Computer Science at Universidad del Valle in Guatemala, where I continue to expand my knowledge and expertise.
      I am a quick learner, able to pick up new programming languages and technologies swiftly. My creativity and innovative mindset have led to various successful projects and initiatives. Beyond my technical skills, I am known for my charisma and social abilities. I enjoy taking on new challenges and thrive in dynamic environments.
      I possess a strong entrepreneurial spirit, having started my first business at the age of 7. This background has instilled in me a keen business mindset and a relentless drive for excellence. As a versatile and well-rounded individual, I continuously strive to excel in various fields, whether it’s in technology, sports, or social advocacy.
      </p>
      <div className="cards-container">
        {cards.map((card, index) => (
          <motion.div 
            className="card" 
            key={index}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img src={card.image} alt={card.title} className="card-image"/>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AboutMe;
