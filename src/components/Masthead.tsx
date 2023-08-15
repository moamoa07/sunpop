import { Box } from '@mui/material';

function Masthead() {
  return (
    <Box
      sx={{
        height: { xs: 'auto', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: { xs: 'auto', md: '800px' },
      }}
    >
      <img
        src="/src/assets/images/testimage.png"
        alt=""
        style={{
          width: '100%',
          objectFit: 'cover',
          maxHeight: '100%',
        }}
      />
    </Box>
  );
}

export default Masthead;
