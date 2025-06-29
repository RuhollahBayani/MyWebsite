import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import  {Box} from "@mui/material";

function Footer (){
    const footers = [
        {
          title: 'Menu',
          description: ['Register', 'Contact me'],
        },
        {
          title: 'Services',
          description: [
            'Retouching',
            'Photo montage'
          ],
        },
      ];

      function Copyright(props) {
        return (
          <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      };

    return(
      <Box
      component="footer"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        borderTop: (theme) => `1px solid white ${theme.palette.divider}`,
        mt: 0,
        py: [3, 6],
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
      }}
    >
        <Container
        maxWidth="md"
        component="footer"
        sx={{
          backgroundColor: 'black', // Set footer background to black
      color: 'white', // Set footer text color to white
          borderTop: (theme) => `1px solid white ${theme.palette.divider}`,
          mt: 0,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="white" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="inherit" sx={{ textDecoration: 'none' }}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5, color: 'white' }} />
      </Container>
      </Box>
    )
};

export default Footer