import React from 'react';
import { makeStyles, Box, Grid, Container, Typography, ThemeProvider, Button } from '@material-ui/core';
import baseTheme from '../../../themes/theme';
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
    },
    middleContainer:{
        maxWidth: "59rem",
        margin: "0 auto"
    },
    libraryTabs:{
        position: "relative",
        zIndex: 1,
        overflow: "visible"
    },
    tabs:{
        display:"flex",
        boxSizing: "border-box",
        flexDirection: "row",
        flex: "0 1 auto",
        padding:"3rem 0"
    },
    tabNames:{
        display:"flex",
        borderBottom: "0.125rem solid #BAC8CE",
        paddingBottom: "0.5rem",
        flexBasis: "100%",
        cursor: "pointer",
        flexDirection: "column"
    },
    tabActive:{
        color:"#22C870",
        borderBottom: "0.125rem solid #22C870"
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
            <Typography className={styles.heading} variant="h4">My Library</Typography>
            <br/>
            <Notification />
            <br/>
            <div className={styles.middleConatiner}>
                <div className={styles.libraryTabs}>
                    <div className={styles.tabs}>
                        <Typography className={`${styles.tabNames} ${styles.tabActive}`} variant="subtitle1">Currently reading</Typography>
                        <Typography className={styles.tabNames} variant="subtitle1">Finished</Typography>
                    </div>

                </div>
            </div>
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