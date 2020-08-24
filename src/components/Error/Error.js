import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  alert: {
    position: 'fixed',
    zIndex: '1',
    top: '90px',
  },
}));

const Error = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <Alert className={classes.alert} variant="filled" severity="error">
        Contact is already excist!
      </Alert>
    </Container>
  );
};
export default Error;
