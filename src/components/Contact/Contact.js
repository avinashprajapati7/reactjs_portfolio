import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import { Box, Card, Grid, Typography, Button } from '@mui/material';

import config from '../../configuration/index.config';
import ContactSVG from '../../assets/images/contact.png';

const ContactForm = () => {
  const formRef = useRef();

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (name.trim() === '') {
      setNameError(true);
      return;
    } else {
      setNameError(false);
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    if (message.trim() === '') {
      setMessageError(true);
      return;
    } else {
      setMessageError(false);
    }

    await emailjs
      .sendForm(
        config.emailjs.serviceID,
        config.emailjs.templateID,
        formRef.current,
        config.emailjs.emailjsPublicKey
      )
      .then(
        () => {
          alert('Your message has been sent!')

          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          alert('Oops! Something went wrong...')
        }
      );
  };

  return (
    <Box
      id='contact'
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
      <Typography sx={{ fontSize: '40px', fontWeight: 600, color: '#0A1828' }}>
        Contact
      </Typography>
      <Typography sx={{ fontSize: '14px', color: 'white' }}>
        GET IN TOUCH
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, sm: 2, md: 1 }}
        sx={{ display: 'flex', flexDirection: 'row' }}
      >
        <Grid item xs={24} sm={12} md={6}>
          <img style={{ width: '100%' }} src={ContactSVG} alt='contactUs' />
        </Grid>

        <Grid item xs={24} sm={12} md={6}>
          <Card
            sx={{
              backgroundColor: 'transparent',
              width: '90%',
              display: 'flex',
              mt: { xs: 0, sm: 14, md: 14 },
              m: { xs: 'auto' },
              boxShadow: '0 0 50px 15px rgba(23, 92, 230, 0.5)',
              borderRadius: '20px',
            }}
          >
            <form
              ref={formRef}
              onSubmit={sendEmail}
              style={{
                display: 'flex',
                flexDirection: 'column',
                margin: 'auto',
                width: '100%',
                p: '20px',
                backgroundColor: 'rgb(25, 25, 36)',
              }}
            >
              <input
                name='from_name'
                placeholder={`What's your name?`}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type='text'
                style={{
                  margin: '20px',
                  padding: '14px',
                  color: 'white',
                  border: '1px solid #B2B5E0',
                  borderRadius: '20px',
                  backgroundColor: 'transparent'
                }}
                onFocus={(event) => event.target.style.border = '2px solid white'}
                onBlur={(event) => event.target.style.border = '1px solid #B2B5E0'}
              />
              {nameError && (
                <Typography
                  sx={{
                    ml: '22px',
                    lineHeight: '0.5',
                    color: 'red',
                  }}
                >
                  Please enter your name.
                </Typography>
              )}
              <input
                name='from_email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type='text'
                style={{
                  margin: '20px',
                  padding: '14px',
                  color: 'white',
                  border: '1px solid #B2B5E0',
                  borderRadius: '20px',
                  backgroundColor: 'transparent',
                }}
                onFocus={(event) => { event.target.style.border = '2px solid white'; event.target.style.backgroundColor = 'transparent' }}
                onBlur={(event) => { event.target.style.border = '1px solid #B2B5E0'; event.target.style.backgroundColor = 'transparent' }}
              />
              {emailError && (
                <Typography
                  sx={{
                    ml: '22px',
                    lineHeight: '0.5',
                    color: 'red',
                  }}
                >
                  Please enter valid email.
                </Typography>
              )}
              <textarea
                name='message'
                placeholder={`What's your message?`}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                rows={8}
                style={{
                  margin: '20px',
                  padding: '14px',
                  color: 'white',
                  border: '1px solid #B2B5E0',
                  borderRadius: '20px',
                  backgroundColor: 'transparent',
                }}
                onFocus={(event) => { event.target.style.border = '2px solid white'; event.target.style.backgroundColor = 'transparent' }}
                onBlur={(event) => { event.target.style.border = '1px solid #B2B5E0'; event.target.style.backgroundColor = 'transparent' }}
              />
              {messageError && (
                <Typography
                  sx={{
                    mb: 2,
                    ml: '22px',
                    lineHeight: '0.5',
                    color: 'red',
                  }}
                >
                  Please enter your message.
                </Typography>
              )}
              <Button
                type='submit'
                variant='contained'
                sx={{
                  width: '60%',
                  m: 'auto',
                  mb: '20px',
                  backgroundColor: '#B2B5E0',
                  color: 'black',
                  borderRadius: '20px',
                  '&:hover': {
                    color: 'white',
                    backgroundColor: '#0A1828',
                  },
                }}
              >
                Send
              </Button>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
