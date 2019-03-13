import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from './mapComponent'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      newLat: 0,
      newLng: 0
    }
  }

	componentDidMount(){
		this.handleAdressChange()
		this.handleCoordinatesChange()
	}
	
	// handles the users input of address
    handleAdressChange = () => {
    this.setState({
      address: 'Royal Mile, Edinburgh'
    })
  }

	// Function to gather data (already turned into lat & lng from adress) from child component
  handleCoordinatesChange = (dataParsed) => {
	  console.log(dataParsed.parsedLat, dataParsed.parsedLng);
	  
	// this.setState({
	// 	newLat: this.parsedLat,
	// 	newLng: this.parsedLng
	// })  
  }
  

  render() {
	//  console.log(this.state.newLat, this.state.newLng);
	  
	  
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
		onCoordinateChange = {this.handleCoordinatesChange()}

      />
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;

// Dummy lat: 55.8833, lng: -4.3 -- Partick