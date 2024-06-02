import  { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading && <Loader />}
      <Navbar />
      <div id="banner">
        <Banner />
      </div>
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
