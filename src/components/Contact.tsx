import { Box, Typography } from '@mui/material';

function Contact() {
  return (
    <Box
      sx={{
        height: '100vh',
        // padding: '3rem',
        // margin: '0 3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: 'Gelica-black',
            fontSize: '8rem',
          }}
        >
          Get in touch
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Gelica-regular',
            fontSize: '2rem',
            marginTop: '-3rem',
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
