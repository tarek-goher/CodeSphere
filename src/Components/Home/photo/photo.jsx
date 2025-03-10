import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './photo.css'
import imge1 from '../../../assets/photo1.png'
import imge2 from '../../../assets/photo 2.png'
// import imge1 from '../../../assets/photo1.png'


const SliderWithBorderRadius = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Slider content - title and description for each slide
  const slides = [
    {
      image: imge1,
      title: "Advanced Dashboard",
      description: "Powerful analytics dashboard with real-time data visualization"
    },
    {
      image: imge2,
      title: "E-Commerce Platform",
      description: "Feature-rich online store with seamless user experience"
    },
    {
      image: imge1,
      title: "Mobile Application",
      description: "Cross-platform mobile app with modern UI/UX design"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  // Navigation functions
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    
    <div className='photos'>
        <div className="slider-container">
      {/* Slider container */}
      <div 
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="slide-inner">
              {/* Image */}
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="slide-image"
              />
              
              {/* Content overlay */}
              <div className="content-overlay">
                <div className="content-box">
                  <h2 className="slide-title">{slide.title}</h2>
                  <p className="slide-description">{slide.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={goToPrevSlide}
        className="nav-button prev-button"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={goToNextSlide}
        className="nav-button next-button"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicator dots */}
      <div className="slider-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`indicator-dot ${currentSlide === index ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default SliderWithBorderRadius;