import { motion } from 'framer-motion';
import { FaLightbulb, FaClock, FaHandshake, FaHeadset } from 'react-icons/fa';
import './Featuers.css';
import { forwardRef } from 'react';

const features = [
  {
    icon: <FaLightbulb />,
    title: "Innovative Solutions",
    description: "We provide cutting-edge solutions tailored to your specific needs and requirements."
  },
  {
    icon: <FaClock />,
    title: "Fast Response",
    description: "Our team responds quickly to service requests, minimizing your downtime."
  },
  {
    icon: <FaHandshake />,
    title: "Trusted Professionals",
    description: "All our service providers are vetted professionals with proven track records."
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    description: "Round-the-clock customer support to address any concerns or emergencies."
  }
];

const Features = forwardRef((props, ref) => {
  return (
    <section className="features-section" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                hover: { duration: 0.3 } // Faster hover transition
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.07, // More subtle scale
                boxShadow: "0 10px 100px 20px rgba(0, 0, 0, 0.2)",
                backgroundColor: "rgba(255, 255, 255, 0.9)"
              }}
            >
              <motion.div 
                className="feature-icon"
                whileHover={{ scale: 1.1 }}
              >
                {feature.icon}
              </motion.div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Features;