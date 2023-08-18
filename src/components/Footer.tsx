import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from '@mui/material';

function Footer() {
  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <img src="../Subtract.png" alt="" style={{ width: '100%' }} />
      </Box>
      <Box
        sx={{
          backgroundColor: '#E9FDED',
          padding: '0 1rem',
          paddingBottom: '2rem',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={6}>
            <List>
              <ListItem>
                <img src="../logo.png" alt="" style={{ width: '7rem' }} />
              </ListItem>
              <ListItem>
                <Typography
                  sx={{
                    fontFamily: 'arial',
                    letterSpacing: 3,
                    fontSize: '0.9rem',
                  }}
                >
                  In the heart of our soda's evolution, we aimed to blend
                  health-consciousness with irresistible flavors. Our vision was
                  to offer a companion for diverse moments – a refreshing break
                  after a long day or the perfect complement to a dinner
                  gathering. Sunpop: your versatile, sophisticated choice for
                  any occasion.
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <List>
              <ListItem>
                <Typography
                  sx={{
                    fontFamily: 'Gelica-regular',
                    fontWeight: '800',
                    fontSize: '1.2rem',
                  }}
                >
                  Products
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  sx={{
                    fontFamily: 'arial',
                    letterSpacing: 2,
                  }}
                >
                  Peach & Lime Soda
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  sx={{
                    fontFamily: 'arial',
                    letterSpacing: 2,
                  }}
                >
                  Strawberry & Lemon Soda
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  sx={{
                    fontFamily: 'arial',
                    letterSpacing: 2,
                  }}
                >
                  Passionfruit & Pineapple Soda
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <List>
              <ListItem>
                <Typography
                  sx={{
                    fontFamily: 'Gelica-regular',
                    fontWeight: '800',
                    fontSize: '1.2rem',
                  }}
                >
                  Contact
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <MailOutlineSharpIcon />
                </ListItemIcon>
                <Typography
                  sx={{
                    fontFamily: 'arial',
                    letterSpacing: 2,
                  }}
                >
                  contact@sunpop.com
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <HomeSharpIcon />
                </ListItemIcon>
                <Typography
                  sx={{
                    fontFamily: 'arial',
                    letterSpacing: 2,
                  }}
                >
                  Solskensgatan 12, 123 67 Solstaden, Sweden
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Footer;
