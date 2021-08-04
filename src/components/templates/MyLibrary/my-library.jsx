import React from 'react';
import Header from '../../molecules/Header/header';
import BookCard from '../../molecules/BookCard/book-card';
import BookStatusEvent from '../../organisms/BookStatusEvent/book-status';
import { makeStyles, Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
      },
    bookCard :{
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        padding: theme.spacing(8),
        textAlign: "center",
      }
    

}));

const MyLibraryComponent = (props)=>{
    const styles = useStyles();
    const {logo, logoAlt, title1, title2, title3, title4, name, time, reads, imgSrc, alt, thumbnail } = props;
    return(    
        <Box>
            <Box><Header logo = {logo} logoAlt={logoAlt} title1={title1} title2={title2} title3={title3} title4={title4} /></Box>
            <br />
            <div className={styles.root}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <BookCard name={name} time={time} reads={reads} imgSrc={imgSrc} alt={alt} thumbnail={thumbnail } />
                    </Grid>
                    <Grid item xs={4}>
                        <BookCard name={name} time={time} reads={reads} imgSrc={imgSrc} alt={alt} thumbnail={thumbnail } />
                    </Grid>
                    <Grid item xs={4}>
                        <BookCard name={name} time={time} reads={reads} imgSrc={imgSrc} alt={alt} thumbnail={thumbnail } />
                    </Grid>
                </Grid>
            </div>
        </Box>
    );

};

MyLibraryComponent.propTypes = {
    logo : PropTypes.string,
    logoAlt : PropTypes.string.isRequired,
    title1 : PropTypes.string.isRequired,
    title2 : PropTypes.string.isRequired,
    title3 : PropTypes.string.isRequired,
    title4 : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    time : PropTypes.string.isRequired,
    reads : PropTypes.string.isRequired,
    thumbnail : PropTypes.string.isRequired,
    imgSrc : PropTypes.string,
    alt : PropTypes.string.isRequired
};

MyLibraryComponent.defaultProps = {};

export default MyLibraryComponent;