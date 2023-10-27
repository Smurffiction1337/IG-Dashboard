import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const Notifications = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <NotificationImportantIcon />
        <ListItemText primary="Notification 1" secondary="Scheduled post was published successfully." />
      </ListItem>
      <ListItem>
        <NotificationImportantIcon />
        <ListItemText primary="Notification 2" secondary="New follower added." />
      </ListItem>
      {/* Add more notifications as needed */}
    </List>
  );
}

export default Notifications;