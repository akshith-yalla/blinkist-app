import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent,CardMedia, CardActions,Grid } from '@material-ui/core';
import Typography from '../../atoms/Typography/typography';
import { AccessTime, PersonOutline, MoreHoriz } from '@material-ui/icons';
import Button from '../../atoms/Button/button';


const useStyles = makeStyles((theme) => ({
  root:{
    maxWidth: 325
  },
  media: {
    height: 0,
    padding: "50%"
  },

}));


const BookCardComponent = (props) => {
  
    const styles = useStyles();
    const { book, btnText } = props;
    return (
      <Card className={styles.root} variant="outlined">
        <CardMedia
          className={styles.media}
          image={book.imgSrc}
          title={book.name}
          alt = {book.imgAlt}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
              {book.name}
          </Typography>
          <Typography variant="subtitle">
         {book.author}
          </Typography>
          <br/>
          <Grid container justifyContent="space-between">
            <Grid item><AccessTime style={{marginTop: -5}} />{book.readTime}</Grid>
            <Grid item><PersonOutline style={{marginTop: -5}} />{book.readCount}</Grid>
          </Grid>

        </CardContent>
        <Grid container justifyContent="space-between">
          <CardActions>
            <Button variant="contained" color="primary" title={btnText} />
          </CardActions>
          <Grid item ><MoreHoriz /></Grid>
        </Grid>
      </Card>   
      );
    
  };


export default BookCardComponent;

