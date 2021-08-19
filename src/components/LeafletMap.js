import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { Component } from 'react'
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { divIcon } from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';



Leaflet.Icon.Default.imagePath =
  '../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

{/* <i class="fab fa-python"></i> */ }
const iconMarkup = renderToStaticMarkup(<i className="fab fa-python" />);
const customMarkerIcon = divIcon({
  html: iconMarkup,
});



export default class LeafletMap extends Component {
  state = {
    lat: 40.014,
    lng: -5.120,
  }



  render() {
    const position = [this.state.lat, this.state.lng]
    const PythonVigo = [42.19864, -8.7726]
    const PythonMalaga = [36.7644, -4.4242]
    const PythonValencia = [39.4227, -0.3525]
    const PythonMallorca = [39.6602, -2.9862]
    return (
      <MapContainer center={position} zoom={5.5} style={{ height: '400px' }}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={PythonValencia} icon={customMarkerIcon}>
          <Popup>
          Python Valencia
          </Popup>
        </Marker>
        <Marker position={PythonVigo} icon={customMarkerIcon}>
          <Popup>
            Python Vigo
          </Popup>
        </Marker>
        <Marker position={PythonMalaga} icon={customMarkerIcon}>
          <Popup>
            Python Málaga
          </Popup>
        </Marker>
        <Marker position={PythonMallorca} icon={customMarkerIcon}>
          <Popup>
            Python Mallorca
          </Popup>
        </Marker>
      </MapContainer>
    )
  }
}
// const LeafletMap = () => {

//   const position = [51.505, -0.09]

// return(
//   <div>
//   <h1>este es mi mapa</h1>
//   <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
//     <TileLayer
//       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     />
//     <Marker position={position}>
//       <Popup>
//         A pretty CSS3 popup. <br /> Easily customizable.
//       </Popup>
//     </Marker>
//   </MapContainer>
//   </div>
// )}

// export default LeafletMap




