import React from 'react';
import { 
  Box, 
  Grid, 
  Paper, 
  Typography, 
  Card, 
  CardContent, 
  LinearProgress,
  Chip,
  Button,
  useTheme
} from '@mui/material';
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent, 
  TimelineDot 
} from '@mui/lab';
import { 
  TrendingUp as TrendingUpIcon,
  EmojiEvents as AchievementsIcon,
  CalendarMonth as CalendarIcon,
  School as SchoolIcon,
  Code as CodeIcon,
  Business as BusinessIcon
} from '@mui/icons-material';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const theme = useTheme();
  
  // Mock data for the dashboard
  const overallProgress = 35; // percentage
  const currentQuarter = 'Quarter 1: March – May 2025';
  const daysRemaining = 45;
  
  const skillProgress = {
    technical: 40,
    entrepreneurial: 30,
    career: 25
  };
  
  const upcomingTasks = [
    { id: 1, title: 'AWS Practice Exam', dueDate: '2025-03-15', category: 'Technical', completed: false },
    { id: 2, title: 'GSoC Proposal Draft', dueDate: '2025-03-18', category: 'Career', completed: false },
    { id: 3, title: 'Business Plan Outline', dueDate: '2025-03-21', category: 'Entrepreneurial', completed: false },
  ];
  
  const recentAchievements = [
    { id: 1, title: 'Completed AWS Module 1', date: '2025-03-05', points: 50 },
    { id: 2, title: 'First Week Streak', date: '2025-03-07', points: 25 },
  ];
  
  // Chart data
  const chartData = {
    labels: ['Technical', 'Entrepreneurial', 'Career'],
    datasets: [
      {
        data: [skillProgress.technical, skillProgress.entrepreneurial, skillProgress.career],
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.secondary.main,
          theme.palette.success.main,
        ],
        borderWidth: 0,
      },
    ],
  };
  
  const chartOptions = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };
  
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Your Learning Journey
      </Typography>
      
      <Grid container spacing={3}>
        {/* Progress Overview */}
        <Grid item xs={12} md={4}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 3, 
              height: '100%', 
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'medium' }}>
              Overall Progress
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <Box sx={{ width: 180, height: 180 }}>
                <CircularProgressbar
                  value={overallProgress}
                  text={`${overallProgress}%`}
                  styles={buildStyles({
                    textSize: '16px',
                    pathColor: theme.palette.primary.main,
                    textColor: theme.palette.text.primary,
                    trailColor: theme.palette.divider,
                  })}
                />
              </Box>
            </Box>
            
            <Typography variant="body2" align="center" sx={{ mb: 2 }}>
              Current: <strong>{currentQuarter}</strong>
            </Typography>
            
            <Typography variant="body2" align="center" color="text.secondary">
              {daysRemaining} days remaining in this quarter
            </Typography>
          </Paper>
        </Grid>
        
        {/* Skill Breakdown */}
        <Grid item xs={12} md={4}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 3, 
              height: '100%', 
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'medium' }}>
              Skill Breakdown
            </Typography>
            
            <Box sx={{ height: 200, display: 'flex', justifyContent: 'center', mb: 2 }}>
              <Doughnut data={chartData} options={chartOptions} />
            </Box>
            
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box 
                    sx={{ 
                      width: 12, 
                      height: 12, 
                      borderRadius: '50%', 
                      bgcolor: theme.palette.primary.main,
                      mr: 1 
                    }} 
                  />
                  <Typography variant="body2">Technical</Typography>
                </Box>
                <Typography variant="body2" fontWeight="medium">{skillProgress.technical}%</Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box 
                    sx={{ 
                      width: 12, 
                      height: 12, 
                      borderRadius: '50%', 
                      bgcolor: theme.palette.secondary.main,
                      mr: 1 
                    }} 
                  />
                  <Typography variant="body2">Entrepreneurial</Typography>
                </Box>
                <Typography variant="body2" fontWeight="medium">{skillProgress.entrepreneurial}%</Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box 
                    sx={{ 
                      width: 12, 
                      height: 12, 
                      borderRadius: '50%', 
                      bgcolor: theme.palette.success.main,
                      mr: 1 
                    }} 
                  />
                  <Typography variant="body2">Career</Typography>
                </Box>
                <Typography variant="body2" fontWeight="medium">{skillProgress.career}%</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        
        {/* Quick Stats */}
        <Grid item xs={12} md={4}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 3, 
              height: '100%', 
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'medium' }}>
              Quick Stats
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Card 
                  elevation={0} 
                  sx={{ 
                    bgcolor: theme.palette.primary.light, 
                    color: theme.palette.primary.contrastText,
                    borderRadius: 2
                  }}
                >
                  <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                    <SchoolIcon />
                    <Typography variant="h5" sx={{ mt: 1, fontWeight: 'bold' }}>
                      3
                    </Typography>
                    <Typography variant="body2">
                      Courses
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={6}>
                <Card 
                  elevation={0} 
                  sx={{ 
                    bgcolor: theme.palette.secondary.light, 
                    color: theme.palette.secondary.contrastText,
                    borderRadius: 2
                  }}
                >
                  <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                    <AchievementsIcon />
                    <Typography variant="h5" sx={{ mt: 1, fontWeight: 'bold' }}>
                      2
                    </Typography>
                    <Typography variant="body2">
                      Achievements
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={6}>
                <Card 
                  elevation={0} 
                  sx={{ 
                    bgcolor: theme.palette.success.light, 
                    color: theme.palette.success.contrastText,
                    borderRadius: 2
                  }}
                >
                  <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                    <CodeIcon />
                    <Typography variant="h5" sx={{ mt: 1, fontWeight: 'bold' }}>
                      5
                    </Typography>
                    <Typography variant="body2">
                      Projects
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={6}>
                <Card 
                  elevation={0} 
                  sx={{ 
                    bgcolor: theme.palette.warning.light, 
                    color: theme.palette.warning.contrastText,
                    borderRadius: 2
                  }}
                >
                  <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                    <BusinessIcon />
                    <Typography variant="h5" sx={{ mt: 1, fontWeight: 'bold' }}>
                      1
                    </Typography>
                    <Typography variant="body2">
                      Business Plans
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        
        {/* Upcoming Tasks */}
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 3, 
              height: '100%', 
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                Upcoming Tasks
              </Typography>
              <Button size="small" color="primary">
                View All
              </Button>
            </Box>
            
            {upcomingTasks.map((task) => (
              <Card 
                key={task.id} 
                elevation={0} 
                sx={{ 
                  mb: 2, 
                  p: 2, 
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                      {task.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Due: {task.dueDate}
                    </Typography>
                  </Box>
                  <Chip 
                    label={task.category} 
                    size="small" 
                    color={
                      task.category === 'Technical' ? 'primary' : 
                      task.category === 'Entrepreneurial' ? 'secondary' : 'success'
                    } 
                    variant="outlined" 
                  />
                </Box>
              </Card>
            ))}
          </Paper>
        </Grid>
        
        {/* Recent Achievements */}
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 3, 
              height: '100%', 
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                Recent Achievements
              </Typography>
              <Button size="small" color="primary">
                View All
              </Button>
            </Box>
            
            <Timeline position="right" sx={{ p: 0, m: 0 }}>
              {recentAchievements.map((achievement) => (
                <TimelineItem key={achievement.id}>
                  <TimelineSeparator>
                    <TimelineDot color="secondary">
                      <AchievementsIcon fontSize="small" />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                      {achievement.title}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2" color="text.secondary">
                        {achievement.date}
                      </Typography>
                      <Chip 
                        label={`+${achievement.points} XP`} 
                        size="small" 
                        color="secondary" 
                        sx={{ fontWeight: 'bold' }} 
                      />
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              ))}
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <TrendingUpIcon fontSize="small" />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent />
              </TimelineItem>
            </Timeline>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};