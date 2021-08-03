import React from 'react';
import Typography from '../../atoms/Typography/typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { AccessTimeIcon, PersonOutline, MoreHoriz } from '@material-ui/icons';
import { CardContent, CardMedia } from '@material-ui/core';
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
    root:{},
      
    reads:{
      float: "right",   
      marginRight: theme.spacing(1),
    },
    thumbnail: {
      textAlign: "left",
      marginLeft: theme.spacing(1)
    },
    image:{
      padding: theme.spacing(8),
      width: "16.75rem",
      height: "17.75rem",
      background: "cadetblue"
    },
    more:{
      float: "right",
      marginRight: theme.spacing(-12),
      marginTop: theme.spacing(8)
    },
    
    time : {
      float : "left",
      marginLeft: theme.spacing(2),
  
    },
    author : {
      marginRight: theme.spacing(6),
      float: "left",
      marginBottom: theme.spacing(1),
      marginLeft: theme.spacing(2),
    },
  
  }));
  
  
  const BookCardComponent = (props) => {
    
      const styles = useStyles();
      const { name, time, reads, imgSrc, alt, thumbnail } = props;
      return (
        <Card className={styles.root}>
            <CardMedia className={styles.image} image={imgSrc}  title={alt} />
            <CardContent className={styles.thumbnail}><Typography variant="header">{thumbnail}</Typography></CardContent>
            <CardContent className={styles.author}><Typography variant="title">{name}...</Typography></CardContent>
            <CardContent className={styles.time}><AccessTimeIcon style={{marginBottom:-5}} /> {time} read</CardContent>
            <CardContent className={styles.reads}><PersonOutline  style={{marginBottom:-5}} /> {reads} reads</CardContent>
            <CardContent className={styles.more}> <MoreHoriz /></CardContent>
        </Card>
      );
      
    };

BookCardComponent.propTypes = {
    name : PropTypes.string.isRequired,
    time : PropTypes.string.isRequired,
    reads : PropTypes.string.isRequired,
    thumbnail : PropTypes.string.isRequired,
    imgSrc : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
};

BookCardComponent.defaultProps = {};

export default BookCardComponent;