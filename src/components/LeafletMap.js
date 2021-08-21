import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { Component } from 'react'
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { divIcon } from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { SiPython } from "@react-icons/all-files/si/SiPython"
import "./LeafletMap.css"


Leaflet.Icon.Default.imagePath =
  '../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});



const iconMarkup = renderToStaticMarkup(<div class="python"><SiPython /></div>);
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
    const PythonSevilla = [37.3766, -5.926]
    const PythonGranada = [37.1809, -3.5983]
    const PythonCanarias = [28.4811, -16.3227]
    const PythonAlicante = [38.3453, -0.4831]
    const PythonSanSebastián = [43.2918, -1.9889]
    const PythonGirona = [41.9830495, 2.8245813]
    const PythonMadrid = [40.41664, -3.70381]
    const PyLadiesMadrid = [40.417037, -3.702626]
    const PyDataMallorca = [39.6149, 2.9527]
    const PythonAlmería = [36.842512, -2.457619]
    const PyDataSalamanca = [40.961613, -5.667607]
    const ExtrePython = [39.478848, -6.342179]
    const PythonNavarra = [42.81692, -1.64286]
    const PythonMurcia = [37.990434, -1.133015]
    const PythonCórdoba = [37.883333, -4.766667]
    const PythonCyL = [41.652778, -4.723611]
    const PyLadiesBarcelona = [41.3959, 2.1404]
    const MallorcaPython = [39.6602, 2.9862]
    const PyBCN = [ 41.3929, 2.1404]

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
        <Marker position={PythonSevilla} icon={customMarkerIcon}>
          <Popup>
            Python Sevilla
          </Popup>
        </Marker>
        <Marker position={PythonGranada} icon={customMarkerIcon}>
          <Popup>
            Python Granada
          </Popup>
        </Marker>
        <Marker position={PythonCanarias} icon={customMarkerIcon}>
          <Popup>
            Python Canarias
          </Popup>
        </Marker>
        <Marker position={PythonAlicante} icon={customMarkerIcon}>
          <Popup>
            Python Alicante
          </Popup>
        </Marker>
        <Marker position={PythonSanSebastián} icon={customMarkerIcon}>
          <Popup>
            Python San Sebastián
          </Popup>
        </Marker>
        <Marker position={PythonGirona} icon={customMarkerIcon}>
          <Popup>
            Python Girona
          </Popup>
        </Marker>
        <Marker position={PythonMadrid} icon={customMarkerIcon}>
          <Popup>
            Python Madrid
          </Popup>
        </Marker>
        <Marker position={PyLadiesMadrid} icon={customMarkerIcon}>
          <Popup>
            PyLadies Madrid
          </Popup>
        </Marker>
        <Marker position={PyDataMallorca} icon={customMarkerIcon}>
          <Popup>
            PyData Mallorca
          </Popup>
        </Marker>
        <Marker position={PythonAlmería} icon={customMarkerIcon}>
          <Popup>
            Python Almería
          </Popup>
        </Marker>
        <Marker position={PyDataSalamanca} icon={customMarkerIcon}>
          <Popup>
            Python Salamanca
          </Popup>
        </Marker>
        <Marker position={ExtrePython} icon={customMarkerIcon}>
          <Popup>
            ExtrePython
          </Popup>
        </Marker>
        <Marker position={PythonNavarra} icon={customMarkerIcon}>
          <Popup>
            Python Navarra
          </Popup>
        </Marker>
        <Marker position={PythonMurcia} icon={customMarkerIcon}>
          <Popup>
            Python Murcia
          </Popup>
        </Marker>
        <Marker position={PythonCórdoba} icon={customMarkerIcon}>
          <Popup>
            Python Córdoba
          </Popup>
        </Marker>
        <Marker position={PythonCyL} icon={customMarkerIcon}>
          <Popup>
            PythonCyL
          </Popup>
        </Marker>
        <Marker position={PyLadiesBarcelona} icon={customMarkerIcon}>
          <Popup>
            PyLadies Barcelona
          </Popup>
        </Marker>
        <Marker position={MallorcaPython} icon={customMarkerIcon}>
          <Popup>
            Python Mallorca
          </Popup>
        </Marker>
        <Marker position={PyBCN} icon={customMarkerIcon}>
          <Popup>
          PyBCN
          </Popup>
        </Marker>
      </MapContainer>


    )
  }
}





