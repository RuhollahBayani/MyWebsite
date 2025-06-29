import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Link} from 'react-router-dom';
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import FeaturedPost from './FeaturedPost';


function HomeScreen() {
 
   const featuredPosts = [
        {
          title: 'Photo montage',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: '/Media/dune.jpg',
          imageLabel: 'Image Text',
        },
        {
          title: 'Retouch',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: '/Media/Retouch.jpg',
          imageLabel: 'Image Text',
        },
      ];
  
    return (
        <>
        <Box
        sx={{
          bgcolor: "black",
          pt: 8,
          pb: 6,
        }}
         >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="white"
            gutterBottom
          >
            About me
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="white"
            paragraph
          >
            I am a photo editor and retoucher with a passion for creating stunning images. I have 3 years of exprience in the field and have worked with a variety of clients, from individuals to Production Companies such as the one I'm working in Maxa Studio. My goal is to help you achieve your vision and make your photos look their best.
            and bring your photo creativity into reality.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button 
            variant="contained" 
            component={Link}
            to="/contactme"
            sx={{
    backgroundColor: '#9e9e9e', // Custom background color
    color: 'white', // Text color
    '&:hover': {
      backgroundColor: 'white', // Hover color
    },
  }}>
    Contact me</Button>
            <Button 
            variant="outlined"
            component={Link}
            to="/portfolio" 
            sx={{
    backgroundColor: 'black', // Custom background color
    color: 'white', // Text color
    borderColor: 'white', // Custom border color
    '&:hover': {
      borderColor: 'white',
      backgroundColor: 'white', // Hover color
    },
  }} >My Portfolio</Button>
          </Stack>
        </Container>
      </Box>
      
      <Box
      sx={{
          //width: '100vw', // Full viewport width
          backgroundColor: 'black', // Background color for the whole section
          py: 6, // Vertical padding
          display: 'flex', // Flexbox for alignment
          justifyContent: 'center', // Center horizontally
          flexWrap: 'wrap', // Allow wrapping of items
          //mx: 'calc(-50vw + 50%)', // Remove parent's horizontal padding if inside a Container
        }}
        >
          {featuredPosts.map((post) => (
            <Box
              key={post.title}
              sx={{
                backgroundColor: 'white', // Background color for each post
                display: 'inline-block', // Inline block for the post
                padding: 2, // Add padding
                borderRadius: '8px', // Rounded corners
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
                mb: 2
              }}
            >
              <FeaturedPost key={post.title} post={post} />
            </Box>
          ))}
      </Box>
        
        </>
    );
}

export default HomeScreen;