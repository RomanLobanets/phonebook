import React from 'react';
import { connect } from 'react-redux';
import taskActions from '../redux/tasks/taskActions';
import taskSelectors from '../redux/tasks/taskSelectors';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import 'fontsource-roboto';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const FormSearch = ({ value, onSearchContact }) => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="find"
          label="Find contacts by name"
          name="find form"
          autoComplete="form"
          value={value}
          onChange={e => onSearchContact(e.target.value)}
        />
      </form>
    </Container>
  );
};
const mapStateToProps = state => ({
  value: taskSelectors.onGetFilter(state),
});
const dispatchToProps = {
  onSearchContact: taskActions.searchContact,
};
export default connect(mapStateToProps, dispatchToProps)(FormSearch);
