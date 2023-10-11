import React from 'react';
import { Calendar as MuiCalendar } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  calendar: {
    marginTop: theme.spacing(2),
  },
}));

const Calendar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.calendar}>
      <MuiCalendar
        date={new Date()}
        onChange={(newDate) => console.log(newDate)}
      />
    </div>
  );
};

export default Calendar;