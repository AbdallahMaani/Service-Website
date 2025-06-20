import { motion } from 'framer-motion';
import './About.css';

// Use royalty-free images from Unsplash or similar
const aboutImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80'
];

const About = () => (
  <section className="about-section">
    <div className="container">
      <motion.h1
        className="about-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        About <span>Us</span>
      </motion.h1>
      <motion.p
        className="about-lead"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
      >
        We are dedicated to delivering exceptional services with a personal touch. Our team combines expertise, passion, and innovation to help you achieve your goals—whether it’s consultation, repair, installation, or custom solutions.
      </motion.p>
      <div className="about-content">
        <motion.div
          className="about-images"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.25 }
            }
          }}
        >
          {aboutImages.map((src, idx) => (
            <motion.img
              key={src}
              src={src}
              alt={`About us ${idx + 1}`}
              className="about-img"
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + idx * 0.2, ease: 'easeOut' }}
            />
          ))}
        </motion.div>
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
        >
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <span>✔</span>
              <div>
                <strong>Expert Team:</strong> Our professionals are highly trained and passionate about what they do.
              </div>
            </li>
            <li>
              <span>✔</span>
              <div>
                <strong>Customer Focused:</strong> We listen, adapt, and deliver solutions tailored to your needs.
              </div>
            </li>
            <li>
              <span>✔</span>
              <div>
                <strong>Reliable & Transparent:</strong> Clear communication and dependable service every step of the way.
              </div>
            </li>
            <li>
              <span>✔</span>
              <div>
                <strong>Innovative Approach:</strong> We use the latest tools and methods to ensure top results.
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;