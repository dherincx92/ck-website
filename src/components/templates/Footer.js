import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  footer: {
    fontSize: 15,
    color: "gray",
    fontWeight: "bold"
  }
}));

const Footer = () => {
    const classes = useStyles()
    return (
        <Box mb={4}
          display="flex"
          flexDirection="row"
          alignContent="center"
          justifyContent="center"
          alignItems="center"
        >
          <Typography className={classes.footer}>
            Copyright © Chris Kim, 2021
          </Typography>
        </Box>

    )
}

export default Footer;