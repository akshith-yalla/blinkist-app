import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import API from '../../../api';
import BookCard from '../../molecules/BookCard';

const useStyles = makeStyles((theme)=>({

    bookButton:{
        padding: theme.spacing(1),
        color: "white",
        backgroundColor : theme.palette.primary.main,
        cursor: "pointer"
      },
    middleContainer:{
        maxWidth: "59rem",
        margin: "0 auto"
    }
}));

function ExploreByCategoryComponent() {
    const styles = useStyles();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [bookState, setBookState] = useState(false);
    const [bookCardItems, setBookCardData] = useState([]);
    const [currentTab, setCurrentTab] = useState('CR');
    const onchangeTab = () =>{
        currentTab === 'CR'? setCurrentTab('F'):setCurrentTab('CR');
    };
    const onStatusChange = (bookData) => {
        const data = bookData;
        const book_id = data.id;
        const bookStatus = data.status;
        bookStatus === 'CR'?data['status']='F':data['status']='CR';
        setBookState(!bookState);
        API.put(`/myLibrary/${book_id}`, data)
        .then(res => res.data)
        .then((result)=>{
            console.log(result,'Book status updated successfully');
        },
        (error)=>{
            console.log(error, "Error while updating");
        }
         );
};

    useEffect(() => {
        API.get('/explore')
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
    }, [bookState]);

    
        return (
                <>
                    <Grid container spacing={2}>
                        <Grid container item xs={12} spacing={4}>
                    {bookCardItems.filter((bookCardItem)=>{
                        return bookCardItem.status === `${currentTab}`;
                    })?.map(bookCardItem =>(
                            <Grid key={bookCardItem.id} item xs={12} md={4}>
                                <BookCard  book={bookCardItem} btnText={
                                            bookCardItem.status === "E"
                                            ? "Add to Library"
                                            : ""
                                        } bookStateChange={(bookData)=>{onStatusChange(bookData);}}
                                />
                            </Grid>
                    ))}
                    </Grid>
                    </Grid>                    
                </>
        );
};

export default ExploreByCategoryComponent;
