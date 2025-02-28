import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Divider,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  useTheme
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckCircleIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon,
  CalendarMonth as CalendarIcon,
  School as SchoolIcon,
  Code as CodeIcon,
  Business as BusinessIcon,
  Link as LinkIcon
} from '@mui/icons-material';

const Roadmap = () => {
  const theme = useTheme();
  const [currentTab, setCurrentTab] = useState(0);
  const [expandedQuarter, setExpandedQuarter] = useState('quarter1');

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedQuarter(isExpanded ? panel : false);
  };

  // Mock data for the roadmap
  const quarters = [
    {
      id: 'quarter1',
      title: 'Quarter 1: March – May 2025',
      progress: 35,
      goals: [
        { id: 1, text: 'Earn an AWS certification', category: 'Technical', completed: false },
        { id: 2, text: 'Deploy an ML model as a service', category: 'Technical', completed: false },
        { id: 3, text: 'Draft and submit a GSoC proposal', category: 'Entrepreneurial', completed: true },
        { id: 4, text: 'Develop a preliminary business one-pager', category: 'Entrepreneurial', completed: false },
        { id: 5, text: 'Update resume/LinkedIn with new achievements', category: 'Career', completed: true },
      ],
      weeks: [
        {
          id: 'week1',
          title: 'Week 1 (Mar 1–7)',
          tasks: [
            { id: 1, text: 'Begin AWS Solutions Architect course', category: 'Technical', completed: true },
            { id: 2, text: 'Refresh Python/ML skills with fast.ai lessons', category: 'Technical', completed: true },
            { id: 3, text: 'Identify 2–3 organizations for GSoC', category: 'Career', completed: true },
            { id: 4, text: 'Update resume with entrepreneurial keywords', category: 'Career', completed: true },
          ]
        },
        {
          id: 'week2',
          title: 'Week 2 (Mar 8–14)',
          tasks: [
            { id: 1, text: 'Outline GSoC proposal', category: 'Career', completed: true },
            { id: 2, text: 'Contact mentors on forums', category: 'Career', completed: false },
            { id: 3, text: 'Complete basic labs on EC2, S3, and VPC', category: 'Technical', completed: false },
          ]
        },
        {
          id: 'week3',
          title: 'Week 3 (Mar 15–21) *Spring Break*',
          tasks: [
            { id: 1, text: 'Take a full-length AWS practice exam', category: 'Technical', completed: false },
            { id: 2, text: 'Complete Kaggle Titanic challenge', category: 'Technical', completed: false },
            { id: 3, text: 'Draft a one-page business plan', category: 'Entrepreneurial', completed: false },
          ]
        },
      ]
    },
    {
      id: 'quarter2',
      title: 'Quarter 2: June – August 2025',
      progress: 0,
      goals: [
        { id: 1, text: 'Execute a full-scale project with ML, cloud, and containerization', category: 'Technical', completed: false },
        { id: 2, text: 'Build out startup vision with market research', category: 'Entrepreneurial', completed: false },
        { id: 3, text: 'Gain competitive experience through opportunities', category: 'Career', completed: false },
      ],
      weeks: [
        {
          id: 'week1',
          title: 'Week 1 (Jun 1–7)',
          tasks: [
            { id: 1, text: 'Start onboarding and setting goals', category: 'Career', completed: false },
            { id: 2, text: 'Select an alternate project if needed', category: 'Technical', completed: false },
            { id: 3, text: 'Refine startup one-pager and market research', category: 'Entrepreneurial', completed: false },
          ]
        },
      ]
    },
    {
      id: 'quarter3',
      title: 'Quarter 3: September – November 2025',
      progress: 0,
      goals: [
        { id: 1, text: 'Polish summer project(s) and integrate into portfolio', category: 'Technical', completed: false },
        { id: 2, text: 'Launch or submit YC application', category: 'Entrepreneurial', completed: false },
        { id: 3, text: 'Ramp up technical interview prep', category: 'Career', completed: false },
      ],
    },
    {
      id: 'quarter4',
      title: 'Quarter 4: December 2025',
      progress: 0,
      goals: [
        { id: 1, text: 'Complete fall semester and launch portfolio', category: 'Technical', completed: false },
        { id: 2, text: 'Document achievements', category: 'Entrepreneurial', completed: false },
        { id: 3, text: 'Prepare for early 2026 opportunities', category: 'Career', completed: false },
      ],
    },
  ];

  const resources = [
    { id: 1, title: 'AWS Certification Training', url: 'https://aws.amazon.com/training/', category: 'Technical' },
    { id: 2, title: 'fast.ai Course', url: 'https://course.fast.ai/', category: 'Technical' },
    { id: 3, title: 'Kaggle Competitions', url: 'https://www.kaggle.com/', category: 'Technical' },
    { id: 4, title: 'Kubernetes Basics', url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/', category: 'Technical' },
    { id: 5, title: 'Google Summer of Code', url: 'https://summerofcode.withgoogle.com/', category: 'Career' },
    { id: 6, title: 'YC Startup Library', url: 'https://www.ycombinator.com/library', category: 'Entrepreneurial' },
    { id: 7, title: 'GitHub Guides', url: 'https://guides.github.com/', category: 'Technical' },
  ];

  const alternativePaths = [
    { id: 1, title: 'Open-Source Fellowship', description: 'Contribute to a large open-source project (e.g., an Apache project)' },
    { id: 2, title: 'Personal MVP/Product', description: 'Develop your own startup idea into an MVP, aiming for early user validation' },
    { id: 3, title: 'Competitive Challenges', description: 'Participate in long-term competitions (e.g., Kaggle, Numerai, or security CTFs)' },
  ];

  const renderQuarterGoals = (goals) => (
    <List dense>
      {goals.map((goal) => (
        <ListItem key={goal.id}>
          <ListItemIcon sx={{ minWidth: 32 }}>
            {goal.completed ? 
              <CheckCircleIcon color="success" fontSize="small" /> : 
              <RadioButtonUncheckedIcon color="disabled" fontSize="small" />
            }
          </ListItemIcon>
          <ListItemText 
            primary={goal.text}
            secondary={
              <Chip 
                label={goal.category} 
                size="small" 
                color={
                  goal.category === 'Technical' ? 'primary' : 
                  goal.category === 'Entrepreneurial' ? 'secondary' : 'success'
                } 
                variant="outlined"
                sx={{ height: 20, fontSize: '0.7rem' }}
              />
            }
          />
        </ListItem>
      ))}
    </List>
  );

  const renderWeeklyTasks = (weeks) => (
    <Box sx={{ mt: 2 }}>
      {weeks && weeks.map((week) => (
        <Card 
          key={week.id} 
          elevation={0}
          sx={{ 
            mb: 2, 
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 2
          }}
        >
          <CardContent>
            <Typography variant="subtitle1" fontWeight="medium">
              {week.title}
            </Typography>
            <List dense>
              {week.tasks.map((task) => (
                <ListItem key={task.id}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    {task.completed ? 
                      <CheckCircleIcon color="success" fontSize="small" /> : 
                      <RadioButtonUncheckedIcon color="disabled" fontSize="small" />
                    }
                  </ListItemIcon>
                  <ListItemText 
                    primary={task.text}
                    secondary={
                      <Chip 
                        label={task.category} 
                        size="small" 
                        color={
                          task.category === 'Technical' ? 'primary' : 
                          task.category === 'Entrepreneurial' ? 'secondary' : 'success'
                        } 
                        variant="outlined"
                        sx={{ height: 20, fontSize: '0.7rem' }}
                      />
                    }
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  const renderResources = () => (
    <Grid container spacing={2}>
      {resources.map((resource) => (
        <Grid item xs={12} sm={6} md={4} key={resource.id}>
          <Card 
            elevation={0}
            sx={{ 
              height: '100%',
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2,
              transition: 'all 0.3s',
              '&:hover': {
                boxShadow: theme.shadows[3],
                transform: 'translateY(-4px)'
              }
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Chip 
                  label={resource.category} 
                  size="small" 
                  color={
                    resource.category === 'Technical' ? 'primary' : 
                    resource.category === 'Entrepreneurial' ? 'secondary' : 'success'
                  } 
                  sx={{ mr: 1 }}
                />
                <LinkIcon fontSize="small" color="action" />
              </Box>
              <Typography variant="subtitle1" fontWeight="medium">
                {resource.title}
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary" 
                component="a" 
                href={resource.url} 
                target="_blank"
                sx={{ 
                  textDecoration: 'none',
                  color: theme.palette.primary.main,
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                Visit Resource
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  const renderAlternativePaths = () => (
    <Grid container spacing={2}>
      {alternativePaths.map((path) => (
        <Grid item xs={12} md={4} key={path.id}>
          <Card 
            elevation={0}
            sx={{ 
              height: '100%',
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2
            }}
          >
            <CardContent>
              <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                {path.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {path.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Your 10-Month Roadmap
      </Typography>
      
      <Tabs 
        value={currentTab} 
        onChange={handleTabChange} 
        sx={{ 
          mb: 3,
          borderBottom: 1, 
          borderColor: 'divider',
          '& .MuiTab-root': {
            minWidth: 120,
            fontWeight: 'medium'
          }
        }}
      >
        <Tab label="Quarterly Plan" />
        <Tab label="Resources" />
        <Tab label="Alternative Paths" />
      </Tabs>
      
      {currentTab === 0 && (
        <Box>
          {quarters.map((quarter) => (
            <Accordion 
              key={quarter.id}
              expanded={expandedQuarter === quarter.id}
              onChange={handleAccordionChange(quarter.id)}
              elevation={0}
              sx={{ 
                mb: 2, 
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                '&:before': { display: 'none' },
                '&.Mui-expanded': { margin: '0 0 16px 0' }
              }}
            >
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon />}
                sx={{ borderRadius: 2 }}
              >
                <Box sx={{ width: '100%' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="subtitle1" fontWeight="medium">
                      {quarter.title}
                    </Typography>
                    <Chip 
                      label={`${quarter.progress}%`} 
                      size="small" 
                      color="primary" 
                      variant="outlined"
                    />
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={quarter.progress} 
                    sx={{ mt: 1, height: 6, borderRadius: 3 }} 
                  />
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle2" fontWeight="medium" gutterBottom>
                  Quarter Goals
                </Typography>
                {renderQuarterGoals(quarter.goals)}
                
                {quarter.weeks && quarter.weeks.length > 0 && (
                  <>
                    <Typography variant="subtitle2" fontWeight="medium" sx={{ mt: 2 }} gutterBottom>
                      Weekly Breakdown
                    </Typography>
                    {renderWeeklyTasks(quarter.weeks)}
                  </>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      )}
      
      {currentTab === 1 && renderResources()}
      
      {currentTab === 2 && renderAlternativePaths()}
    </Box>
  );
};

export default Roadmap;