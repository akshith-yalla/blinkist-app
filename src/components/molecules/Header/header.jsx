import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, AppBar, Box, Link , Typography, Dialog, DialogActions, DialogContent, Button} from '@material-ui/core';
import IconButton from '../../atoms/IconButton/icon-button';
import SearchIcon from '@material-ui/icons/Search';
import AccountMenu from '../../organisms/AccountMenu/account-menu';
import AddBook from '../../organisms/AddBook/add-book';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    header: {
        backgroundColor: "white",
        boxShadow: "none"
    },
    navItems:{
        marginLeft: "19rem",
        marginRight: "19rem"
    },
    searchIcon: {
      marginRight: "2rem",
      color: "black"

    },
    title: {
      marginRight: "2rem",
      color: "black"
    },
    account:{
        marginLeft: "auto"
    },
    image: {
        width: "8rem",
        height: "2rem",
        marginRight: "1rem"
    }
  }));

const HeaderComponent = (props)=>{
    const classes = useStyles();
    const { logo, logoAlt, title1, title2, title3, title4 } = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return(
        <header>
          <AppBar className={classes.header} position="fixed" >
            <Toolbar className={classes.navItems} >
            <img className={classes.image} src={logo} alt={logoAlt} />
            <Box className={classes.searchIcon}><IconButton icon={<SearchIcon fontSize="large" />} /></Box>
              <Box className={classes.title}><Typography variant="subtitle2" ><Link href="#">{title1}</Link></Typography></Box>
              <Box className={classes.title}><Typography variant="subtitle2" ><Link href="#">{title2}</Link></Typography></Box>
              <Box className={classes.title}><Typography variant="subtitle2" ><Link onClick={handleClickOpen} href="#">{title3}</Link></Typography></Box>
              <Box className={classes.account}><AccountMenu /></Box>
            </Toolbar>
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