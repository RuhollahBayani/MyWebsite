import React from "react";
//import AppBar from "@mui/material/AppBar";
//import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import StarIcon from '@mui/icons-material/StarBorder';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';


function PricingScreen (){
  const tiers = [
    {
      title: 'Portrait Retouch',
      price: '10',
      description: [
        'Close up photo, from waist up(Headshots)',
      ],
      buttonText: 'Get started',
      buttonVariant: 'contained',
    },
    {
      title: 'Full Body Retouch',
      subheader: 'Most popular',
      price: '15',
      description: [
        'Full body photo and background, from head to toe',],
      buttonText: 'Get started',
      buttonVariant: 'contained',
    },
    {
      title: 'Photo Montage',
      price: '30',
      description: [
        'Full Photo manipulation, including background and special effects',
        'Includes 2 revisions',
      ],
      buttonText: 'Contact us',
      buttonVariant: 'contained',
    },
  ];
  return(
    <React.Fragment>
      <Box sx={{ bgcolor: 'black', minHeight: "100vh", width: "100%"}}>
            {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6, }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="white"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="White" component="p">
          Choose a plan that works for you.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /Per Photo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}
                    sx={{
                      backgroundColor: 'black', // Custom background color
                      color: 'white', // Text color
                      '&:hover': {
                        backgroundColor: '#9e9e9e', // Hover color
                      },
                    }}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      {/* End footer */}
      </Box>
    </React.Fragment>
  );
}

export default PricingScreen