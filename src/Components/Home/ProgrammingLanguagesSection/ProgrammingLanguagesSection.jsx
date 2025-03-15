import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button,
  alpha,
  Tab,
  Tabs,
  Paper,
  useMediaQuery,
  Switch,
  Stack,
  Chip
} from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

// Styled components
const GlassCard = styled(Card)(({ theme }) => ({
  background: alpha(theme.palette.background.paper, 0.7),
  backdropFilter: 'blur(10px)',
  borderRadius: 16,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  boxShadow: `0 10px 40px -10px ${alpha('#000', 0.1)}`,
  overflow: 'hidden',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 20px 40px -20px ${alpha('#000', 0.15)}`,
  }
}));

const LogoAvatar = styled('img')(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: 12,
  padding: 8,
  background: alpha(theme.palette.background.paper, 0.9),
  boxShadow: `0 4px 12px ${alpha('#000', 0.08)}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  }
}));

const SkillBar = styled(Box)(({ theme, value, color }) => ({
  height: 6,
  borderRadius: 3,
  width: '100%',
  position: 'relative',
  backgroundColor: alpha(theme.palette.grey[200], 0.5),
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: `${value}%`,
    borderRadius: 3,
    background: color ? 
      `linear-gradient(90deg, ${alpha(color, 0.7)} 0%, ${color} 100%)` : 
      `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
  }
}));

const ElegantButton = styled(Button)(({ theme, active, color }) => ({
  borderRadius: 12,
  padding: '10px 20px',
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '0.95rem',
  transition: 'all 0.3s ease',
  margin: '0 8px',
  marginBottom: '8px', // Add bottom margin for mobile layout
 
  backgroundColor: active ? 
    alpha(color || theme.palette.primary.main, 0.1) : 
    'transparent',
  color: active ? 
    (color || theme.palette.primary.main) : 
    theme.palette.text.secondary,
  border: active ? 
    `1px solid ${color || theme.palette.primary.main}` : 
    `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  boxShadow: active ? 
    `0 4px 12px ${alpha(color || theme.palette.primary.main, 0.15)}` : 
    'none',
  '&:hover': {
    backgroundColor: alpha(color || theme.palette.primary.main, 0.15),
    transform: 'translateY(-3px)',
    boxShadow: `0 6px 15px ${alpha(color || theme.palette.primary.main, 0.2)}`,
  }
}));

const ProgrammingLanguagesSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Template'); // الانتقال إلى الصفحة الرئيسية
  };


  const [currentTab, setCurrentTab] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    // Trigger animation on initial load and tab change
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
    }, 300);
  }, [currentTab]);

  const handleTabChange = (index) => {
    setCurrentTab(index);
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  // Create theme based on dark mode state
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#3a86ff',
      },
      secondary: {
        main: '#ff006e',
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
    },
  });

  // Technology categories (expanded)
  const categories = [
    {
      id: "frontend",
      name: "Frontend",
      description: "Modern technologies for building responsive and interactive user interfaces",
      color: "#61DAFB",
      technologies: [
        {
          id: "react",
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          color: "#61DAFB",
          level: 95,
          description: "A JavaScript library for building user interfaces",
        },
        {
          id: "angular",
          name: "Angular",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
          color: "#DD0031",
          level: 85,
          description: "Platform for building mobile and desktop web applications",
        },
        {
          id: "vue",
          name: "Vue.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
          color: "#4FC08D",
          level: 88,
          description: "Progressive framework for building user interfaces",
        },
        {
          id: "nextjs",
          name: "Next.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          color: "#000000",
          level: 92,
          description: "React framework for production with server-side rendering",
        },
        {
          id: "tailwind",
          name: "Tailwind CSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
          color: "#38B2AC",
          level: 90,
          description: "Utility-first CSS framework for rapid UI development",
        },
        {
          id: "typescript",
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          color: "#3178C6",
          level: 88,
          description: "Typed superset of JavaScript that compiles to plain JavaScript",
        }
      ]
    },
    {
      id: "backend",
      name: "Backend",
      description: "Powerful server-side technologies for building robust and scalable applications",
      color: "#339933",
      technologies: [
        {
          id: "nodejs",
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          color: "#339933",
          level: 92,
          description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
        },
        {
          id: "python",
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          color: "#3776AB",
          level: 88,
          description: "Interpreted high-level programming language for general-purpose programming",
        },
        {
          id: "java",
          name: "Java",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          color: "#007396",
          level: 85,
          description: "General-purpose programming language that is class-based, object-oriented",
        },
        {
          id: "golang",
          name: "Go",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
          color: "#00ADD8",
          level: 80,
          description: "Statically typed, compiled language designed for efficiency and concurrency",
        },
        {
          id: "csharp",
          name: "C#",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
          color: "#239120",
          level: 83,
          description: "Modern, object-oriented language developed by Microsoft",
        },
        {
          id: "php",
          name: "PHP",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
          color: "#777BB4",
          level: 78,
          description: "Server-side scripting language designed for web development",
        }
      ]
    },
    {
      id: "ui_ux",
      name: "UI/UX Design",
      description: "Tools and methodologies for creating beautiful and user-friendly interfaces",
      color: "#F24E1E",
      technologies: [
        {
          id: "figma",
          name: "Figma",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          color: "#F24E1E",
          level: 94,
          description: "Cloud-based design tool for collaborative interface design",
        },
        {
          id: "xd",
          name: "Adobe XD",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
          color: "#FF61F6",
          level: 86,
          description: "Vector-based user experience design tool for web and mobile apps",
        },
        {
          id: "sketch",
          name: "Sketch",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
          color: "#F7B500",
          level: 82,
          description: "Digital design app for creating UI, mobile, web, and icon designs",
        },
        {
          id: "illustrator",
          name: "Adobe Illustrator",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
          color: "#FF9A00",
          level: 88,
          description: "Vector graphics editor for creating illustrations and graphics",
        },
        {
          id: "photoshop",
          name: "Adobe Photoshop",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
          color: "#31A8FF",
          level: 90,
          description: "Raster graphics editor for photo editing and digital art",
        },
        {
          id: "aftereffects",
          name: "Adobe After Effects",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg",
          color: "#9999FF",
          level: 79,
          description: "Digital visual effects and motion graphics software",
        }
      ]
    },
    {
      id: "database",
      name: "Database",
      description: "Database technologies for efficient data storage, retrieval, and management",
      color: "#47A248",
      technologies: [
        {
          id: "mongodb",
          name: "MongoDB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          color: "#47A248",
          level: 92,
          description: "Cross-platform document-oriented NoSQL database",
        },
        {
          id: "mysql",
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          color: "#4479A1",
          level: 89,
          description: "Open-source relational database management system",
        },
        {
          id: "postgresql",
          name: "PostgreSQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          color: "#336791",
          level: 87,
          description: "Advanced open-source relational database system",
        },
        {
          id: "firebase",
          name: "Firebase",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
          color: "#FFCA28",
          level: 91,
          description: "Google's platform for mobile and web application development",
        },
        {
          id: "redis",
          name: "Redis",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
          color: "#DC382D",
          level: 83,
          description: "In-memory data structure store used as database and cache",
        },
        {
          id: "graphql",
          name: "GraphQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
          color: "#E10098",
          level: 85,
          description: "Query language and runtime for APIs",
        }
      ]
    },
    {
      id: "devops",
      name: "DevOps",
      description: "Tools and practices for efficient development, deployment, and operations",
      color: "#2496ED",
      technologies: [
        {
          id: "docker",
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          color: "#2496ED",
          level: 90,
          description: "Platform for developing, shipping, and running applications in containers",
        },
        {
          id: "kubernetes",
          name: "Kubernetes",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
          color: "#326CE5",
          level: 84,
          description: "Open-source system for automating deployment and scaling of containerized applications",
        },
        {
          id: "aws",
          name: "AWS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
          color: "#FF9900",
          level: 88,
          description: "Cloud computing services by Amazon",
        },
        {
          id: "jenkins",
          name: "Jenkins",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
          color: "#D33833",
          level: 82,
          description: "Open-source automation server for CI/CD pipelines",
        },
        {
          id: "git",
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          color: "#F05032",
          level: 95,
          description: "Distributed version control system for tracking code changes",
        },
        {
          id: "terraform",
          name: "Terraform",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
          color: "#7B42BC",
          level: 80,
          description: "Infrastructure as code software tool for building cloud infrastructure",
        }
      ]
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        py: { xs: 6, md: 10 }, 
        background: theme.palette.background.default,
        minHeight: '100vh',
        transition: 'background 0.3s ease'
      }}>
        <Container maxWidth="xl">
          {/* Theme toggle */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2"  sx={{color:theme.palette.text.secondary}}>Light</Typography>
              <Switch
                checked={darkMode}
                onChange={handleThemeToggle}
                color="primary"
              />
              <Typography variant="body2" sx={{color:theme.palette.text.secondary}}>Dark</Typography>
            </Stack>
          </Box>

          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
            <Typography 
              variant="overline" 
              component="p" 
              sx={{ 
                fontWeight: 700,
                letterSpacing: 2,
                color: theme.palette.primary.main,
                mb: 1
              }}
            >
              CUTTING-EDGE DEVELOPMENT
            </Typography>
            
            <Typography
      variant="h2"
      component="h1"
      sx={{
        fontWeight: 800,
        mb: 2,
        background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block',
        fontSize: {
          xs: '1.8rem',  
          sm: '2rem',   
          md: '3rem',    
          lg: '4rem',   
        },
      }}
    >
              Our Technology Stack
            </Typography>
            
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ maxWidth: 800, mx: 'auto', mb: 5 }}
            >
              We leverage modern technologies to build powerful, scalable, and beautiful 
              web and mobile applications tailored to your specific needs
            </Typography>
          </Box>

          {/* Elegant category buttons - Modified to stay in row on all screen sizes */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'row', // Always keep in row
            flexWrap: 'wrap', // Allow wrapping on smaller screens
            justifyContent: 'center',
            gap: 1,
            mb: 6
          }}>
            {categories.map((category, index) => (
              <ElegantButton
                key={category.id}
                active={currentTab === index}
                color={category.color}
                onClick={() => handleTabChange(index)}
                disableElevation
                startIcon={
                  <Box 
                    component="span" 
                    sx={{ 
                      width: 10, 
                      height: 10, 
                      borderRadius: '50%', 
                      background: category.color,
                      display: 'inline-block',
                      mr: 0.5
                    }} 
                  />
                }
              >
                {category.name}
                {currentTab === index && (
                  <Chip 
                    label={`${category.technologies.length}`}
                    size="small"
                    sx={{ 
                      ml: 1, 
                      height: 20, 
                      fontSize: '0.7rem',
                      background: alpha(category.color, 0.2),
                      color: category.color,
                      border: `1px solid ${alpha(category.color, 0.3)}`,
                    }}
                  />
                )}
              </ElegantButton>
            ))}
          </Box>

          {categories.map((category, index) => (
            <Box 
              key={category.id}
              role="tabpanel"
              hidden={currentTab !== index}
              id={`tech-tabpanel-${category.id}`}
              aria-labelledby={`tech-tab-${category.id}`}
              sx={{ 
                display: currentTab === index ? 'block' : 'none',
                animation: animate ? 'fadeIn 0.5s ease-in-out' : 'none',
                '@keyframes fadeIn': {
                  '0%': {
                    opacity: 0,
                    transform: 'translateY(20px)'
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'translateY(0)'
                  }
                }
              }}
            >
              {currentTab === index && (
                <>
                  {/* Modified to center the description text */}
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    width: '100%',
                    mb: 4
                  }}>
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      align="center"
                      sx={{ 
                        fontWeight: 600,
                        color: category.color,
                        position: 'relative',
                        display: 'inline-block',
                        textAlign: 'center',
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -10,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 60,
                          height: 3,
                          borderRadius: 1.5,
                          background: category.color
                        }
                      }}
                    >
                      {category.description}
                    </Typography>
                  </Box>
                  <Grid container spacing={3}>
                    {category.technologies.map((tech) => (
                      <Grid item xs={12} sm={6} md={4} key={tech.id}>
                        <GlassCard elevation={0}>
                          <CardContent sx={{ p: 3 }}>
                            <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 2.5 }}>
                              <LogoAvatar
                                src={tech.logo}
                                alt={`${tech.name} logo`}
                                sx={{ bgcolor: alpha(tech.color, 0.1) }}
                              />
                              <Box>
                                <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 0.5 }}>
                                  {tech.name}
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 500, color: tech.color }}>
                                  {tech.level}% Expertise
                                </Typography>
                              </Box>
                            </Stack>
                            
                            <Typography 
                              variant="body2" 
                              color="text.secondary" 
                              sx={{ mb: 3 }}
                            >
                              {tech.description}
                            </Typography>
                            
                            <SkillBar value={tech.level} color={tech.color} />
                          </CardContent>
                        </GlassCard>
                      </Grid>
                    ))}
                  </Grid>
                </>
              )}
            </Box>
          ))}

          <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
            <Paper
              elevation={0}
              sx={{
                py: 4,
                px: { xs: 3, md: 5 },
                borderRadius: 4,
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                maxWidth: 900,
                mx: 'auto'
              }}
            >
              <Stack 
                direction={{ xs: 'column', md: 'row' }} 
                spacing={{ xs: 3, md: 4 }} 
                alignItems="center"
                justifyContent="space-between"
              >
                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    Ready to build your next project?
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Let's discuss how our technology expertise can help you achieve your goals
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardIosIcon />}
                  sx={{
                    borderRadius: 2.5,
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    boxShadow: `0 8px 20px -10px ${alpha(theme.palette.primary.main, 0.5)}`,
                  }}
                  onClick={handleClick}
                >
                  Start a Project
                </Button>
              </Stack>
            </Paper>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ProgrammingLanguagesSection;