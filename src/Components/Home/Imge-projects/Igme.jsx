import React from 'react';
import './img.css'
import img from './imge/imge-1.png';
import img2 from './imge/imge-4.png';
import img3 from './imge/imge-7.png';
import img4 from './imge/imge-9.png';
import img5 from './imge/imges2.png';

import { 
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
  Typography,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ProjectGallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Project data - replace with your actual data
  const projects = [
    { id: 1, title: "Website Design ----", image: img3, type: "web" },
    { id: 2, title: "Mobile Application", image: img3, type: "mobile" },
    { id: 3, title: "Dashboard", image: img5, type: "web" },
    { id: 4, title: "User Interface", image: img2, type: "mobile" },
    { id: 5, title: "E-commerce Design", image: img3, type: "web" },
    { id: 6, title: "Notification App", image: img4, type: "mobile" },
  ];

  // Function to navigate to project details page
  const handleProjectClick = (projectId) => {
    console.log(`Navigating to project details ${projectId}`);
    // Implement navigation logic here - for example:
    // history.push(`/projects/${projectId}`);
  };

  // Function to preview the project
  const handleViewClick = (e, projectId) => {
    e.stopPropagation(); // Prevent event propagation to card
    console.log(`Viewing project ${projectId}`);
    // Implement preview logic here - e.g., open modal or preview page
  };

  return (
    <Box sx={{width:"100%", bgcolor:"#fff" , height:"auto", overflow:"hidden"}}>

<Box sx={{ width: '90%',mx:"auto", overflow: 'hidden',my:6 , bgcolor:"#fff" ,borderRadius:"15px"}}>
      <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ my: 3, color:"#247ec8", fontWeight:600, }}>
        Project Gallery
      </Typography>

      <Box sx={{ px: { xs: 0, md: 0 } }}>
        <Grid container spacing={2}>
          {/* First row: Wide image + 3 images beside it */}
          <Grid item xs={12} md={8}>
            <ProjectCard 
              project={projects[0]} 
              onProjectClick={handleProjectClick} 
              onViewClick={handleViewClick} 
              height={isMobile ? 300 : 500}
            />
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Grid container direction="column" spacing={2}>
              {projects.slice(1, 4).map((project) => (
                <Grid item key={project.id}>
                  <ProjectCard 
                    project={project} 
                    onProjectClick={handleProjectClick} 
                    onViewClick={handleViewClick} 
                    height={isMobile ? 220 : 160}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          
          {/* Second row: Two images with the same width as the wide image */}
          <Grid item xs={12} md={6}>
            <ProjectCard 
              project={projects[4]} 
              onProjectClick={handleProjectClick} 
              onViewClick={handleViewClick} 
              height={isMobile ? 300 : 400}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <ProjectCard 
              project={projects[5]} 
              onProjectClick={handleProjectClick} 
              onViewClick={handleViewClick} 
              height={isMobile ? 300 : 400}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>

    </Box>
  );
};

// Project card component
const ProjectCard = ({ project, onProjectClick, onViewClick, height }) => {
  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6
        },
        borderRadius: 2,
        overflow: 'hidden'
      }}
    >
      <CardActionArea onClick={() => onProjectClick(project.id)}>
        <CardMedia
          component="img"
          height={height}
          image={project.image}
          alt={project.title}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            padding: 1
          }}
        >
          <Typography variant="body1" className='text-img'>{project.title}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: 'lightgrey' }}>
            {project.type === 'web' ? 'Web Design' : 'Mobile App'}
          </Typography>
        </Box>
      </CardActionArea>
      
      <CardActions 
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          padding: 0
        }}
      >
        <Button 
          size="small" 
          variant="contained" 
          color="primary" 
          startIcon={<VisibilityIcon />}
          onClick={(e) => onViewClick(e, project.id)}
          sx={{ 
            bgcolor: 'rgba(0, 0, 0, 0.7)', 
            '&:hover': { bgcolor: 'primary.main' },
            borderRadius: 4,
            textTransform: 'none',
            fontWeight: 'medium'
          }}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectGallery;