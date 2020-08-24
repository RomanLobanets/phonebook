import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './FormList.module.css';
import Fadestyles from './FadeFormList.module.css';
import taskOperations from '../redux/taskOperation';
import taskSelectors from '../redux/tasks/taskSelectors';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    margin: theme.spacing(1, 0, 2),
  },

  avatar: {
    backgroundColor: red[500],
  },
  date: {
    textAlign: 'center',
  },
}));

const FormList = ({ contacts, onRemove }) => {
  const classes = useStyles();

  return (
    <TransitionGroup component="ul" className={styles.list}>
      {contacts.map(item => {
        return (
          <CSSTransition key={item.id} timeout={250} classNames={Fadestyles}>
            <Container component="main" maxWidth="xs">
              <Card className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      {item.name.charAt(0).toUpperCase()}
                    </Avatar>
                  }
                  action={
                    <IconButton
                      onClick={() => onRemove(item.id)}
                      variant="contained"
                      color="secondary"
                      aria-label="settings"
                    >
                      <DeleteForeverIcon />
                    </IconButton>
                  }
                  title={`Name ${item.name}`}
                  subheader={`Phone ${item.number}`}
                />
              </Card>
            </Container>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};
const mapStateToProps = state => ({
  contacts: taskSelectors.onGetVisiblesTasks(state),
});

const mapDispatchToProps = {
  onRemove: taskOperations.removeTask,
};
export default connect(mapStateToProps, mapDispatchToProps)(FormList);
