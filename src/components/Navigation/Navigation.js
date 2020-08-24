import React from 'react';

import LogOut from '../LogOut/LogOut';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';
import style from './Navigation.module.css';
const Navigation = ({ isAuthenticated }) => {
  return (
    <>
      <div className={style.container}>
        {isAuthenticated ? (
          <>
            <LogOut />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
