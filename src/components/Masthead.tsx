import { Box } from '@mui/material';

function Masthead() {
  return (
    <Box
      sx={{
        minHeight: `calc(100vh - 132.5px)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        src="/src/assets/images/testimage.png"
        alt=""
        style={{
          width: '80%',
          height: '80%',
          objectFit: 'cover',
        }}
      />
    </Box>
  );
}

export default Masthead;
