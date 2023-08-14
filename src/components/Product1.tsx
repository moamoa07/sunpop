import { Box, Button, Typography } from '@mui/material';

function Product1() {
  return (
    <Box
      sx={{
        backgroundColor: '#E9FDED',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        maxHeight: '800px',
      }}
    >
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Box sx={{ zIndex: '2' }}>
          <img
            src="./src/assets/images/PLsoda.png"
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
            src="./src/assets/images/Peach&Lime.png"
            alt=""
            style={{ width: '30%' }}
          />
          <Typography
            sx={{
              width: '80%',
              marginTop: '1rem',
              fontFamily: 'arial',
              letterSpacing: 4,
            }}
          >
            Quench your thirst and indulge in the vibrant fusion of natural
            peach and zesty lime with every sip of our revitalizing soda.
            Crafted with care, this effervescent beverage not only tantalizes
            your taste buds but also elevates your senses, leaving you feeling
            rejuvenated and invigorated.
          </Typography>
          <Button
            variant="contained"
            disableElevation={true}
            sx={{
              backgroundColor: '#F58A62',
              borderRadius: '50rem',
              width: '25%',
              fontFamily: 'Gelica-regular',
              marginTop: '3rem',
              '&:hover': {
                backgroundColor: '#FFA180',
              },
            }}
          >
            Buy now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Product1;
