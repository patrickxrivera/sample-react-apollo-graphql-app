import React from 'react';
import { AUTH_TOKEN } from './constants';

export const handleNoData = (loading, error) => (loading ? renderLoading() : renderError(error));

const renderError = (error) => <div>{`Error: ${error}`}</div>;

const renderLoading = () => <div>Loading...</div>;

export const saveUserData = (token) => {
  localStorage.setItem(AUTH_TOKEN, token);
};

export const getPrevPath = (pathname) =>
  pathname
    .split('/')
    .slice(0, -1)
    .join('/');
