import React, {Component} from 'react';
import {render} from 'react-dom';


class Map extends Component {
		
  constructor(props) {
    super(props);

    this.state = {
      lat: 0,
      lng: 0
    }

    this.onScriptLoad = this.onScriptLoad.bind(this);
    this.onGeoLocation = this.onGeoLocation.bind(this);
    this.onCoordinateChange = this.onCoordinateChange.bind(this);
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);
    this.props.onMapLoad(map)
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyD7DQHSx1BL6ouYnfa8Ur7a1VxAR2Be3m8`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // Below is important. 
      //We cannot access google.maps until it's finished loading
      s.addEventListener('load', e => {
        this.onScriptLoad()
        this.onGeoLocation()
        //this.handleCoords()
      })
    } else {
      this.onScriptLoad()
      this.onGeoLocation()
      //this.handleCoords()
    }
    //this.handleCoords()
  }

  //This function takes an address and transforms it into lat and lng codes
  onGeoLocation() {

    let geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({'address': this.props.onLocationGeocode}, (results, status) => {
      if (status === 'OK') {
      

      this.setState({ 
        lat: results[0].geometry.location.lat(), 
        lng: results[0].geometry.location.lng() }, () => {
        this.props.onCoordinateChange(this.parsedLat, this.parsedLng);
        })
      
      this.parsedLat = this.state.lat
      this.parsedLng = this.state.lng
      
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }

      console.log(this.parsedLat, this.parsedLng);
      

    });
  }

  // handleCoords = () => {
  //   console.log(this.parsedLat, this.parsedLng);
    
  // }

  render() {
    return ( 
      <div style = {{
          width: 500,
          height: 500
        }}
          id = {this.props.id} 
          // function = {this.handleCoords()}  
          />
    );
  }
}

export default Map

