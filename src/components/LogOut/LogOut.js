import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';
import authOperations from '../redux/auth/authOperations';
import style from './LogOut.module.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
const useStyles = makeStyles(theme => ({
  text: {
    margin: theme.spacing(0.5, 1, 1, 1),
  },
  root: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: theme.spacing(1, 0, 0, 0),
  },
  btn: {
    background: '#ff1744',
    marginRight: theme.spacing(1),
    padding: theme.spacing(1, 1, 1, 1),
  },
}));

const LogOut = ({ name, onLogOut }) => {
  const classes = useStyles();
  return (
    <div className={style.container}>
      <Card className={classes.root}>
        <Typography className={classes.text} component="h1" variant="h5">
          Welcome
        </Typography>
        <Typography className={classes.text} component="h1" variant="h5">
          {name}
        </Typography>
        <Button
          className={classes.btn}
          onClick={onLogOut}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Log Out
        </Button>
      </Card>
    </div>
  );
};
const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});
const mapDispatchToProps = {
  onLogOut: authOperations.logout,
};
export default connect(mapStateToProps, mapDispatchToProps)(LogOut);
