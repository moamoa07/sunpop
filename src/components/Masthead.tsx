import { Box } from '@mui/material';

function Masthead() {
  return (
    <Box
      sx={{
        height: `100vh`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: '1000px',
        // backgroundImage: 'url(./src/asssets/images/testimage.png)',
      }}
    >
      <img
        src="/src/assets/images/testimage.png"
        alt=""
        style={{
          width: '100%',
          // height: '100%',
          objectFit: 'cover',
        }}
      />
    </Box>
  );
}

export default Masthead;
