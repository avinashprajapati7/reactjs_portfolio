import { Box, Card, Grid, Typography } from '@mui/material';

import HTMLIcon from '../../assets/images/html.svg';
import CSSIcon from '../../assets/images/css.svg';
import JSIcon from '../../assets/images/javascript.svg';
import TSIcon from '../../assets/images/typescript.svg';
import ReactIcon from '../../assets/images/reactjs.svg';
import ReduxIcon from '../../assets/images/redux.svg';
import MUIIcon from '../../assets/images/mui.svg';

const svgIcons = {
  html: {
    icon: HTMLIcon,
    title: 'HTML',
  },
  css: {
    icon: CSSIcon,
    title: 'CSS',
  },
  js: {
    icon: JSIcon,
    title: 'Javascript',
  },
  ts: {
    icon: TSIcon,
    title: 'Typescript'
  },
  react: {
    icon: ReactIcon,
    title: 'React',
  },
  redux: {
    icon: ReduxIcon,
    title: 'Redux',
  },
  mui: {
    icon: MUIIcon,
    title: 'Material UI',
  },
};

const Skills = () => {
  return (
    <Box
      id='skills'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: '30px 0',
        background:
          'linear-gradient(-45deg, rgb(25, 25, 36), rgba(25, 25, 36, 0.7))',
      }}
    >
      <Typography
        sx={{ mb: 2, fontSize: '40px', fontWeight: 600, color: '#0A1828' }}
      >
        Skills
      </Typography>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 1 }}
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          {Object.keys(svgIcons).map((key) => (
            <Grid
              key={key}
              item
              xs={6}
              sm={4}
              md={3}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                  m: '6px',
                  p: '20px',
                  height: '160px',
                  borderRadius: '20px',
                  border: '1px solid rgba(25, 25, 36, 0.3)',
                  transition: 'transform 0.15s ease-in-out',
                  '&:hover': { transform: 'scale3d(1.10 , 1.10, 1)' },
                }}
              >
                <img
                  src={svgIcons[key].icon}
                  alt={svgIcons[key].title}
                  style={{
                    width: '100px',
                    marginTop: '24px',
                    marginBottom: '10px',
                  }}
                />
                <Typography variant='subtitle1' sx={{ color: 'white' }}>
                  {svgIcons[key].title}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
