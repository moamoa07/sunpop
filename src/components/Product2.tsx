import { Box, Button, Typography } from '@mui/material';

function Product2() {
  return (
    <Box
      sx={{
        backgroundColor: '#FCF8C9',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        maxHeight: '800px',
      }}
    >
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Box>
          <img
            src="./src/assets/images/SLsoda.png"
            alt=""
            style={{ width: '100%' }}
          />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flex: 1 }}>
        {/* <Box>
          <img src="./src/assets/images/strawberry.png" alt="" />
        </Box> */}
        <Box
          sx={{
            flexDirection: 'column',
            // marginTop: '10%',
          }}
        >
          <img
            src="./src/assets/images/Strawberry&Lemon.png"
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
            Experience the perfect harmony of luscious strawberries and zingy
            lemons in every delightful sip of our soda. Crafted to tantalize
            your taste buds, this effervescent beverage offers a refreshing and
            invigorating experience.
          </Typography>
          <Button
            variant="contained"
            disableElevation={true}
            sx={{
              backgroundColor: '#E82736',
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

export default Product2;
