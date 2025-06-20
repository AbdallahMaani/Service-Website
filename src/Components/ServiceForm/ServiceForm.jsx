import { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaClipboard, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './ServiceForm.css';

// ✅ Initialize EmailJS once
emailjs.init('DyKYXeJVT9Aw6rVpi');

// Custom Popup Component
const Popup = ({ type, message, onClose }) => (
  <div className={`custom-popup ${type}`}>
    <div className="popup-content">
      {type === 'success' ? (
        <FaCheckCircle className="popup-icon success" />
      ) : (
        <FaTimesCircle className="popup-icon error" />
      )}
      <span>{message}</span>
      <button className="popup-close" onClick={onClose}>×</button>
    </div>
  </div>
);

const ServiceForm = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popup, setPopup] = useState({ show: false, type: '', message: '' });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const formatPhoneNumber = (value) => {
    let plus = '';
    if (value.startsWith('+')) {
      plus = '+';
      value = value.slice(1);
    }
    let digits = value.replace(/\D/g, '').slice(0, 12);
    const groups = [];
    for (let i = 0; i < digits.length; i += 3) {
      if (i === 9) {
        groups.push(digits.slice(i, i + 3));
        break;
      }
      groups.push(digits.slice(i, i + 3));
    }
    return plus + groups.filter(Boolean).join(' ');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'phone' ? formatPhoneNumber(value) : value
    }));
  };

  const showPopup = (type, message) => {
    setPopup({ show: true, type, message });
    setTimeout(() => setPopup({ show: false, type: '', message: '' }), 3500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!emailRegex.test(formData.email)) {
      showPopup('error', 'Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    let phoneValue = formData.phone.startsWith('+') ? formData.phone.slice(1) : formData.phone;
    const phoneDigits = phoneValue.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 12) {
      showPopup('error', 'Please enter a valid phone number (10 to 12 digits).');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await emailjs.send(
        'service_kcmxnf9',
        'template_zlgs4ej',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          details: formData.details,
          time: new Date().toLocaleString(), // ✅ Added time field
        }
      );

      if (response.status === 200) {
        showPopup('success', 'Request submitted successfully! We will contact you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          details: '',
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      showPopup('error', 'Failed to submit request. Please try again.');
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
                required
                placeholder="+1 234 567 8901"
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
                  <FaPaperPlane className="btn-icon" style={{ marginRight: '.8rem' }} />
                  Submit Request
                </>
              )}
            </motion.button>

            
          </form>
          
          <div className="form-info">
            <h3>Contact</h3>
            <ul>
              <li><span>1</span><p>Fill out the form with your service details</p></li>
              <li><span>2</span><p>We'll review your request and contact you</p></li>
              <li><span>3</span><p>Receive a quote and schedule your service</p></li>
              <li><span>4</span><p>Enjoy professional service delivered to you</p></li>
            </ul>
          </div>
        </motion.div>
        
        <motion.div
              className="form-privacy"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
              style={{maxWidth: '900px', margin: '2rem auto 0 auto', textAlign: 'center'}}
            >
              <small>
                By submitting this form, you agree to our <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and consent to receive communications from Maani Services. regarding updates, offers, and other promotional content. You can undo at any time by send an email to email in.
              </small>
            </motion.div>

        {popup.show && (
          <Popup
            type={popup.type}
            message={popup.message}
            onClose={() => setPopup({ show: false, type: '', message: '' })}
          />
        )}
      </div>
    </section>
  );
});

export default ServiceForm;
