import { useEffect, useRef, useState } from "react";
import Nav from "./Components/Home/nav/Nav"; // تأكد من أن هذا المكون موجود
import Hero from "./Components/Home/Hero/Hero"; // تأكد من أن هذا المكون موجود
import ShowT from "./Components/Home/Showtemplates/ShowT"; // تأكد من أن هذا المكون موجود
import Footer from "./Components/Home/Footer/Footer"; // تأكد من أن هذا المكون موجود
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate
import About from "./Components/Home/About/About";
import ProgrammingLanguagesSection from "./Components/Home/ProgrammingLanguagesSection/ProgrammingLanguagesSection";
import ServicesSection from "./Components/Home/service/service";
import FullscreenSlider from "./Components/Home/photo/photo";



function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const heroRef = useRef(null);

  // Refs for all sections that will be animated
  const mainRef = useRef(null);
  const featuresRef = useRef(null);
  const showTRef = useRef(null);
  const galleryRef = useRef(null);
  const teamRef = useRef(null);
  const servicesRef = useRef(null);

  // Animation states for each section
  const [animatedSections, setAnimatedSections] = useState({
    main: false,
    features: false,
    showT: false,
    gallery: false,
    team: false,
    services: false,
  });

  const navigate = useNavigate(); // تفعيل التوجيه للصفحات

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Setup intersection observer for animation triggers
  useEffect(() => {
    const sectionRefs = [
      { ref: mainRef, id: "main" },
      { ref: featuresRef, id: "features" },
      { ref: showTRef, id: "showT" },
      { ref: galleryRef, id: "gallery" },
      { ref: teamRef, id: "team" },
      { ref: servicesRef, id: "services" },
    ];

    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.15, // Trigger when 15% of section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find the section ID from the ref
          const sectionId = sectionRefs.find(
            (section) => section.ref.current === entry.target
          )?.id;

          if (sectionId) {
            setAnimatedSections((prev) => ({
              ...prev,
              [sectionId]: true,
            }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all section refs that exist in the DOM
    sectionRefs.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Cleanup observer
      sectionRefs.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  // Calculate scale for hero section
  const calculateScale = () => {
    if (!heroRef.current) return 1;

    const heroHeight = heroRef.current.offsetHeight;
    // Gradual scaling when scrolling down
    const scale = Math.max(0.85, 1 - scrollPosition / (heroHeight * 2));
    return scale;
  };

  // Calculate border radius based on scroll position
  const calculateBorderRadius = () => {
    // Increase curvature as you scroll down
    return Math.min(40, scrollPosition / 5);
  };

  // Animation class generator
  const getAnimationClass = (sectionId) => {
    return animatedSections[sectionId] ? "animate-section" : "hidden-section";
  };

  return (
    <>
      <Box
        className="app-container"
        sx={{ display: "flex", flexDirection: "column",}}
      >
          <Nav />

        {/* الجزء الخاص بالبطل */}
        <div
          ref={heroRef}
          className="hero-container"
          style={{
            transform: `scale(${calculateScale()})`,
            borderRadius: `${calculateBorderRadius()}px`,
          }}
        >
          <Hero />
        </div>

        <div
          ref={servicesRef}
          className={`section-container ${getAnimationClass("services")}`}
        >
          <ServicesSection />
        </div>
        <div
          ref={showTRef}
          className={`section-container ${getAnimationClass("showT")}`}
        >
          <ShowT /> 
        </div>
        <FullscreenSlider/>
        <div
          ref={galleryRef}
          className={`section-container ${getAnimationClass("gallery")}`}
        >
           
        </div>
        <ProgrammingLanguagesSection/>
        <div
          ref={teamRef}
          className={`section-container ${getAnimationClass("team")}`}
        >
          <About/>
          {/* إذا كان لديك مكون فريق أو معلومات أخرى يمكن إضافتها هنا */}
        </div>

        <div className="light" />

        <Footer />

      </Box>
    </>
  );
}

export default Home;
