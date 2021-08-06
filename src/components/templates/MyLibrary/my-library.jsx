import React from 'react';
import Header from '../../molecules/Header/header';
import BookCard from '../../molecules/BookCard/book-card';
import { makeStyles, Box, Grid, Paper, Container, Typography, ThemeProvider, Button, Card, CardContent } from '@material-ui/core';
import baseTheme from '../../../themes/theme';
import AddBook from '../../organisms/AddBook/add-book';
import Notification from '../../molecules/Notification/notification';

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
      },
    header: {
        marginBottom: '4rem'
    },
    paperTitle:{
        color: "red"
    },
    paperSubtitle:{
        fontWeight: "bold"
    },
    paper: {
        textAlign:"center",
        '& > *': {
          backgroundColor: "#ecf2fb",
          padding: theme.spacing(1),
          height: theme.spacing(16),
          width: "fit-content"
        },
      },
    btn:{
        color:"limegreen"
    }

}));

const MyLibraryComponent = (props)=>{
    const styles = useStyles();
    const {logo, logoAlt, title1, title2, title3, title4, book1, book2, book3, book4, book5, book6, book7, book8, book9} = props;
    return(   
        <ThemeProvider theme = {baseTheme}> 
        <Container maxWidth="md">
            <Box className={styles.header} >
                <Header logo = {logo} logoAlt={logoAlt} title1={title1} title2={title2} title3={title3} title4={title4} />
            </Box>
            <Typography variant="h4"> My Library</Typography>
            <br/>
            <Notification />
            <br/>
            <Grid container spacing={2}>
                <Grid container item xs={12} spacing={4}>
                    <Grid item xs={12} md={4}>
                        <BookCard book={book1} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BookCard book={book2} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BookCard book={book3} />
                    </Grid>       
                </Grid>
                <Grid container item xs={12} spacing={4}>
                    <Grid item xs={12} md={4}>
                        <BookCard book={book4} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BookCard book={book5} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BookCard book={book6} />
                    </Grid>       
                </Grid>
                <Grid container item xs={12} spacing={4}>
                    <Grid item xs={12} md={4}>
                        <BookCard book={book7} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BookCard book={book8} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BookCard book={book9} />
                    </Grid>       
                </Grid>
            </Grid>
            <br />
            <Grid container justifyContent="center"><Button variant="outlined" className={styles.btn}>Load More</Button></Grid>
        </Container>
        </ThemeProvider>
    );

};


export default MyLibraryComponent;