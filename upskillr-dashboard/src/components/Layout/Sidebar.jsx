import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Typography, 
  Box,
  Avatar,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  Dashboard as DashboardIcon, 
  CalendarMonth as CalendarIcon,
  EmojiEvents as AchievementsIcon,
  MenuBook as ResourcesIcon,
  Settings as SettingsIcon,
  Menu as MenuIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme, open, ismobile }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRight: 'none',
    ...(ismobile === 'true' && {
      top: 0,
      height: '100%',
    }),
  },
}));

const StyledListItem = styled(ListItem)(({ theme, active }) => ({
  margin: '8px 0',
  borderRadius: '8px',
  backgroundColor: active === 'true' ? theme.palette.primary.dark : 'transparent',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Roadmap', icon: <CalendarIcon />, path: '/roadmap' },
  { text: 'Achievements', icon: <AchievementsIcon />, path: '/achievements' },
  { text: 'Resources', icon: <ResourcesIcon />, path: '/resources' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
];

const Sidebar = ({ mobileOpen, onClose }) => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const drawer = (
    <>
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar 
          sx={{ 
            width: 80, 
            height: 80, 
            mb: 1, 
            bgcolor: theme.palette.secondary.main,
            border: `2px solid ${theme.palette.background.paper}`
          }}
        >
          U
        </Avatar>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Upskillr
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Your Learning Journey
        </Typography>
      </Box>
      
      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
      
      <List sx={{ p: 2 }}>
        {menuItems.map((item) => (
          <StyledListItem 
            button 
            component={Link} 
            to={item.path} 
            key={item.text}
            active={(location.pathname === item.path).toString()}
            onClick={isMobile ? onClose : undefined}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: '40px' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </StyledListItem>
        ))}
      </List>
      
      <Box sx={{ mt: 'auto', p: 2, textAlign: 'center' }}>
        <Typography variant="caption" sx={{ opacity: 0.7 }}>
          © 2025 Upskillr
        </Typography>
      </Box>
    </>
  );

  return (
    <StyledDrawer
      variant={isMobile ? "temporary" : "permanent"}
      open={isMobile ? mobileOpen : true}
      onClose={onClose}
      ismobile={isMobile.toString()}    
    >
      {isMobile && (
        <IconButton
          edge="start"
          color="inherit"
          onClick={onClose}
          sx={{ mr: 2, mt: 1, ml: 1 }}
        >
          <CloseIcon />
        </IconButton>
      )}
      {drawer}
    </StyledDrawer> 
  );
};

export default Sidebar;