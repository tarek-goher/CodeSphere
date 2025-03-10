import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
  LinearProgress,
  IconButton,
  Tooltip,
  Alert,
  useMediaQuery,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  MenuItem,
  Menu,
} from "@mui/material";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DescriptionIcon from "@mui/icons-material/Description";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import WebIcon from "@mui/icons-material/Web";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Nav from "../Home/nav/Nav";

const theme = createTheme({
  palette: {
    primary: { main: "#3f51b5" },
    secondary: { main: "#f50057" },
    background: { default: "#f5f7fa" },
    success: { main: "#4caf50" },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h3: { fontWeight: 600 },
    h5: { fontWeight: 500 },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 12px 28px rgba(0, 0, 0, 0.1)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { borderRadius: 12 },
      },
    },
  },
});

// Helper functions
const getServiceIcon = (serviceType) => {
  switch (serviceType) {
    case "website":
      return <WebIcon fontSize="large" color="primary" />;
    case "mobile":
      return <PhoneIphoneIcon fontSize="large" color="primary" />;
    case "desktop":
      return <DesktopWindowsIcon fontSize="large" color="primary" />;
    case "ui_ux":
      return <DesignServicesIcon fontSize="large" color="primary" />;
    default:
      return <WebIcon fontSize="large" color="primary" />;
  }
};

const getServiceLabel = (serviceType) => {
  switch (serviceType) {
    case "website":
      return "Website Development";
    case "mobile":
      return "Mobile Application";
    case "desktop":
      return "Desktop Application";
    case "ui_ux":
      return "UI/UX Design";
    default:
      return "Unknown Service";
  }
};

const serviceTypes = [
  { value: "website", label: "Website", icon: <WebIcon /> },
  { value: "mobile", label: "Mobile Application", icon: <PhoneIphoneIcon /> },
  {
    value: "desktop",
    label: "Desktop Application",
    icon: <DesktopWindowsIcon />,
  },
  { value: "ui_ux", label: "UI/UX Design", icon: <DesignServicesIcon /> },
];

const FormDataReceiver = () => {
  const navigate = useNavigate();

  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const currentTheme = useTheme();
  const isMobile = useMediaQuery(currentTheme.breakpoints.down("sm"));

  // Dialog states
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [commentDialogOpen, setCommentDialogOpen] = useState(false);
  const [approveDialogOpen, setApproveDialogOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [comment, setComment] = useState("");

  // Action menu
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentSubmissionId, setCurrentSubmissionId] = useState(null);

  // Load submissions from localStorage or use initial mock data
  useEffect(() => {
    setTimeout(() => {
      try {
        // Try to get submissions from localStorage first
        const storedSubmissions = JSON.parse(
          localStorage.getItem("projectSubmissions") || "[]"
        );

        // If no submissions in localStorage, use mock data
        if (storedSubmissions.length === 0) {
          const mockData = [
            {
              id: "1",
              timestamp: new Date().toISOString(),
              status: "new",
              fullName: "John Smith",
              email: "john.smith@example.com",
              phoneNumber: "+1 (123) 456-7890",
              serviceType: "website",
              projectDescription:
                "I need a modern e-commerce website for my retail business with inventory management, payment processing, and a responsive design.",
              budget: "$5,000 - $10,000",
              timeframe: "3 months",
              comments: [],
            },
            {
              id: "2",
              timestamp: new Date(Date.now() - 86400000).toISOString(),
              status: "processing",
              fullName: "Sarah Johnson",
              email: "sarah.johnson@example.com",
              phoneNumber: "+1 (987) 654-3210",
              serviceType: "mobile",
              projectDescription:
                "We need a mobile app for both iOS and Android that will allow our customers to book appointments and receive notifications.",
              budget: "$8,000 - $15,000",
              timeframe: "4 months",
              comments: [
                "Initial review completed. Need to discuss technical requirements.",
              ],
            },
            {
              id: "3",
              timestamp: new Date(Date.now() - 172800000).toISOString(),
              status: "reviewed",
              fullName: "Michael Chen",
              email: "michael.chen@example.com",
              phoneNumber: "+1 (555) 123-4567",
              serviceType: "ui_ux",
              projectDescription:
                "Looking for a complete redesign of our existing web application to improve user experience and modernize the interface.",
              budget: "$3,000 - $7,000",
              timeframe: "2 months",
              comments: [
                "Design proposal sent to client",
                "Waiting for feedback on initial mockups",
              ],
            },
          ];

          // Save mock data to localStorage
          localStorage.setItem("projectSubmissions", JSON.stringify(mockData));
          setSubmissions(mockData);
        } else {
          setSubmissions(storedSubmissions);
        }

        setLoading(false);
      } catch (err) {
        setError("Error loading submissions: " + err.message);
        setLoading(false);
      }
    }, 1000);
  }, []);

  // Update localStorage whenever submissions change
  useEffect(() => {
    if (!loading && submissions.length > 0) {
      localStorage.setItem("projectSubmissions", JSON.stringify(submissions));
    }
  }, [submissions, loading]);

  // Format date
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Get status chip
  const getStatusChip = (status) => {
    switch (status) {
      case "new":
        return (
          <Chip
            icon={<CheckCircleOutlineIcon />}
            label="New Submission"
            color="success"
          />
        );
      case "processing":
        return (
          <Chip icon={<AccessTimeIcon />} label="Processing" color="primary" />
        );
      case "reviewed":
        return (
          <Chip
            icon={<CheckCircleOutlineIcon />}
            label="Reviewed"
            color="secondary"
          />
        );
      case "approved":
        return (
          <Chip
            icon={<ThumbUpIcon />}
            label="Approved"
            sx={{ bgcolor: "#4caf50", color: "white" }}
          />
        );
      default:
        return <Chip label="Unknown Status" />;
    }
  };

  // Open action menu
  const handleMenuOpen = (event, submissionId) => {
    setAnchorEl(event.currentTarget);
    setCurrentSubmissionId(submissionId);
  };

  // Close action menu
  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentSubmissionId(null);
  };

  // Handle edit
  const handleEditOpen = (submission) => {
    setSelectedSubmission(submission);
    setEditFormData({ ...submission });
    setEditDialogOpen(true);
    handleMenuClose();
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  const handleEditSave = () => {
    const updatedSubmissions = submissions.map((sub) =>
      sub.id === editFormData.id ? { ...editFormData } : sub
    );
    setSubmissions(updatedSubmissions);
    setEditDialogOpen(false);
  };

  // Handle delete
  const handleDeleteOpen = (submission) => {
    setSelectedSubmission(submission);
    setDeleteDialogOpen(true);
    handleMenuClose();
  };

  const handleDeleteConfirm = () => {
    const updatedSubmissions = submissions.filter(
      (sub) => sub.id !== selectedSubmission.id
    );
    setSubmissions(updatedSubmissions);
    setDeleteDialogOpen(false);
  };

  // Handle comment
  const handleCommentOpen = (submission) => {
    setSelectedSubmission(submission);
    setComment("");
    setCommentDialogOpen(true);
    handleMenuClose();
  };

  const handleCommentSave = () => {
    if (comment.trim()) {
      const updatedSubmissions = submissions.map((sub) => {
        if (sub.id === selectedSubmission.id) {
          const comments = sub.comments || [];
          return {
            ...sub,
            comments: [...comments, comment.trim()],
            status: sub.status === "new" ? "processing" : sub.status,
          };
        }
        return sub;
      });
      setSubmissions(updatedSubmissions);
    }
    setCommentDialogOpen(false);
  };

  // Handle approve
  const handleApproveOpen = (submission) => {
    setSelectedSubmission(submission);
    setApproveDialogOpen(true);
    handleMenuClose();
  };

  const handleApproveConfirm = () => {
    const updatedSubmissions = submissions.map((sub) => {
      if (sub.id === selectedSubmission.id) {
        return { ...sub, status: "approved" };
      }
      return sub;
    });
    setSubmissions(updatedSubmissions);
    setApproveDialogOpen(false);
  };

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%", mt: 15 }}>
          <Container>
            <Typography variant="h5" align="center" gutterBottom>
              Loading Form Submissions...
            </Typography>
            <LinearProgress />
          </Container>
        </Box>
      </ThemeProvider>
    );
  }

  if (error) {
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%", mt: 15 }}>
          <Container>
            <Alert severity="error">{error}</Alert>
          </Container>
        </Box>
      </ThemeProvider>
    );
  }

  const handleClick = () => {
    navigate("/HomePreview");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
        <Box sx={{ pb: 15 }}>
          <Nav />
        </Box>

        <Box sx={{ padding: 2, textAlign: "center" }}>
          <button onClick={() => navigate("/HomePreview")}>
            عرض عدد الزوار
          </button>
        </Box>

        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2, sm: 4 },
                mb: 4,
                borderRadius: 3,
                background: "linear-gradient(120deg, #3f51b5 0%, #5c6bc0 100%)",
                color: "white",
              }}
            >
              <Typography variant="h3" align="center" gutterBottom>
                Project Inquiry Dashboard
              </Typography>
              <Typography variant="h6" align="center">
                View and manage submitted project inquiries
              </Typography>
            </Paper>

            <Box sx={{ mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Card>
                      <CardContent sx={{ textAlign: "center", p: 3 }}>
                        <Typography variant="h4" color="primary" gutterBottom>
                          {submissions.length}
                        </Typography>
                        <Typography variant="h6">Total Submissions</Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={3}>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Card>
                      <CardContent sx={{ textAlign: "center", p: 3 }}>
                        <Typography
                          variant="h4"
                          color="success.main"
                          gutterBottom
                        >
                          {submissions.filter((s) => s.status === "new").length}
                        </Typography>
                        <Typography variant="h6">New Submissions</Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={3}>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Card>
                      <CardContent sx={{ textAlign: "center", p: 3 }}>
                        <Typography
                          variant="h4"
                          color="primary.main"
                          gutterBottom
                        >
                          {
                            submissions.filter(
                              (s) =>
                                s.status === "processing" ||
                                s.status === "reviewed"
                            ).length
                          }
                        </Typography>
                        <Typography variant="h6">In Progress</Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={3}>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Card>
                      <CardContent sx={{ textAlign: "center", p: 3 }}>
                        <Typography
                          variant="h4"
                          color="success.main"
                          gutterBottom
                        >
                          {
                            submissions.filter((s) => s.status === "approved")
                              .length
                          }
                        </Typography>
                        <Typography variant="h6">Approved</Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              </Grid>
            </Box>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ mb: 3, fontWeight: "bold" }}
            >
              Recent Submissions
            </Typography>

            {submissions.length === 0 ? (
              <Alert severity="info">No submissions found</Alert>
            ) : (
              <Grid container spacing={4}>
                {submissions.map((submission) => (
                  <Grid item xs={12} key={submission.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card elevation={2}>
                        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                          <Grid container spacing={3}>
                            <Grid item xs={12}>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: isMobile ? "column" : "row",
                                  justifyContent: "space-between",
                                  alignItems: isMobile
                                    ? "flex-start"
                                    : "center",
                                  mb: 2,
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: isMobile ? 2 : 0,
                                  }}
                                >
                                  <Typography
                                    variant={isMobile ? "h6" : "h5"}
                                    component="h2"
                                    sx={{ mr: 2 }}
                                  >
                                    Submission #{submission.id}
                                  </Typography>
                                  {getStatusChip(submission.status)}
                                </Box>
                                <Box
                                  sx={{ display: "flex", alignItems: "center" }}
                                >
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mr: 2 }}
                                  >
                                    {formatDate(submission.timestamp)}
                                  </Typography>
                                  <IconButton
                                    aria-label="more"
                                    aria-controls="submission-menu"
                                    aria-haspopup="true"
                                    onClick={(e) =>
                                      handleMenuOpen(e, submission.id)
                                    }
                                  >
                                    <MoreVertIcon />
                                  </IconButton>
                                </Box>
                              </Box>
                              <Divider sx={{ mb: 3 }} />
                            </Grid>

                            <Grid item xs={12} md={4}>
                              <Paper
                                elevation={0}
                                sx={{
                                  bgcolor: "background.default",
                                  p: 2,
                                  borderRadius: 2,
                                }}
                              >
                                <Typography
                                  variant="h6"
                                  gutterBottom
                                  color="primary"
                                >
                                  Client Information
                                </Typography>

                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 1.5,
                                  }}
                                >
                                  <AccountCircleIcon
                                    sx={{ mr: 1, color: "primary.main" }}
                                  />
                                  <Typography variant="body1">
                                    {submission.fullName}
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 1.5,
                                  }}
                                >
                                  <EmailIcon
                                    sx={{ mr: 1, color: "primary.main" }}
                                  />
                                  <Typography variant="body1">
                                    {submission.email}
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{ display: "flex", alignItems: "center" }}
                                >
                                  <PhoneIcon
                                    sx={{ mr: 1, color: "primary.main" }}
                                  />
                                  <Typography variant="body1">
                                    {submission.phoneNumber}
                                  </Typography>
                                </Box>
                              </Paper>
                            </Grid>

                            <Grid item xs={12} md={8}>
                              <Paper
                                elevation={0}
                                sx={{
                                  bgcolor: "background.default",
                                  p: 2,
                                  borderRadius: 2,
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 2,
                                  }}
                                >
                                  <Box sx={{ mr: 2 }}>
                                    {getServiceIcon(submission.serviceType)}
                                  </Box>
                                  <Box>
                                    <Typography
                                      variant="h6"
                                      color="primary"
                                      gutterBottom
                                    >
                                      {getServiceLabel(submission.serviceType)}
                                    </Typography>
                                    <Box
                                      sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 2,
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <AttachMoneyIcon
                                          fontSize="small"
                                          sx={{
                                            mr: 0.5,
                                            color: "success.main",
                                          }}
                                        />
                                        <Typography variant="body2">
                                          {submission.budget}
                                        </Typography>
                                      </Box>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <CalendarTodayIcon
                                          fontSize="small"
                                          sx={{
                                            mr: 0.5,
                                            color: "primary.main",
                                          }}
                                        />
                                        <Typography variant="body2">
                                          {submission.timeframe}
                                        </Typography>
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>

                                <Divider sx={{ mb: 2 }} />

                                <Box>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "flex-start",
                                      mb: 1,
                                    }}
                                  >
                                    <DescriptionIcon
                                      sx={{
                                        mr: 1,
                                        mt: 0.5,
                                        color: "secondary.main",
                                      }}
                                    />
                                    <Typography
                                      variant="subtitle1"
                                      fontWeight="bold"
                                    >
                                      Project Description
                                    </Typography>
                                  </Box>
                                  <Typography variant="body1" paragraph>
                                    {submission.projectDescription}
                                  </Typography>
                                </Box>
                              </Paper>
                            </Grid>

                            {/* Comments Section */}
                            {submission.comments &&
                              submission.comments.length > 0 && (
                                <Grid item xs={12}>
                                  <Paper
                                    elevation={0}
                                    sx={{
                                      bgcolor: "background.default",
                                      p: 2,
                                      borderRadius: 2,
                                    }}
                                  >
                                    <Typography
                                      variant="h6"
                                      gutterBottom
                                      color="primary"
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <CommentIcon sx={{ mr: 1 }} /> Comments
                                    </Typography>
                                    <Box sx={{ pl: 2 }}>
                                      {submission.comments.map(
                                        (comment, index) => (
                                          <Box
                                            key={index}
                                            sx={{
                                              mb: 1,
                                              pb: 1,
                                              borderBottom:
                                                index <
                                                submission.comments.length - 1
                                                  ? "1px solid #eee"
                                                  : "none",
                                            }}
                                          >
                                            <Typography
                                              variant="body2"
                                              color="text.secondary"
                                              sx={{ mb: 0.5 }}
                                            >
                                              {new Date(
                                                submission.timestamp
                                              ).toLocaleString()}
                                            </Typography>
                                            <Typography variant="body1">
                                              {comment}
                                            </Typography>
                                          </Box>
                                        )
                                      )}
                                    </Box>
                                  </Paper>
                                </Grid>
                              )}
                          </Grid>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            )}
          </motion.div>
        </Container>
      </Box>

      {/* Action Menu */}
      <Menu
        id="submission-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem
          onClick={() =>
            handleEditOpen(
              submissions.find((s) => s.id === currentSubmissionId)
            )
          }
        >
          <EditIcon fontSize="small" sx={{ mr: 1 }} /> Edit
        </MenuItem>
        <MenuItem
          onClick={() =>
            handleCommentOpen(
              submissions.find((s) => s.id === currentSubmissionId)
            )
          }
        >
          <CommentIcon fontSize="small" sx={{ mr: 1 }} /> Add Comment
        </MenuItem>
        <MenuItem
          onClick={() =>
            handleApproveOpen(
              submissions.find((s) => s.id === currentSubmissionId)
            )
          }
        >
          <ThumbUpIcon fontSize="small" sx={{ mr: 1 }} /> Approve
        </MenuItem>
        <MenuItem
          onClick={() =>
            handleDeleteOpen(
              submissions.find((s) => s.id === currentSubmissionId)
            )
          }
        >
          <DeleteIcon fontSize="small" sx={{ mr: 1 }} color="error" /> Delete
        </MenuItem>
      </Menu>

      {/* Edit Dialog */}
      <Dialog
        open={editDialogOpen}
        onClose={() => setEditDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Edit Submission</DialogTitle>
        <DialogContent>
          <Grid container spacing={3} sx={{ mt: 0.5 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={editFormData.fullName || ""}
                onChange={handleEditChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={editFormData.email || ""}
                onChange={handleEditChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                value={editFormData.phoneNumber || ""}
                onChange={handleEditChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                label="Service Type"
                name="serviceType"
                value={editFormData.serviceType || ""}
                onChange={handleEditChange}
                margin="normal"
              >
                {serviceTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {option.icon}
                      <Box sx={{ ml: 1 }}>{option.label}</Box>
                    </Box>
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Project Description"
                name="projectDescription"
                multiline
                rows={4}
                value={editFormData.projectDescription || ""}
                onChange={handleEditChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Budget"
                name="budget"
                value={editFormData.budget || ""}
                onChange={handleEditChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Timeframe"
                name="timeframe"
                value={editFormData.timeframe || ""}
                onChange={handleEditChange}
                margin="normal"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleEditSave} variant="contained" color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Delete Submission</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this submission? This action cannot
            be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button
            onClick={handleDeleteConfirm}
            color="error"
            variant="contained"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Comment Dialog */}
      <Dialog
        open={commentDialogOpen}
        onClose={() => setCommentDialogOpen(false)}
      >
        <DialogTitle>Add Comment</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Comment"
            fullWidth
            multiline
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCommentDialogOpen(false)}>Cancel</Button>
          <Button
            onClick={handleCommentSave}
            color="primary"
            variant="contained"
          >
            Add Comment
          </Button>
        </DialogActions>
      </Dialog>

      {/* Approve Dialog */}
      <Dialog
        open={approveDialogOpen}
        onClose={() => setApproveDialogOpen(false)}
      >
        <DialogTitle>Approve Submission</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to approve this project submission? This will
            change its status to "Approved".
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setApproveDialogOpen(false)}>Cancel</Button>
          <Button
            onClick={handleApproveConfirm}
            color="success"
            variant="contained"
          >
            Approve
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default FormDataReceiver;
