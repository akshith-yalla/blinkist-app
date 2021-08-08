import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, AppBar, Box, Link , Typography, Dialog, DialogActions, DialogContent, Button, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountMenu from '../../organisms/AccountMenu/account-menu';
import AddBook from '../../organisms/AddBook/add-book';
import logo from '../../../assets/images/blinkist_logo.png';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    header: {
      fontFamily: "CeraPRO",
      position: "relative",
      zIndex: "1000"
    },
    inner_header:{
      backgroundColor:"#FFFFFF"

    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    navItems:{
      boxSizing: "border-box",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "1024px",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "1rem",
      [theme.breakpoints.down('sm')]:{
          display: "none"
      }
    },
    searchIcon: {
      marginRight: "2rem",
      color: "black"

    },
    header_logo:{
      display: "flex",
      alignItems: "center",
      height: "100%"
    },
    title: {
      marginRight: "2rem",
      color: "black"
    },
    account:{
        marginLeft: "auto"
    },
    logo: {
        display: "flex",
        height: "2rem",
        alignItems: "center"
    },
    explore_container:{
      backgroundColor: "#ecf2fb",
      width:"100%",
      padding:"2rem",
      display: "grid",
      justifyContent: "center"
    },
    explore_header:{
      display: "inline-flex",
      borderBottom: "1px solid black",
      paddingBottom: "1rem"

    },
    explore_titles:{
      marginRight:"4rem"
    },
    explore_content:{
      paddingTop:"1rem",
      paddingRight: "8rem",
      display:"inline-block"
    },
    explore_content_titles:{
      paddingBottom: "1rem"
    },
    explore_content_main:{
    }

  }));

const HeaderComponent = (props)=>{
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return(
        <header className={classes.header}>
          <AppBar className={classes.inner_header} position="fixed" >
            <Toolbar className={classes.navItems} >
              <Box className={classes.header_logo} >
                <img className={classes.logo} src={logo} alt="Logo" />
              </Box>
                <Box className={classes.searchIcon}><IconButton icon={<SearchIcon fontSize="large" />} /></Box>
                <Box className={classes.title}>
                  <Typography variant="subtitle2" >
                    <Link color="textPrimary" href="#">Explore
                      <IconButton 
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    </Link>
                  </Typography>
                </Box>
                <Box className={classes.title}><Typography variant="subtitle2" ><Link color="textPrimary" href="#">My Library</Link></Typography></Box>
                <Box className={classes.title}><Typography variant="subtitle2" ><Link color="textPrimary" onClick={handleClickOpen} href="#">Add Book</Link></Typography></Box>
                <Box className={classes.account}><AccountMenu /></Box>
                
            </Toolbar>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box className={classes.explore_container}>
                  <div className={classes.explore_header}>
                    <Typography color="primary" className={classes.explore_titles} variant="subtitle1">Explore by category</Typography>
                    <Typography color="textPrimary" className={classes.explore_titles} variant="subtitle1">See recently added titles</Typography>
                    <Typography color="textPrimary" className={classes.explore_titles} variant="subtitle1">See popular titles</Typography>
                  </div>
                  <div className={classes.explore_content_main}>
                    <div className={classes.explore_content}>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Entrepreneurship</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Science </Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Economics</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Corporate Culture</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Money &amp; Investments</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Sex &amp; Relationships</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Parenting</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Biography &amp; Memoir</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Religion &amp; Spirituality</Typography>
                    </div>
                    <div className={classes.explore_content}>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Politics</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Health &amp; Nutrition</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">History</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Management &amp; Leadership</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Psychology</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Technology &amp; the Future</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Society &amp; Culture</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Career &amp; Success</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Creativity</Typography>
                    </div>
                    <div className={classes.explore_content}>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Marketing &amp; Sales</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Personal Development</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Communication Skills</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Motivation &amp; Inspiration</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Productivity</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Mindfulness &amp; Happiness</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Nature &amp; Environment</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Education</Typography>
                      <Typography className={classes.explore_content_titles}  color="textPrimary" variant="body1">Policy</Typography>
                    </div>
                  </div>
                </Box>
                </Collapse>
          </AppBar>
          <div>
            <Dialog open={open} onClose={handleClose}  aria-labelledby="form-dialog-title">
              <DialogContent>
                <AddBook />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </header>
    );


};

export default HeaderComponent;