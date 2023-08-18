import { Box, Typography } from '@mui/material';

function Contact() {
  return (
    <Box
      sx={{
        height: { xs: 'auto', md: '100vh' },
        padding: { xs: '4rem 1rem', md: '0rem 4rem' },
        display: 'flex',
        alignItems: 'center',
        maxHeight: '800px',
        width: '80%',
      }}
    >
      <Box>
        <img src="../Getintouch!.png" alt="" style={{ width: '50%' }} />
        <Typography
          sx={{
            fontFamily: 'Gelica-regular',
            fontSize: { xs: '1.4rem', md: '2rem' },
            // marginTop: '-3rem',
          }}
        >
          If we can help you with anything, please let us know.
        </Typography>
        <Box sx={{ marginTop: '2rem' }}>
          <Typography
            sx={{
              fontFamily: 'Gelica-regular',
              fontWeight: 900,
              fontSize: '1.2rem',
            }}
          >
            Mail us at:
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Gelica-regular',
              fontSize: '1.2rem',
            }}
          >
            contact@sunpop.com
          </Typography>
        </Box>
        <Box sx={{ marginTop: '2rem' }}>
          <Typography
            sx={{
              fontFamily: 'Gelica-regular',
              fontWeight: 900,
              fontSize: '1.2rem',
            }}
          >
            Visit us at:
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Gelica-regular',
              fontSize: '1.2rem',
            }}
          >
            Sunpop AB <br />
            Solskensgatan 12 <br /> 123 67 Solstaden <br /> Sverige
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
