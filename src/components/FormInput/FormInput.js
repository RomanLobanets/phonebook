import React, { useState } from 'react';
import { connect } from 'react-redux';

import taskSelectors from '../redux/tasks/taskSelectors';
import taskOperations from '../redux/taskOperation';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

import MaskedInput from 'react-text-mask';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function NumberFormatCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        '+',
        '1',
        '(',
        /[1-9]/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

function FormInput(props) {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (props.contacts.find(item => item.name === name)) {
      props.onError();
      return;
    } else {
      props.onAddContact(name, phone);
    }
    setName('');
    setPhone('');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ImportContactsIcon />
        </Avatar>
        <Typography component="h1" variant="h3">
          Phone book
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <TextField
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            label="phone"
            type="phone"
            id="phone"
            autoComplete="current-phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add contact
          </Button>
        </form>
      </div>
    </Container>
  );
}

const mapStateToProps = state => ({
  contacts: taskSelectors.onGetContact(state),
});
const mapDispatchToProps = {
  onAddContact: taskOperations.addTask,
};
export default connect(mapStateToProps, mapDispatchToProps)(FormInput);
