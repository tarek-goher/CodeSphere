import { useState } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BrushIcon from '@mui/icons-material/Brush';
import { useNavigate } from 'react-router-dom';
import './service.css';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Website Development",
      description: "Custom responsive websites with modern technologies and SEO optimization.",
      icon: <LaptopMacIcon />,
      bgColor: 'linear-gradient(135deg, #13f1fc 0%, #0470dc 100%)'
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Visually appealing interfaces that enhance user experience and engagement.",
      icon: <BrushIcon />,
      bgColor: 'linear-gradient(135deg, #13f1fc 0%, #0470dc 100%)'
    },
    {
      id: 2,
      title: "Mobile Applications",
      description: "Native and cross-platform apps for iOS and Android with intuitive UI/UX.",
      icon: <PhoneIphoneIcon />,
      bgColor: 'linear-gradient(135deg, #13f1fc 0%, #0470dc 100%)'
    }
  ];

  return (
    <section className="services-section" id="services">
      <Container maxWidth="lg">
        <div className="services-header" data-aos="fade-up" data-aos-duration="1000">
          <Typography variant="overline" component="div" className="services-overline">
            WHAT WE OFFER
          </Typography>
          <Typography variant="h2" component="h2" className="services-title">
            Our Premium Services
          </Typography>
        </div>

        <Grid container spacing={4} className="services-grid">
          {services.map((service) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              lg={4} 
              key={service.id}
              data-aos="zoom-in-up"
              data-aos-delay={service.id * 100}
              data-aos-duration="800"
            >
              <div 
                className={`service-card ${hoveredService === service.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="service-header" style={{ background: service.bgColor }}>
                  <div className={`service-icon ${hoveredService === service.id ? 'icon-hovered' : ''}`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                </div>
                <div className="service-content">
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>

        {/* View Templates Button */}
        <div className="services-cta" data-aos="fade-up" data-aos-duration="800">
          <button className="services-cta-btn" onClick={() => navigate('/Projects')}>
            <span>View Our Templates</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

      </Container>
    </section>
  );
};

export default ServicesSection;