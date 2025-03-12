import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Button,
  Card,
  CardContent,
  IconButton,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  CircularProgress,
  Snackbar,
  Alert,
  Tabs,
  Tab,
  Divider,
  useMediaQuery
} from '@mui/material';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import {
  Dashboard as DashboardIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  AttachMoney as MoneyIcon,
  Schedule as ScheduleIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Refresh as RefreshIcon,
  FilterList as FilterListIcon,
  Search as SearchIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  Pending as PendingIcon
} from '@mui/icons-material';
import Nav from '../Home/nav/Nav';

// API URL from environment variables
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

// Service type mapping
const serviceTypes = [
  { value: 'website', label: 'Website' },
  { value: 'mobile', label: 'Mobile Application' },
  { value: 'desktop', label: 'Desktop Application' },
  { value: 'ui_ux', label: 'UI/UX Design' },
];

// Status options
const statusOptions = [
  { value: 'new', label: 'New', color: 'info' },
  { value: 'in_progress', label: 'In Progress', color: 'warning' },
  { value: 'completed', label: 'Completed', color: 'success' },
  { value: 'cancelled', label: 'Cancelled', color: 'error' },
];

// Create theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: '#f0f0f0',
          fontWeight: 'bold',
        },
      },
    },
  },
});

const FormDataReceiver = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Statistics calculation
  const statistics = {
    total: projects.length,
    new: projects.filter(p => p.status === 'new').length,
    inProgress: projects.filter(p => p.status === 'in_progress').length,
    completed: projects.filter(p => p.status === 'completed').length,
    cancelled: projects.filter(p => p.status === 'cancelled').length,
    website: projects.filter(p => p.serviceType === 'website').length,
    mobile: projects.filter(p => p.serviceType === 'mobile').length,
    desktop: projects.filter(p => p.serviceType === 'desktop').length,
    ui_ux: projects.filter(p => p.serviceType === 'ui_ux').length,
  };

  // Fetch projects from API
  const fetchProjects = async () => {
    setLoading(true);
    try {
      // Try to fetch from API
      const response = await fetch(`${API_URL}/projects`);
      if (!response.ok) {
        throw new Error('Failed to fetch data from API');
      }
      const data = await response.json();
      setProjects(data);
      setNotification({
        open: true,
        message: 'Projects loaded successfully',
        severity: 'success'
      });
    } catch (err) {
      console.error('Error fetching from API, falling back to localStorage:', err);
      // Fallback to localStorage if API is not available
      const localData = JSON.parse(localStorage.getItem('projectSubmissions') || '[]');
      setProjects(localData);
      setNotification({
        open: true,
        message: 'Using local data (API not available)',
        severity: 'info'
      });
    } finally {
      setLoading(false);
    }
  };

  // Initial data load
  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle project status updates
  const updateProjectStatus = async (id, newStatus) => {
    try {
      // Try to update via API
      const response = await fetch(`${API_URL}/projects/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update project status');
      }
      
      // Update state with new data
      setProjects(projects.map(project => 
        project.id === id ? { ...project, status: newStatus } : project
      ));
      
      setNotification({
        open: true,
        message: 'Project status updated successfully',
        severity: 'success'
      });
    } catch (err) {
      console.error('Error updating via API, updating locally:', err);
      
      // Fallback to localStorage
      const localData = JSON.parse(localStorage.getItem('projectSubmissions') || '[]');
      const updatedData = localData.map(project => 
        project.id === id ? { ...project, status: newStatus } : project
      );
      localStorage.setItem('projectSubmissions', JSON.stringify(updatedData));
      
      // Update state
      setProjects(projects.map(project => 
        project.id === id ? { ...project, status: newStatus } : project
      ));
      
      setNotification({
        open: true,
        message: 'Project status updated locally',
        severity: 'info'
      });
    }
  };

  // Delete project
  const deleteProject = async (id) => {
    try {
      // Try to delete via API
      const response = await fetch(`${API_URL}/projects/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete project');
      }
      
      // Update state
      setProjects(projects.filter(project => project.id !== id));
      
      setNotification({
        open: true,
        message: 'Project deleted successfully',
        severity: 'success'
      });
    } catch (err) {
      console.error('Error deleting via API, deleting locally:', err);
      
      // Fallback to localStorage
      const localData = JSON.parse(localStorage.getItem('projectSubmissions') || '[]');
      const updatedData = localData.filter(project => project.id !== id);
      localStorage.setItem('projectSubmissions', JSON.stringify(updatedData));
      
      // Update state
      setProjects(projects.filter(project => project.id !== id));
      
      setNotification({
        open: true,
        message: 'Project deleted locally',
        severity: 'info'
      });
    }
  };

  // Filter projects
  const filteredProjects = projects.filter(project => {
    // Apply status filter
    if (filter !== 'all' && project.status !== filter) {
      return false;
    }
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        project.fullName.toLowerCase().includes(query) ||
        project.email.toLowerCase().includes(query) ||
        project.projectDescription.toLowerCase().includes(query)
      );
    }
    
    return true;
  });

  // Handle dialog open for project details
  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    
    // Set filter based on tab
    if (newValue === 0) setFilter('all');
    else if (newValue === 1) setFilter('new');
    else if (newValue === 2) setFilter('in_progress');
    else if (newValue === 3) setFilter('completed');
  };

  // Get chip color for status
  const getStatusChip = (status) => {
    const statusOption = statusOptions.find(opt => opt.value === status) || 
                          { value: status, label: status, color: 'default' };
    
    return (
      <Chip 
        label={statusOption.label} 
        color={statusOption.color} 
        size="small" 
      />
    );
  };

  // Format date from ISO string
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
        <Nav />
        <Container maxWidth="xl" sx={{ pt: 12, pb: 8 }}>
          {/* Header Section */}
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="h4" component="h1">
              Project Management Dashboard
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                variant="contained" 
                startIcon={<RefreshIcon />}
                onClick={fetchProjects}
                disabled={loading}
              >
                Refresh
              </Button>
            </Box>
          </Box>

          {/* Stats Cards */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Total Projects
                  </Typography>
                  <Typography variant="h4" component="div">
                    {statistics.total}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    New Inquiries
                  </Typography>
                  <Typography variant="h4" component="div" color="info.main">
                    {statistics.new}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    In Progress
                  </Typography>
                  <Typography variant="h4" component="div" color="warning.main">
                    {statistics.inProgress}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Completed
                  </Typography>
                  <Typography variant="h4" component="div" color="success.main">
                    {statistics.completed}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Filters and Search */}
          <Paper sx={{ mb: 4, p: 2 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={6}>
                <Tabs 
                  value={tabValue} 
                  onChange={handleTabChange}
                  variant={isMobile ? "scrollable" : "standard"}
                  scrollButtons="auto"
                >
                  <Tab label="All Projects" />
                  <Tab label="New" />
                  <Tab label="In Progress" />
                  <Tab label="Completed" />
                </Tabs>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  placeholder="Search projects..."
                  variant="outlined"
                  size="small"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  InputProps={{
                    startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                  }}
                />
              </Grid>
            </Grid>
          </Paper>

          {/* Projects Table */}
          <Paper>
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                <CircularProgress />
              </Box>
            ) : filteredProjects.length === 0 ? (
              <Box sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h6" color="textSecondary">
                  No projects found
                </Typography>
              </Box>
            ) : (
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Project Name</TableCell>
                      <TableCell>Service Type</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Budget</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredProjects.map((project) => (
                      <TableRow key={project.id} hover>
                        <TableCell>
                          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              {project.fullName}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              {project.email}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          {serviceTypes.find(s => s.value === project.serviceType)?.label || project.serviceType}
                        </TableCell>
                        <TableCell>{getStatusChip(project.status)}</TableCell>
                        <TableCell>{project.timestamp ? formatDate(project.timestamp) : 'N/A'}</TableCell>
                        <TableCell>{project.budget}</TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton 
                              size="small" 
                              color="primary"
                              onClick={() => handleOpenDetails(project)}
                            >
                              <EditIcon fontSize="small" />
                            </IconButton>
                            <IconButton 
                              size="small" 
                              color="error"
                              onClick={() => {
                                if (window.confirm('Are you sure you want to delete this project?')) {
                                  deleteProject(project.id);
                                }
                              }}
                            >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Paper>
        </Container>
        
        {/* Project Detail Dialog */}
        {selectedProject && (
          <Dialog 
            open={dialogOpen} 
            onClose={() => setDialogOpen(false)}
            maxWidth="md"
            fullWidth
          >
            <DialogTitle>
              Project Details
            </DialogTitle>
            <DialogContent dividers>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2">Full Name</Typography>
                  <Typography variant="body1" gutterBottom>{selectedProject.fullName}</Typography>
                  
                  <Typography variant="subtitle2" sx={{ mt: 2 }}>Email</Typography>
                  <Typography variant="body1" gutterBottom>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <EmailIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                      {selectedProject.email}
                    </Box>
                  </Typography>
                  
                  <Typography variant="subtitle2" sx={{ mt: 2 }}>Phone Number</Typography>
                  <Typography variant="body1" gutterBottom>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <PhoneIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                      {selectedProject.phoneNumber}
                    </Box>
                  </Typography>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2">Service Type</Typography>
                  <Typography variant="body1" gutterBottom>
                    {serviceTypes.find(s => s.value === selectedProject.serviceType)?.label || selectedProject.serviceType}
                  </Typography>
                  
                  <Typography variant="subtitle2" sx={{ mt: 2 }}>Budget</Typography>
                  <Typography variant="body1" gutterBottom>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <MoneyIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                      {selectedProject.budget}
                    </Box>
                  </Typography>
                  
                  <Typography variant="subtitle2" sx={{ mt: 2 }}>Timeframe</Typography>
                  <Typography variant="body1" gutterBottom>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <ScheduleIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                      {selectedProject.timeframe}
                    </Box>
                  </Typography>
                </Grid>
                
                <Grid item xs={12}>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="subtitle2">Project Description</Typography>
                  <Paper variant="outlined" sx={{ p: 2, mt: 1, backgroundColor: '#f8f8f8' }}>
                    <Typography variant="body1">
                      {selectedProject.projectDescription}
                    </Typography>
                  </Paper>
                </Grid>
                
                <Grid item xs={12}>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="subtitle2" gutterBottom>Status</Typography>
                  <TextField
                    select
                    fullWidth
                    value={selectedProject.status}
                    onChange={(e) => {
                      const newStatus = e.target.value;
                      updateProjectStatus(selectedProject.id, newStatus);
                      setSelectedProject({ ...selectedProject, status: newStatus });
                    }}
                    variant="outlined"
                  >
                    {statusOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {getStatusChip(option.value)} {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setDialogOpen(false)}>
                Close
              </Button>
              <Button 
                color="error" 
                onClick={() => {
                  if (window.confirm('Are you sure you want to delete this project?')) {
                    deleteProject(selectedProject.id);
                    setDialogOpen(false);
                  }
                }}
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        )}
        
        {/* Notification */}
        <Snackbar 
          open={notification.open} 
          autoHideDuration={6000}
          onClose={() => setNotification({ ...notification, open: false })}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert 
            onClose={() => setNotification({ ...notification, open: false })} 
            severity={notification.severity}
            sx={{ width: '100%' }}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
};

export default FormDataReceiver;