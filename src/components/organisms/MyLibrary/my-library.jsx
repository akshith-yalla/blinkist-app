import React from 'react';
import { useState, useEffect } from 'react';
import Button from '../../atoms/Button/button';
import { makeStyles, Grid } from '@material-ui/core';
import API from '../../../api';
import BookCard from '../../molecules/BookCard/book-card';

const useStyles = makeStyles((theme)=>({

    bookButton:{
        padding: theme.spacing(1),
        color: "white",
        backgroundColor : theme.palette.primary.main,
        cursor: "pointer"
      }
}));

const MyLibraryData = (props) => {
    const {bookStatus} = props;
    const styles = useStyles();
    const [bookState, setBookState] = useState('Currently Reading');
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [bookCardItems, setBookCardData] = useState([]);
    useEffect(() => {
        API.get('/myLibrary')
        .then(res =>res.data)
        .then(
            (result)=>{
            setIsLoaded(true);
            setBookCardData(result);
        },
        (error)=>{
            setIsLoaded(true);
            setError(error);
        }
        );
    }, []);
    const onStatusChange = () => {
        bookState === 'Currently Reading' ? setBookState('Finished Reading') : setBookState('Currently Reading') ; 
    };
    
        return (
                <>
                    {bookCardItems.map(bookCardItem =>(
                            <Grid key={bookCardItem.id} item xs={12} md={4}>
                                <BookCard  book={bookCardItem} bookButton={<Button key={bookCardItem.id} className={styles.bookButton} onClick={onStatusChange} title={bookState} />}  />
                            </Grid>
                    ))}                    
                </>
        );
};

export default MyLibraryData;