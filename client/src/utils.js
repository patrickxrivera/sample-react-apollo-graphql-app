import React from 'react';

export const handleNoData = (loading, error) => (loading ? renderLoading() : renderError(error));

const renderError = (error) => <div>{`Error: ${error}`}</div>;

const renderLoading = () => <div>Loading...</div>;
