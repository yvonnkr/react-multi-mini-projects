import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

export default class SeasonsApp extends Component {
  state = {
    latitude: null,
    errorMsg: ''
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      error => this.setState({ errorMsg: error.message })
    );
  }

  renderContent = () => {
    const { errorMsg, latitude } = this.state;

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

  render() {
    return <div className='border red'>{this.renderContent()}</div>;
  }
}

//#region Using Hooks

/** 
 * import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import Clock from './Clock';

const SeasonsApp = () => {
  const [lat, setLat] = useState();

  window.navigator.geolocation.getCurrentPosition(
    position => {
      setLat(position.coords.latitude);
    },
    error => {
      console.log(error);
      setLat(error.message)
    }
  );

  return <div>label:{lat}</div>;
};

export default SeasonsApp;
 */

//#endregion
