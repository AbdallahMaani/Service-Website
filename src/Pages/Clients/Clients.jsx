import { motion } from 'framer-motion';
import './Clients.css';

const clients = [
  {
    name: "Acme Corp",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg",
    desc: "Leading tech innovator and long-term partner."
  },
  {
    name: "Bright Solutions",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    desc: "Trusted for digital transformation and automation."
  },
  {
    name: "GreenFields",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    desc: "Sustainable solutions for modern agriculture."
  },
  {
    name: "UrbanEdge",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    desc: "Smart city infrastructure and IoT."
  }
];

const Clients = () => (
  <section className="clients-section">
    <div className="container">
      <motion.h1
        className="clients-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Our <span>Clients</span>
      </motion.h1>
      <motion.p
        className="clients-lead"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
      >
        We are proud to have partnered with industry leaders and innovative organizations.
      </motion.p>
      <div className="clients-list">
        {clients.map((client, idx) => (
          <motion.div
            className="client-card"
            key={client.name}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <img src={client.logo} alt={client.name} className="client-logo" />
            <div className="client-info">
              <h3>{client.name}</h3>
              <p>{client.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Clients;