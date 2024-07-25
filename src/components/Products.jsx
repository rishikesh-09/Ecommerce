import React from 'react'
import { Grid,Card,CardContent,Typography } from '@mui/material';
import Container from '@mui/material/Container';
import data from '../data';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions'; 
import Button from '@mui/material/Button';

export default function Products() {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" style={{ marginTop: "50px" }}>
          Products List
        </Typography>
        <Grid container spacing={5} style={{ marginTop: "20px" }}>
          {data.map((result, index) => (
            <Grid item xs={12} sm={3} ms={4} key={index}>
              <Card
                sx={{ maxWidth: 345 }}
                style={{ padding: "10px", marginBottom: "30px" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={result.image}
                    alt="img"
                    style={{ borderRadius: "5px" }}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {result.price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {result.description}
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
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
