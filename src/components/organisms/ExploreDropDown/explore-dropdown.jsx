import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import {Typography, Link, Grid} from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const ExploreDropDownComponent = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="subtitle2" ><Link href="#">Explore</Link></Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Grid container >
                <Grid item xs={12} md={4}>
                    <Typography variant="subtitle1">Explore by Category</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                <Typography variant="subtitle1">See recently added titles </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                <Typography variant="subtitle1">See popular titles</Typography>
                </Grid>
            </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  )
};

export default ExploreDropDownComponent;