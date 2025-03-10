import { createTheme } from '@mui/material/styles';
import { alpha } from '@mui/material';

// تخصيص ثيم Material UI
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
      light: '#7986cb',
      dark: '#303f9f',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f50057',
      light: '#ff4081',
      dark: '#c51162',
      contrastText: '#fff',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 16px',
          boxShadow: 'none',
          transition: 'all 0.3s ease',
        },
        contained: {
          '&:hover': {
            boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderWidth: 2,
            },
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: '1.2rem',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&:hover': {
            backgroundColor: alpha('#3f51b5', 0.08),
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderTopRightRadius: 16,
          borderBottomRightRadius: 16,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 8,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          padding: '8px 12px',
          fontSize: '0.75rem',
        },
      },
    },
  },
});

export default theme;







// NAV     




import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  useScrollTrigger,
  Slide,
  Paper,
  alpha,
  Fade,
  useMediaQuery,
  Stack
} from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  DesignServices as ServiceIcon,
  ViewQuilt as TemplateIcon,
  Info as AboutIcon,
  QuestionAnswer as FaqIcon,
  ContactPhone as ContactIcon,
  LockPerson as LockIcon,
  Close as CloseIcon,
  KeyboardArrowRight as ArrowIcon
} from '@mui/icons-material';

// تأثير تصغير الناف بار عند التمرير
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// تصميم زر مميز للبدء
const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 30,
  textTransform: 'none',
  padding: '10px 28px',
  fontWeight: 700,
  fontSize: '0.95rem',
  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  boxShadow: `0 8px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
  border: `2px solid transparent`,
  overflow: 'hidden',
  position: 'relative',
  zIndex: 1,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
    opacity: 0,
    transition: 'opacity 0.4s ease',
    zIndex: -1,
  },
  '&:hover': {
    boxShadow: `0 10px 25px ${alpha(theme.palette.primary.main, 0.5)}`,
    transform: 'translateY(-3px)',
    '&::before': {
      opacity: 1,
    }
  },
  '&:active': {
    transform: 'translateY(1px)',
    boxShadow: `0 5px 15px ${alpha(theme.palette.primary.main, 0.4)}`,
  }
}));

// تصميم زر دائري
const CircleButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '50%',
  background: alpha(theme.palette.background.paper, 0.6),
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  '&:hover': {
    background: alpha(theme.palette.primary.main, 0.1),
    border: `1px solid ${theme.palette.primary.main}`,
    transform: 'scale(1.1)',
  }
}));

// تصميم فعال للروابط
const ActiveNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.secondary.light,
  textDecoration: 'none',
  position: 'relative',
  padding: '8px 4px',
  margin: '0 12px',
  fontWeight: 500,
  fontSize: '0.95rem',
  letterSpacing: '0.3px',
  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '0%',
    height: '3px',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '8px',
    opacity: 0,
    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
  },
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateY(-2px)',
    '&::before': {
      width: '80%',
      opacity: 1
    }
  },
  '&.active': {
    color: theme.palette.primary.main,
    fontWeight: 700,
    '&::before': {
      width: '80%',
      opacity: 1
    }
  }
}));

// تصميم الدراور
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.95)} 0%, ${alpha(theme.palette.background.paper, 0.98)} 100%)`,
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    borderRight: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  }
}));

// تصميم عنصر القائمة
const StyledListItem = styled(ListItem)(({ theme }) => ({
  margin: '4px 8px',
  borderRadius: '12px',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
}));

// تصميم زر القائمة
const StyledListButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: '12px',
  padding: '10px 16px',
  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
  '&.Mui-selected': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      height: '60%',
      width: '4px',
      borderRadius: '0 4px 4px 0',
      backgroundColor: theme.palette.primary.main,
    },
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.15),
    }
  },
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    transform: 'translateX(5px)'
  }
}));

// تصميم أيقونة القائمة
const StyledListIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
  padding: '6px',
  backgroundColor: ({ selected }) => selected ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
  color: ({ selected }) => selected ? theme.palette.primary.main : theme.palette.text.secondary,
  transition: 'all 0.3s ease',
}));

// القائمة الرئيسية
const pages = [
  { name: 'Home', path: '/', icon: <HomeIcon /> },
  { name: 'Services', path: '/Service', icon: <ServiceIcon /> },
  { name: 'Templates', path: '/Template', icon: <TemplateIcon /> },
  { name: 'About Us', path: '/AboutUs', icon: <AboutIcon /> },
  { name: 'FAQ', path: '/FAQ', icon: <FaqIcon /> },
  { name: 'Contact Us', path: '/Contact', icon: <ContactIcon /> }
];

export default function TechHiveNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // حالات المكون
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loginDialog, setLoginDialog] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  // تعيين الألوان الرئيسية (يمكن تغييرها حسب الرغبة)
  const mainColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main || '#ff6b6b';

  // الاستماع إلى حدث التمرير
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // فتح وإغلاق الدرج الجانبي
  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // فتح وإغلاق نافذة تسجيل الدخول
  const toggleLoginDialog = () => {
    setLoginDialog(!loginDialog);
    if (!loginDialog) {
      setLoginError('');
      setUsername('');
      setPassword('');
    }
  };

  // التنقل إلى صفحة البدء
  const handleGetStart = () => {
    navigate('/Template');
    setDrawerOpen(false);
  };

  // معالجة تسجيل الدخول
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "tarek" && password === "123123") {
      setLoginError('');
      setLoginDialog(false);
      navigate('/Formdata');
    } else {
      setLoginError('اسم المستخدم أو كلمة المرور غير صحيحة');
    }
  };

  // لوحة التنقل الجانبية للموبايل
  const drawer = (
    <Box sx={{ width: 300 }}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        p: 3,
        background: `linear-gradient(135deg, ${mainColor} 0%, ${secondaryColor} 100%)`,
      }}>
        <Typography variant="h5" component="div" color="white" fontWeight={700} letterSpacing="0.5px">
        CodeSphere    
            </Typography>
        <IconButton 
          onClick={toggleDrawer(false)} 
          sx={{ 
            color: 'white',
            backgroundColor: alpha('#ffffff', 0.2),
            '&:hover': {
              backgroundColor: alpha('#ffffff', 0.3),
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      
      <Box sx={{ p: 2, mt: 1 }}>
        <List>
          {pages.map((page) => {
            const isSelected = location.pathname === page.path;
            return (
              <StyledListItem 
                key={page.name} 
                disablePadding
              >
                <StyledListButton 
                  selected={isSelected}
                  onClick={() => {
                    navigate(page.path);
                    setDrawerOpen(false);
                  }}
                >
                  <StyledListIcon selected={isSelected}>
                    {page.icon}
                  </StyledListIcon>
                  <ListItemText 
                    primary={page.name} 
                    primaryTypographyProps={{
                      fontWeight: isSelected ? 700 : 500,
                      fontSize: '1rem',
                      color: isSelected ? theme.palette.primary.main : theme.palette.text.primary
                    }}
                  />
                  {isSelected && (
                    <ArrowIcon 
                      fontSize="small" 
                      color="primary"
                      sx={{ opacity: 0.7 }}
                    />
                  )}
                </StyledListButton>
              </StyledListItem>
            );
          })}
        </List>
      </Box>
      
      <Divider sx={{ 
        mx: 2, 
        opacity: 0.6,
        background: `linear-gradient(90deg, transparent 0%, ${alpha(mainColor, 0.2)} 50%, transparent 100%)`
      }} />
      
      <Box sx={{ p: 3, mt: 1 }}>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom sx={{ mb: 2, fontWeight: 500 }}>
          Ready to create your next project?
        </Typography>
        <StyledButton 
          fullWidth
          variant="contained"
          onClick={handleGetStart}
          sx={{
            py: 1.2,
          }}
        >
          Get Started Now
        </StyledButton>
      </Box>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          elevation={isScrolled ? 4 : 0}
          sx={{
            backgroundColor: isScrolled 
              ? alpha(theme.palette.background.paper, 0.85)
              : 'transparent',
            backdropFilter: isScrolled ? 'blur(15px)' : 'none',
            boxShadow: isScrolled 
              ? '0 10px 30px rgba(0,0,0,0.08)'
              : 'none',
            borderBottom: isScrolled 
              ? `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
              : 'none',
            color: theme.palette.text.primary,
            transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar 
              disableGutters 
              sx={{ 
                py: isScrolled ? 1 : 1.5,
                transition: 'all 0.4s ease'
              }}
            >
              {/* Logo للشاشات الكبيرة */}
              <Box 
                sx={{ 
                  mr: 2, 
                  display: { xs: 'none', md: 'flex' }, 
                  alignItems: 'center' 
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: isScrolled ? 45 : 50,
                    height: isScrolled ? 45 : 50,
                    mr: 1.5,
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, ${mainColor} 0%, ${secondaryColor} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 5px 15px ${alpha(mainColor, 0.3)}`,
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(135deg, ${secondaryColor} 0%, ${mainColor} 100%)`,
                      opacity: 0,
                      transition: 'opacity 0.6s ease',
                      zIndex: 0,
                    },
                    '&:hover': {
                      transform: 'rotate(5deg) scale(1.05)',
                      '&::before': {
                        opacity: 1,
                      }
                    }
                  }}
                >
                  <Typography 
                    variant="h5" 
                    color="white" 
                    sx={{ 
                      fontWeight: 800,
                      zIndex: 1,
                      letterSpacing: '0.5px',
                      textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}
                  >
                    C
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  noWrap
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 800,
                    letterSpacing: '.2rem',
                    background: `linear-gradient(135deg, ${mainColor} 30%, ${secondaryColor} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textDecoration: 'none',
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    fontSize: isScrolled ? '1.4rem' : '1.6rem',
                    cursor: 'pointer',
                    textShadow: `0 1px 2px ${alpha('#000', 0.05)}`,
                    '&:hover': {
                      letterSpacing: '.25rem',
                    }
                  }}
                  onClick={() => navigate('/')}
                >
                CodeSphere
                </Typography>
              </Box>

              {/* القائمة للموبايل */}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                  color="inherit"
                  sx={{
                    borderRadius: '12px',
                    p: 1.2,
                    border: `1px solid ${alpha(mainColor, 0.1)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: alpha(mainColor, 0.05),
                      transform: 'scale(1.05)'
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <StyledDrawer
                  anchor="left"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                >
                  {drawer}
                </StyledDrawer>
              </Box>

              {/* Logo للموبايل */}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center', justifyContent: 'center' }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: 40,
                    height: 40,
                    mr: 1,
                    borderRadius: '14px',
                    background: `linear-gradient(135deg, ${mainColor} 0%, ${secondaryColor} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 5px 15px ${alpha(mainColor, 0.3)}`,
                  }}
                >
                  <Typography 
                    variant="h6" 
                    color="white" 
                    sx={{ 
                      fontWeight: 800,
                      letterSpacing: '0.5px',
                      textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}
                  >
                    C
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 800,
                    letterSpacing: '.1rem',
                    background: `linear-gradient(135deg, ${mainColor} 30%, ${secondaryColor} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}
                  onClick={() => navigate('/')}
                >
                  TECHHIVE
                </Typography>
              </Box>

              {/* روابط الصفحات للشاشات الكبيرة */}
              <Box 
                sx={{ 
                  flexGrow: 1, 
                  display: { xs: 'none', md: 'flex' }, 
                  justifyContent: 'center',
                  ml: 4
                }}
              >
                {pages.map((page) => (
                  <ActiveNavLink
                    key={page.name}
                    to={page.path}
                    className={({ isActive }) => isActive ? 'active' : ''}
                    onMouseEnter={() => setHoveredLink(page.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {page.name}
                  </ActiveNavLink>
                ))}
              </Box>

              {/* قسم الملف الشخصي */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {/* زر المستخدم */}
                <Tooltip 
                  title="Login to your account" 
                  arrow
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 600 }}
                >
                  <CircleButton
                    onClick={toggleLoginDialog}
                    color="inherit"
                    size={isScrolled ? "small" : "medium"}
                    sx={{ 
                      transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  >
                    <LockIcon fontSize="small" />
                  </CircleButton>
                </Tooltip>

                {/* زر البدء */}
                <StyledButton 
                  variant="contained"
                  onClick={handleGetStart}
                  sx={{ 
                    display: { xs: 'none', sm: 'block' },
                    py: isScrolled ? 0.8 : 1,
                    px: isScrolled ? 2.2 : 3,
                    fontSize: isScrolled ? '0.85rem' : '0.95rem',
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                >
                  Get Started
                </StyledButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar sx={{ 
        mb: 1,
        transition: 'all 0.3s ease',
      }} /> {/* لتوفير مساحة تحت الناف بار */}

      {/* نافذة تسجيل الدخول */}
      <Dialog 
        open={loginDialog} 
        onClose={toggleLoginDialog}
        fullWidth
        maxWidth="xs"
        TransitionComponent={Fade}
        transitionDuration={400}
        PaperProps={{
          elevation: 24,
          sx: {
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
          }
        }}
      >
        <Paper sx={{ 
          background: `linear-gradient(135deg, ${mainColor} 0%, ${secondaryColor} 100%)`,
          p: 3,
        }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" color="white" fontWeight={700} letterSpacing="0.5px">
              Welcome Back
            </Typography>
            <IconButton 
              size="small" 
              onClick={toggleLoginDialog} 
              sx={{ 
                color: 'white',
                backgroundColor: alpha('#ffffff', 0.2),
                '&:hover': {
                  backgroundColor: alpha('#ffffff', 0.3),
                  transform: 'rotate(90deg)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Paper>
        
        <DialogContent sx={{ pt: 4, pb: 2, px: 4 }}>
          <DialogContentText sx={{ mb: 3, textAlign: 'center', fontWeight: 500 }}>
            Sign in to access exclusive features and templates
          </DialogContentText>
          <form onSubmit={handleLogin}>
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="Username"
              type="text"
              fullWidth
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              sx={{ 
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: alpha(mainColor, 0.5),
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderWidth: '2px',
                    borderColor: mainColor,
                  }
                }
              }}
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{ 
                mb: 1,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: alpha(mainColor, 0.5),
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderWidth: '2px',
                    borderColor: mainColor,
                  }
                }
              }}
            />
            {loginError && (
              <Typography 
                color="error" 
                variant="body2" 
                sx={{ 
                  mt: 1, 
                  textAlign: 'center',
                  backgroundColor: alpha('#f44336', 0.1),
                  p: 1,
                  borderRadius: '8px',
                  fontWeight: 500
                }}
              >
                {loginError}
              </Typography>
            )}
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                mt: 4,
                mb: 2,
                borderRadius: 3,
                py: 1.5,
                textTransform: 'none',
                fontWeight: 700,
                fontSize: '1rem',
                background: `linear-gradient(135deg, ${mainColor} 0%, ${secondaryColor} 100%)`,
                boxShadow: `0 8px 20px ${alpha(mainColor, 0.3)}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: `0 10px 25px ${alpha(mainColor, 0.5)}`,
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Sign In
            </Button>
          </form>
        </DialogContent>
        <DialogActions sx={{ px: 4, pb: 4, justifyContent: 'center' }}>
          <Typography variant="body2" color="textSecondary" textAlign="center">
            Don't have an account?{' '}
            {/* <Button
              color="primary"
              sx={{ 
                textTransform: 'none', 
                fontWeight: 700, 
                p: 0, 
                minWidth: 'auto',
                borderBottom: `2px solid transparent`,
                borderRadius: 0,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'transparent',
                  borderBottom: `2px solid ${mainColor}`,
                }
              }}
              onClick={() => {
                toggleLoginDialog();
                // يمكنك توجيه المستخدم إلى صفحة التسجيل هنا
              }}
            >
              Register Now
            </Button> */}
          </Typography>
        </DialogActions>
      </Dialog>
    </>
  );
}

























import { motion } from "framer-motion";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {  NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./nav.css";
import { SupervisedUserCircleOutlined, Person, PersonOutline } from "@mui/icons-material";

export default function Nav() {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleClick = () => {
    navigate('/Template');
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
    setLoginError("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // هنا يمكنك وضع منطق التحقق من صحة بيانات تسجيل الدخول
    // هذا مجرد مثال بسيط
    if (username === "tarek" && password === "123123") {
      setLoginError("");
      setShowLoginModal(false);
      // توجيه المستخدم إلى الصفحة المطلوبة بعد تسجيل الدخول
      navigate('/Formdata'); // غير هذا حسب الصفحة التي تريد التوجيه إليها
    } else {
      setLoginError("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
  };

  return (
    <div style={{ background: "initial" }}>
      {/* أيقونة المستخدم خارج الناف بار */}
      <div className="outside-user-icon">
        <PersonOutline onClick={toggleLoginModal} />
      </div>
      
      <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        {/* الناف العادي للشاشات الكبيرة */}
        <nav className="flex navbar">
          <h1>TechHive</h1>
          <ul className="flex ul-nav">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Service" className={({ isActive }) => (isActive ? 'active' : '')}>services</NavLink>
            </li>
            <li>
              <NavLink to="/Template" className={({ isActive }) => (isActive ? 'active' : '')}>
                Template
              </NavLink>
            </li>
            <li>
              <NavLink to="/AboutUs" className={({ isActive }) => (isActive ? 'active' : '')}>
                about
              </NavLink>
            </li>
            <li>
              <NavLink to="/FAQ" className={({ isActive }) => (isActive ? 'active' : '')}>
                FaQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                Contact Us
              </NavLink>
            </li>
            <button onClick={handleClick}>get start</button>
          </ul>
        </nav>

        {/* الناف للموبايل */}
        <nav className="nav-phone">
          <h1>X-APP</h1>
          <MenuOutlinedIcon className="icon" />
          <ul className="ul-phone">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Service" className={({ isActive }) => (isActive ? 'active' : '')}>services</NavLink>
            </li>
            <li>
              <NavLink to="/Template" className={({ isActive }) => (isActive ? 'active' : '')}>
                Template
              </NavLink>
            </li>
            <li>
              <NavLink to="/AboutUs" className={({ isActive }) => (isActive ? 'active' : '')}>
                about
              </NavLink>
            </li>
            <li>
              <NavLink to="/FAQ" className={({ isActive }) => (isActive ? 'active' : '')}>
                FaQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                Contact Us
              </NavLink>
            </li>
            <button onClick={handleClick}>get start</button>
          </ul>
        </nav>

        {/* نافذة تسجيل الدخول المنبثقة */}
        {showLoginModal && (
          <div className="login-modal-overlay">
            <div className="login-modal">
              <button className="close-button" onClick={toggleLoginModal}>×</button>
              <h2>Log IN</h2>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="username"> User Name</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password"> Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {loginError && <div className="error-message">{loginError}</div>}
                <button type="submit" className="login-button"></button>
              </form>
            </div>
          </div>
        )}
      </motion.header>
    </div>
  );
}