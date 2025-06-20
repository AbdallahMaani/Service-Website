import { motion } from 'framer-motion';
import './Hero.css';

const Hero = ({ onContact }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Professional Services <span>Designed</span> For You
            </h1>
            <p className="hero-subtitle">
              We deliver exceptional services with a personal touch. Let us handle
              your needs so you can focus on what matters most.
            </p>
            <motion.button
              className="btn hero-btn"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              onClick={onContact}
              style={{fontWeight:'900' , fontSize:'1.2rem'}}

            >
              Get Started
            </motion.button>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-container">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;