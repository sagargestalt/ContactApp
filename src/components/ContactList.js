import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';




const styles = theme => ({
  card: {
    display: 'flex',
    padding: '10px 10px 10px 10px', 
    borderBottom: '2px solid',

  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 150,
    height: 120,
    margin: '0 0 0 auto',
	  display: 'block',
    
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});


const ContactList = (props) => {
  

    const { classes, theme } = props;
    return (
      <div >
       
        <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline">{props.list.general.firstName +" "+ props.list.general.lastName}</Typography>
            <Typography variant="subheading" color="textSecondary">
            {props.list.job.title}
            </Typography>
          </CardContent>
         
        </div>
        <CardMedia
          className={classes.cover}
          image={props.list.general.avatar}
          title="Live from space album cover"
        />
      </Card>
      </div>
    );
 
}


ContactList.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ContactList);
