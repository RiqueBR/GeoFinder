import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from './mapComponent'

class App extends Component {
  constructor(props) {
    super(props);

	this.state = {
		address: ''
	}
  }

	componentDidMount(){
		this.handleAdressChange()
	}

    handleAdressChange = () => {
    this.setState({
      address: 'Royal Mile, Edinburgh'
    })
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
            position: {lat: 55.8833, lng: -4.3},
            map: map,
            title: 'Hello Glasgow!'
          });
        }}
		onLocationGeocode = {this.state.address}

      />
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;

// Dummy lat: 55.8833, lng: -4.3 -- Partick