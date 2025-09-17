import './home.css'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const words = ["Tech Talents", "Ai Engineers", "Cloud Engineers", "Data Engineers"];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="hero">
        <h1 className="hero-tagline">Nearshore Tech Talent For Africa's Roadmap</h1>
        <div style={{ overflow: "hidden", height: "70px" }} className='hero-animated-text'>
          <AnimatePresence mode="wait">
            <motion.div
              key={words[index]}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -70, opacity: 1 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 70 }}
              className='hero-wobby-text'
            >
              {words[index]}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="hero-desc">
          <p>Access 4,000+ timezone-aligned software engineers <br /> with experience in AI and 100+ other technologies.</p>
        </div>
        <div className="hero-button">
          <button>Schedule a Call</button>
        </div>
        <div className="clip-top-circle">
        </div>
      </div>

      <div className="home-companies">
        <h2>500+ companies rely on our top 1% talent to scale their dev teams.</h2>
      </div>
    </div>
  )
}

export default Home