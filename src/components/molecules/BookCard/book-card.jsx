import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent,CardMedia, Typography,Grid } from '@material-ui/core';
import { AccessTime, PersonOutline, MoreHoriz } from '@material-ui/icons';
import baseTheme from '../../../themes/theme';


const useStyles = makeStyles((theme) => ({
  root:{
    maxWidth: 300
  },
  media: {
    padding: "50%"
  },

}));


const BookCardComponent = (props) => {
  
    const styles = useStyles();
    const { book, btnText } = props;
    return (
      <ThemeProvider theme = {baseTheme}>
        <Card className={styles.root} variant="outlined">
          <CardMedia
            className={styles.media}
            image={book.imgSrc}
            title={book.name}
            alt = {book.imgAlt}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1">
                {book.name}
            </Typography>
            <Typography variant="subtitle1">
          {book.author}
            </Typography>
            <br/>
            <Grid container justifyContent="space-between">
              <Grid item><AccessTime style={{marginTop: -5}} />{book.readTime}</Grid>
              <Grid item><PersonOutline style={{marginTop: -5}} />{book.readCount}</Grid>
            </Grid>

          </CardContent>
          <Grid container justifyContent="flex-end">
            <Grid item ><MoreHoriz /></Grid>
          </Grid>
        </Card>   
      </ThemeProvider>
      );
    
  };


export default BookCardComponent;

