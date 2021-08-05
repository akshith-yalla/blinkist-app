import React from 'react';
import Typography from '../../atoms/Typography/typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    root : {},


}));

const FooterComponent = (props)=>{
    const styles = useStyles();
    return(
        <Typography>Footer</Typography>
    )

};


export default FooterComponent;