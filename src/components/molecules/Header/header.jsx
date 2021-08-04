import React from 'react';
import Typography from '../../atoms/Typography/typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Toolbar, AppBar, Box, Link } from '@material-ui/core';
import IconButton from '../../atoms/IconButton/icon-button';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    header: {
        backgroundColor: "white"
    },
    navItems:{
        marginLeft: "16rem",
        marginRight: "16rem"
    },
    searchIcon: {
      marginRight: "2rem",

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

    return(
        <div className={classes.root}>
        <AppBar className={classes.header} position="static" >
          <Toolbar className={classes.navItems}>
          <img className={classes.image} src={logo} alt={logoAlt} />
          <Box className={classes.searchIcon}><IconButton color="black" icon={<SearchIcon />} /></Box>
            <Box className={classes.title}><Typography variant="title" ><Link href="#">{title1}</Link></Typography></Box>
            <Box className={classes.title}><Typography variant="title" ><Link href="#">{title2}</Link></Typography></Box>
            <Box className={classes.title}><Typography variant="title" ><Link href="#">{title3}</Link></Typography></Box>
            <Box className={classes.account}><Typography variant="title" ><Link href="#">{title4}</Link></Typography></Box>
          </Toolbar>
        </AppBar>
      </div>
    );


};


HeaderComponent.propTypes = {
    logo : PropTypes.string,
    logoAlt : PropTypes.string.isRequired,
    title1 : PropTypes.string.isRequired,
    title2 : PropTypes.string.isRequired,
    title3 : PropTypes.string.isRequired,
    title4 : PropTypes.string.isRequired

};

HeaderComponent.defaultProps={};

export default HeaderComponent;