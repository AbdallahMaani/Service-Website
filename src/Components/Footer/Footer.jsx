import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { forwardRef } from 'react';
import './Footer.css';

const Footer = forwardRef((props, ref) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" ref={ref}>
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-about"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-logo">Maani Services</h3>
            <p>
              Professional services tailored to your needs. We deliver excellence 
              with every project, ensuring complete customer satisfaction.
            </p>
            <div className="social-links">
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                aria-label="Facebook"
              >
                <FaFacebook />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                aria-label="Twitter"
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                aria-label="Instagram"
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>

          <div className="footer-links">
            <motion.div 
              className="link-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </motion.div>

            <motion.div 
              className="link-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4>Services</h4>
              <ul>
                <li><a href="#">Consultation</a></li>
                <li><a href="#">Repair</a></li>
                <li><a href="#">Installation</a></li>
                <li><a href="#">Maintenance</a></li>
              </ul>
            </motion.div>

            <motion.div 
              className="link-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4>Contact</h4>
              <ul>
                <li>123 Service Street</li>
                <li>City, State 10001</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: Maani@test.com</li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Maani Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;