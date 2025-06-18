import { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaClipboard } from 'react-icons/fa';
import { toast } from 'react-toastify';
import './ServiceForm.css';

const ServiceForm = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const formatPhoneNumber = (value) => {
    // Allow leading +
    let plus = '';
    if (value.startsWith('+')) {
      plus = '+';
      value = value.slice(1);
    }
    // Remove all non-digit characters
    let digits = value.replace(/\D/g, '').slice(0, 12); // max 12 digits
    // Group digits: 3-3-3-3 (for up to 12 digits)
    const groups = [];
    for (let i = 0; i < digits.length; i += 3) {
      if (i === 9) {
        groups.push(digits.slice(i, i + 3)); // last group (could be less than 3)
        break;
      }
      groups.push(digits.slice(i, i + 3));
    }
    return plus + groups.filter(Boolean).join(' ');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      setFormData(prev => ({
        ...prev,
        [name]: formatPhoneNumber(value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Email validation
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    // Phone validation: 10-12 digits, optional leading +
    let phoneValue = formData.phone;
    if (phoneValue.startsWith('+')) phoneValue = phoneValue.slice(1);
    const phoneDigits = phoneValue.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 12) {
      toast.error('Please enter a valid phone number (10 to 12 digits).');
      setIsSubmitting(false);
      return;
    }

    // Here you would typically send the form data to your backend
    // which would then send the email. For this example, we'll simulate it.
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would do something like:
      // const response = await fetch('/api/send-email', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      
      // if (!response.ok) throw new Error('Failed to send message');
      
      toast.success('Request submitted successfully! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        details: '',
      });
    } catch (error) {
      toast.error('Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="service-form-section" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Request a Service
        </motion.h2>
        
        <motion.div 
          className="form-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="service-form">
            <div className="form-group">
              <label htmlFor="name">
                <FaUser className="input-icon" />
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope className="input-icon" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">
                <FaPhone className="input-icon" />
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="service">
                <FaClipboard className="input-icon" />
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="consultation">Consultation</option>
                <option value="repair">Repair Service</option>
                <option value="installation">Installation</option>
                <option value="maintenance">Maintenance</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="details">Service Details</label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Please describe your service needs in detail..."
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              className="btn submit-btn"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <FaPaperPlane className="btn-icon" style={{marginRight:'.8rem'}} />
                  Submit Request
                </>
              )}
            </motion.button>
          </form>
          
          <div className="form-info">
            <h3>How It Works</h3>
            <ul>
              <li>
                <span>1</span>
                <p>Fill out the form with your service details</p>
              </li>
              <li>
                <span>2</span>
                <p>We'll review your request and contact you</p>
              </li>
              <li>
                <span>3</span>
                <p>Receive a quote and schedule your service</p>
              </li>
              <li>
                <span>4</span>
                <p>Enjoy professional service delivered to you</p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default ServiceForm;