import { useState, useEffect } from 'react';

const useLocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLatitude(position.coords.latitude),
      error => setErrorMsg(error.message)
    );
  }, []);

  //return {latitude, errorMsg} // prefer this instead
  return [latitude, errorMsg]; //return array as convention instead of an object
};

export default useLocation;
