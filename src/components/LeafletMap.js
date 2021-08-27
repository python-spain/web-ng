import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { Component } from 'react'
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { divIcon } from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { SiPython } from "@react-icons/all-files/si/SiPython"
import MapData from './MapData';


// Leaflet.Icon.Default.imagePath =
//   '../node_modules/leaflet'

// delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});



const iconMarkup = renderToStaticMarkup(<div class="python-logo"><SiPython /></div>);
const customMarkerIcon = divIcon({
  html: iconMarkup,
});



export default class LeafletMap extends Component {
  state = {
    lat: 36.014,
    lng: -5.120,
  }



  render() {
    const position = [this.state.lat, this.state.lng]
   

    return (
      <MapContainer center={position} zoom={5} style={{ height: '400px' }}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup>
          <MapData/>
        </MarkerClusterGroup>
      </MapContainer>


    )
  }
}





