import { Box, Button, Typography } from '@mui/material';

function Product3() {
  return (
    <Box
      sx={{
        backgroundColor: '#FDE9EA',
        height: { xs: 'auto', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        maxHeight: { xs: 'auto', md: '800px' },
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Box>
          <img
            src="./src/assets/images/PPsoda.png"
            alt=""
            style={{ width: '100%' }}
          />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flex: 1, margin: { xs: '2rem', md: 0 } }}>
        <Box
          sx={{
            flexDirection: 'column',
          }}
        >
          <img
            src="./src/assets/images/Passionfruit&Pineapple.png"
            alt=""
            style={{ width: '50%' }}
          />
          <Typography
            sx={{
              width: { xs: '100%', md: '80%' },
              marginTop: '1rem',
              fontFamily: 'arial',
              letterSpacing: 4,
              fontSize: { xs: '0.8rem', md: '1rem' },
            }}
          >
            Escape to a paradise of flavors with our soda's tropical blend of
            exotic passionfruit and juicy pineapple. Experience the irresistible
            sweetness and tangy goodness with every sip, as if you're savoring
            the essence of a sun-kissed island.
          </Typography>
          <Button
            variant="contained"
            disableElevation={true}
            sx={{
              backgroundColor: '#BC536C',
              borderRadius: '50rem',
              width: '25%',
              fontFamily: 'Gelica-regular',
              marginTop: '3rem',
              '&:hover': {
                backgroundColor: '#D697A6',
              },
              marginBottom: { xs: '1rem' },
            }}
          >
            Buy now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Product3;
