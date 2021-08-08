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
    },
    heading:{
        marginBottom: "2rem",
        marginTop: "6rem"
    }

}));

const MyLibraryComponent = (props)=>{
    const styles = useStyles();
    const {header, mainContent, footer} = props;
    return(   
        <ThemeProvider theme = {baseTheme}> 
        <Container maxWidth="md">
            <Box className={styles.header} >
                {header}
            </Box>
            <Typography className={styles.heading} variant="h4"> My Library</Typography>
            <br/>
            <Notification />
            <br/>
            <Grid container spacing={2}>
                <Grid container item xs={12} spacing={4}>
                    {mainContent}
                </Grid>
            </Grid>
            <br />
            <Grid container justifyContent="center"><Button variant="outlined" className={styles.btn}>Load More</Button></Grid>
            <br />
        </Container>
            <div>
                {footer}
            </div>
        </ThemeProvider>
    );

};


export default MyLibraryComponent;