import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from './mapComponent'

class App extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {

    return (
      <Map
        id="myMap"
        options={{
          center: { lat: 55.86515, lng: -4.25763 },
          zoom: 8
        }}
        onMapLoad={map => {
          var marker = new window.google.maps.Marker({
            position: {lat: this.props.lat, lng: this.props.lng },
            map: map,
            title: 'Hello Glasgow!'
          });
        }}
		// onLocationGeocode = {this.handleGeocode()}

      />
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
