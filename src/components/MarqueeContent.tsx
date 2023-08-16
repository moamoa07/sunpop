import { Box, Typography } from '@mui/material';

interface Props {
  word: string;
}

function MarqueeContent(props: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        marginLeft: { xs: '1.4rem', md: '2.3rem', xl: '2.6rem' },
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Gelica-regular',
          fontSize: { xs: '1rem', md: '1.4rem' },
        }}
      >
        {props.word}
      </Typography>
      <Typography
        sx={{
          marginLeft: { xs: '1.4rem', md: '2.3rem', xl: '2.6rem' },
          fontFamily: 'Gelica-regular',
          fontSize: { xs: '1rem', md: '1.4rem' },
        }}
      >
        •
      </Typography>
    </Box>
  );
}

export default MarqueeContent;
