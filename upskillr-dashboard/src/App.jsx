import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Button, Box } from '@mui/material';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Roadmap from './pages/Roadmap/Roadmap';
import TestComponent from './TestComponent';
import './App.css';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
      light: '#757de8',
      dark: '#002984',
    },
    secondary: {
      main: '#f50057',
      light: '#ff5983',
      dark: '#bb002f',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
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
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
  },
});

function App() {
  const [showTest, setShowTest] = useState(true);
  
  // Simple test component to check if basic rendering works
  if (showTest) {
    return (
      <Box sx={{ p: 3 }}>
        <TestComponent />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => setShowTest(false)}
          sx={{ mt: 2 }}
        >
          Show Full App
        </Button>
      </Box>
    );
  }
  
  // Original app with Layout and routing
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/achievements" element={<div>Achievements Page</div>} />
            <Route path="/resources" element={<div>Resources Page</div>} />
            <Route path="/settings" element={<div>Settings Page</div>} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
