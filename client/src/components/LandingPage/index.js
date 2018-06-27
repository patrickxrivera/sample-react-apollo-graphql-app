import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'shared';

const style = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '320px'
  },
  heading: {
    textAlign: 'center'
  }
};

const LandingPage = () => (
  <div style={style.wrapper}>
    <div style={style.heading}>
      <h1>Career Karma</h1>
      <p>Give time to get time.</p>
      <Link
        to={{
          pathname: '/login',
          state: {
            isLogin: false
          }
        }}>
        <Button color={'secondary'} fontSize={'16px'} width={'200px'}>
          Get started
        </Button>
      </Link>
    </div>
  </div>
);

export default LandingPage;
