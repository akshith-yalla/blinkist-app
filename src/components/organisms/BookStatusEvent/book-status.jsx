import React from 'react';
import { useState } from 'react';
import Button from '../../atoms/Button/button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({

    bookButton:{
        float: "left",
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        borderRadius: theme.spacing(1),
        padding: theme.spacing(1),
        background: "cadetblue",
        cursor: "pointer"
      }
}));

const BookStatusEvent = () => {

    const styles = useStyles();
    const [bookState, setBookState] = useState('Currently Reading');
    const onStatusChange = () => {
        bookState === 'Currently Reading' ? setBookState('Finished Reading') : setBookState('Currently Reading') ; 
    };
    
        return (<Box className={styles.bookButton}><Button onClick={onStatusChange} title={bookState} /></Box>);
};

export default BookStatusEvent;


