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
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
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
const ContactDetail = (props) => {
  const { classes, theme } = props;
  return (
      <div >
       
        <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline">{props.detail.general.firstName +" "+ props.detail.general.lastName}</Typography>
            <Typography variant="subheading" color="textSecondary">
            Job Title:{props.detail.job.title}
            </Typography>
            <Typography variant="subheading" color="textSecondary">
            Email:{props.detail.contact.email}
            </Typography>
            <Typography variant="subheading" color="textSecondary">
            Phone:{props.detail.contact.phone}
            </Typography>
            <Typography variant="subheading" color="textSecondary">
            Address:{props.detail.address.street +", "+ props.detail.address.city +", "+ props.detail.address.country +", "+ props.detail.address.zipCode }
            </Typography>
          </CardContent>
         
        </div>
        <CardMedia
          className={classes.cover}
          image={props.detail.general.avatar}
          title="Live from space album cover"
        />
      </Card>
      </div>
    );
 
}

ContactDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ContactDetail);
