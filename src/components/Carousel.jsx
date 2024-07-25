import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import data from '../data';
import { Grid,Typography } from '@mui/material';
import Box from '@mui/material/Box';

const CarouselComponent = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true, 
            arrows: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
    return (
      <Box sx={{ width: "80%", margin: "0 auto", padding: 4 }}>
        <Slider {...settings}>
          {data.map((item) => (
            <Box key={item.id} sx={{ padding: 2 }}>
              <Grid item xs={12} key={item.id}>
                {/* <Card
                sx={{ maxWidth: 345 }}
                style={{ padding: "10px", marginBottom: "30px" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt="img"
                    style={{ borderRadius: "5px" }}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {item.price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button variant="outlined" href="#outlined-buttons">
                    Wishlist
                  </Button>
                  <Button variant="contained" href="#contained-buttons">
                    Buy Now
                  </Button>
                </CardActions>
              </Card> */}
              </Grid>
            </Box>
          ))}
        </Slider>
      </Box>
    );
  };
  
  export default CarouselComponent;