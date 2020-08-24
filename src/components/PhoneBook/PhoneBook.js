import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import FormList from '../FormList/FormList';
import FormSearch from '../FormSearch';
import Error from '../Error/Error';
import { CSSTransition } from 'react-transition-group';

import fadeFormSearch from './FadeFormSearch.module.css';
import fadeError from './FadeError.module.css';

import { connect } from 'react-redux';
import taskOperations from '../redux/taskOperation';
import taskSelectors from '../redux/tasks/taskSelectors';

class PhoneBook extends Component {
  state = {
    error: false,
  };
  componentDidMount() {
    this.props.ongetContacts();
  }

  Error = () => {
    this.setState(prevState => {
      return { error: !prevState.error };
    });
    setTimeout(() => {
      this.setState(prevState => ({ error: !prevState.error }));
    }, 3000);
  };

  render() {
    return (
      <>
        <CSSTransition
          in={this.state.error}
          timeout={500}
          classNames={fadeError}
          unmountOnExit
        >
          <Error />
        </CSSTransition>

        <FormInput onError={this.Error} />
        <CSSTransition
          in={this.props.contacts.length > 1}
          timeout={250}
          classNames={fadeFormSearch}
          unmountOnExit
        >
          <FormSearch />
        </CSSTransition>
        <FormList></FormList>
      </>
    );
  }
}
const mapStateToProps = state => ({
  contacts: taskSelectors.onGetContact(state),
});
const mapDispatchToProps = {
  ongetContacts: taskOperations.getTask,
};
export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
