import React from 'react';
import Header from '../../molecules/Header/header';
import BookCard from '../../molecules/BookCard/book-card';
import { makeStyles, Box, Grid, Paper, Container, Typography, ThemeProvider, Button } from '@material-ui/core';
import baseTheme from '../../../themes/theme';
import store_icons from '../../../assets/images/store_icons.jpg';

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
      },
    header: {
        marginBottom: '8rem'
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
          margin: theme.spacing(1),
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
    const {logo, logoAlt, title1, title2, title3, title4 } = props;
    return(   
        <ThemeProvider theme = {baseTheme}> 
        <Container>
            <Box className={styles.header} >
                <Header logo = {logo} logoAlt={logoAlt} title1={title1} title2={title2} title3={title3} title4={title4} />
            </Box>
            <Typography variant="h3"> My Library</Typography>
            <br/>
            <div className={styles.paper}>
                <Paper variant="outlined" >
                    <Grid container>
                        <Grid item xs={6} md={6}>
                                <Typography variant="subtitle1" className={styles.paperTitle} align="left"  >New </Typography>
                                <Typography variant="subtitle1"  className={styles.paperSubtitle}  align="left" >Find audiobooks on the blinkist app</Typography>
                                <Typography variant="subtitle1" align="left"    >
                                        With the premium you'll get the whole Blinkist library for free, plus full-length nonfiction audiobooks at a special member price.
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                    <img src={store_icons} height="125" width="150" />
                            </Grid>
                    </Grid>
                </Paper>
            </div>
            <br/>
            <Grid container spacing={2}>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12} md={4}>
                        <BookCard {...props} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BookCard {...props} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BookCard {...props} />
                    </Grid>       
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12} md={4}>
                        <BookCard {...props} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BookCard {...props} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BookCard {...props} />
                    </Grid>       
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12} md={4}>
                        <BookCard {...props} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BookCard {...props} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BookCard {...props} />
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