import { HashLink as Link } from 'react-router-hash-link';
import { Box, Button, IconButton, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const navItems = ['About', 'Skills', 'Contact'];

const Footer = () => {
  return (
    <Box
      id='footer'
      sx={{
        background: 'rgba(25, 25, 36, 0.7)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: '30px 0',
      }}
    >
      <Typography
        sx={{
          color: '#0A1828',
          fontWeight: 800,
          fontSize: '20px',
        }}
      >
        Avinash Prajapati
      </Typography>
      <Box>
        {navItems.map((item) => (
          <Button
            key={item}
            sx={{
              color: 'white',
              fontSize: '18px',
              '&:hover': {
                color: '#da54da',
                backgroundColor: 'transparent',
              },
            }}
          >
            <Link
              smooth
              to={`#${item.toLowerCase()}`}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              {item}
            </Link>
          </Button>
        ))}
      </Box>
      <Box>
        <IconButton
          target='_blank'
          sx={{
            '& .MuiSvgIcon-root': {
              fill: 'white',
              '&:hover': {
                fill: '#da54da',
              },
            },
          }}
          href='https://www.linkedin.com/in/avinash-prajapati7/'
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          target='_blank'
          sx={{
            '& .MuiSvgIcon-root': {
              fill: 'white',
              '&:hover': {
                fill: '#da54da',
              },
            },
          }}
          href='https://www.instagram.com/avinashprajapati7/?hl=en'
        >
          <InstagramIcon />
        </IconButton>
      </Box>
      <Typography
        sx={{ fontSize: '14px', color: 'white' }}
      >{`\u00A9 ${new Date().getFullYear()} Avinash Prajapati. All rights reserved.`}</Typography>
    </Box>
  );
};

export default Footer;
