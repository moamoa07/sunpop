import { Box, Button, Typography } from '@mui/material';

function Product1() {
  return (
    <Box
      sx={{
        backgroundColor: '#E9FDED',
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
            src="./src/assets/images/PLsoda.png"
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
            src="./src/assets/images/Peach&Lime.png"
            alt=""
            style={{ width: '30%' }}
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

export default Product1;
