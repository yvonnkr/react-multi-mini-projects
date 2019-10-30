import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import useLocation from './useLocation';

const SeasonsApp = () => {
  const [latitude, errorMsg] = useLocation();

  return (
    <>
      {errorMsg && !latitude && <ErrorMessage message={errorMsg} />}
      {latitude && !errorMsg && <SeasonDisplay latitude={latitude} />}
      {!errorMsg && !latitude && (
        <Loader message='Please accept location request' />
      )}
    </>
  );
};

export default SeasonsApp;
