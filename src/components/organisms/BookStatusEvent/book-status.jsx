import React from 'react';
import { useState } from 'react';
import Button from '../../atoms/Button/button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({

    bookButton:{
        padding: theme.spacing(1),
        color: "white",
        backgroundColor : theme.palette.primary.main,
        cursor: "pointer"
      }
}));

const BookStatusEvent = (props) => {
    const {bookStatus} = props;
    const styles = useStyles();
    const [bookState, setBookState] = useState('Currently Reading');
    const onStatusChange = () => {
        bookState === 'Currently Reading' ? setBookState('Finished Reading') : setBookState('Currently Reading') ; 
    };
    
        return (<><Button className={styles.bookButton} onClick={onStatusChange} title={bookState} /></>);
};

export default BookStatusEvent;


