import React, { Component, Suspense } from 'react';
import { Switch } from 'react-router-dom';

import CircularUnderLoad from '../Loader/Loader';
import Navigation from '../Navigation/Navigation';

import { connect } from 'react-redux';
import authOperation from '../redux/auth/authOperations';

import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PubliRoute from '../PublicRoute/PublicRoute';
import route from '../route';

class App extends Component {
  componentDidMount() {
    this.props.ongetCurrentUser();
  }
  render() {
    return (
      <>
        <Navigation></Navigation>
        <Suspense fallback={<CircularUnderLoad></CircularUnderLoad>}>
          <Switch>
            {route.map(item => {
              return item.private ? (
                <PrivateRoute key={item.label} {...item} />
              ) : (
                <PubliRoute key={item.label} {...item} />
              );
            })}
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default connect(null, {
  ongetCurrentUser: authOperation.getCurrentUser,
})(App);
