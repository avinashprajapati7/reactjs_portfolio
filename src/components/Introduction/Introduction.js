import React from 'react';

import Typewriter from 'typewriter-effect';
import { Box, Button, Typography } from '@mui/material';

import { constants } from '../../constants/index.constants';
import IntroBackground from '../Layout/IntroBackground';
import SelfImg from '../../assets/images/self-img.jpg';

const Introduction = () => {
  return (
    <Box id='about'>
      <Box
        sx={{
          background: 'rgb(25, 25, 36)',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          padding: { xs: '32px 16px', sm: '66px 16px', md: '80px 30px' },
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            justifyContent: { sm: 'center', md: 'end' },
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            maxWidth: '1360px',
            overflow: 'hidden',
            padding: { xs: 0, sm: 0, md: '0 30px' },
            top: '50%',
            left: '50%',
            'WebkitTransform': 'translateX(-50%) translateY(-50%)',
            transform: 'translateX(-50%) translateY(-50%)',
          }}
        >
          <IntroBackground />
        </Box>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1100px',
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <Box
            sx={{
              flex: 1,
              order: { xs: 1, sm: 1, md: 1 },
              mt: { xs: '30px', sm: '30px' },
              mb: { xs: '30px', sm: '30px' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: '40px', sm: '50px', md: '50px' },
                color: 'white',
                lineHeight: { xs: '48px', sm: '68px', md: '68px' },
                textAlign: 'center',
                mb: { xs: '8px' },
              }}
            >
              Hi, I am <br /> {constants.intro.name}
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: '22px', sm: '32px', md: '32px' },
                display: 'flex',
                gap: '12px',
                color: 'white',
                lineHeight: { xs: '48px', sm: '68px', md: '68px' },
                textAlign: 'center',
                mb: { xs: '16px' },
              }}
            >
              I am a
              <span style={{ color: 'white', cursor: 'pointer' }}>
                <Typewriter
                  options={{
                    strings: constants.intro.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </Typography>
            <Typography sx={{ color: 'grey' }}>
              {constants.intro.description}
            </Typography>
            <Button
              target='display'
              href='https://drive.google.com/file/d/1As7IF9tb55MdbHBEX8wcbmhlO1hdp9zO/view?usp=drive_link
'
              variant='contained'
              sx={{
                mt: 2,
                backgroundColor: '#B2B5E0',
                color: 'black',
                borderRadius: '20px',
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#0A1828',
                },
              }}
            >
              Check Resume
            </Button>
          </Box>

          <Box
            id='Right'
            sx={{
              flex: 1, // Set flex to 1 to take up equal width
              display: 'flex',
              gap: '12px',
              order: { sm: 2, md: 2 }, // Update the order for side-by-side display
              justifyContent: { xs: 'center', sm: 'flex-end', md: 'flex-end' }, // Adjust alignment for 'xs' breakpoint
              alignItems: 'center',
              mt: '40px',
              mb: { xs: '30px', sm: '80px' },
            }}
          >
            <Box
              component='img'
              src={SelfImg}
              alt='selfImg'
              sx={{
                position: 'relative',
                mt: { xs: '40px', sm: '20px', md: 0 },
                width: { xs: '60%', sm: '60%', md: '100%' },
                maxWidth: { xs: '280px', sm: '400px', md: '400px' },
                maHeight: { xs: '280px', sm: '400px', md: '400px' },
                borderRadius: '50%',
                border: '2px solid white',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Introduction;
