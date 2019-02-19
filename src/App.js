import React from 'react';
import MapContainer from './mapContainer';

class App extends React.Component {
  
  render() {
    return (
      <div id="map" >
        <MapContainer />
      </div>
    );
  }
}

export default App;