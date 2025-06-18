import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content: "The service was exceptional! They responded quickly and solved my problem efficiently. I highly recommend their services to anyone in need.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Homeowner",
    content: "Professional, punctual, and polite. The technician arrived on time and completed the job perfectly. Will definitely use them again.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Property Manager",
    content: "We've used their services multiple times for our properties. Consistent quality and great customer service every time.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                hover: { duration: 0.2 }
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)"
              }}
            >
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`star ${i < testimonial.rating ? 'filled' : ''}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;