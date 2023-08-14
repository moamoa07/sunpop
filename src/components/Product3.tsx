import { Box, Button, Typography } from '@mui/material';

function Product3() {
  return (
    <Box
      sx={{
        backgroundColor: '#FDE9EA',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        maxHeight: '800px',
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
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Box
          sx={{
            flexDirection: 'column',
            // marginTop: '10%',
          }}
        >
          <img
            src="./src/assets/images/Passionfruit&Pineapple.png"
            alt=""
            style={{ width: '50%' }}
          />
          <Typography
            sx={{
              width: '80%',
              marginTop: '1rem',
              fontFamily: 'arial',
              letterSpacing: 4,
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
