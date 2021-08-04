import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Typography from '../../atoms/Typography/typography';
import { AccessTime, PersonOutline, MoreHoriz } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root:{},
    
  reads:{
    float: "right",
    marginRight: theme.spacing(1),
  },
  thumbnail: {
    textAlign: "left",
    marginLeft: theme.spacing(1),
    marginTop: "1rem"
  },
  image:{
    padding: theme.spacing(3),
    textAlign: "center",
    float: "center",
    width: "17.75rem",
    height: "11.75rem",
    background: "cadetblue"
  },
  more:{
    float: "right",
    marginRight: theme.spacing(-12),
    marginTop: theme.spacing(8)
  },
  img:{
    width:"10rem",
    height: "10rem"
  },
  
  time : {
    float : "left",
    marginLeft: theme.spacing(1),

  },
  author : {
    marginRight: theme.spacing(6),
    float: "left",
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  outline: {
    border: "1px solid black",
    borderRadius: theme.spacing(0.5),
    width: "20.7rem",
    height: "27rem",
    margin: "auto",
}

}));


const BookCardComponent = (props) => {
  
    const styles = useStyles();
    const { name, time, reads, imgSrc, alt, thumbnail } = props;
    return (
        <Box className={styles.outline}>        
          <Box className={styles.image}><img className={styles.img} src={imgSrc} alt={alt} /></Box>
          <Box className={styles.thumbnail}><Typography variant="header" children={thumbnail} /></Box>
          <Box className={styles.author}><Typography variant="title" children={name} /></Box>
          <Box className={styles.time}><AccessTime style={{marginBottom:-5}} /> {time} read</Box>
          <Box className={styles.reads}><PersonOutline  style={{marginBottom:-5}} /> {reads} reads</Box>
          <Box className={styles.more}> <MoreHoriz /></Box>
        </Box>
    );
    
  };

  BookCardComponent.propTypes = {
    name : PropTypes.string.isRequired,
    time : PropTypes.string.isRequired,
    reads : PropTypes.string.isRequired,
    thumbnail : PropTypes.string.isRequired,
    imgSrc : PropTypes.string,
    alt : PropTypes.string.isRequired

};

BookCardComponent.defaultProps = {};

export default BookCardComponent;

