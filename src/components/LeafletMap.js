import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { Component } from 'react'
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { divIcon } from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { SiPython } from "@react-icons/all-files/si/SiPython"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { BiWorld } from "@react-icons/all-files/bi/BiWorld"
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram"
import { FiMail } from "@react-icons/all-files/fi/FiMail"
import { FaMeetup } from "@react-icons/all-files/fa/FaMeetup"
import { FaVideo } from "@react-icons/all-files/fa/FaVideo"
import "./LeafletMap.css"


Leaflet.Icon.Default.imagePath =
  '../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

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
    const PyBCN = [41.3929, 2.1404]

    return (
      <MapContainer center={position} zoom={5.5} style={{ height: '400px' }}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={PythonValencia} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Valencia</b>
              <div class="links">
                <a href='https://twitter.com/python_vlc'><FaTwitter /></a><a href='http://www.meetup.com/es-ES/Python-Valencia-Meetup/'>< BiWorld /></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonVigo} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Vigo</b>
              <div class="links">
                <a href='https://twitter.com/python_vigo'><FaTwitter /></a>
                <a href='http://www.python-vigo.es/'>< BiWorld /></a>
                <a href='https://t.me/joinchat/AAAAAAfW2-q8miOKsVGjCg'><FaTelegram /></a>
                <a href='vigo@lists.es.python.org'><FiMail /></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonMalaga} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Málaga</b>
              <div class="links">
                <a href='https://twitter.com/python_malaga'><FaTwitter /></a>
                <a href='https://www.python-malaga.es/'>< BiWorld /></a>
                <a href='https://www.meetup.com/es-ES/python_malaga/'><FaMeetup/></a>
                <a href='https://www.youtube.com/watch?v=wnhtNjsSLe8'><FaVideo/></a>
                <a href='https://t.me/python_malaga'><FaTelegram /></a>
                <a href='python.malaga@gmail.com'><FiMail /></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonSevilla} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Sevilla</b>
              <div class="links">
                <a href=''><FaTwitter /></a>
                <a href=''>< BiWorld /></a>
                <a href=''></a>
                <a href=''></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonGranada} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Granada</b>
              <div class="links">
                <a href=''><FaTwitter /></a>
                <a href=''>< BiWorld /></a>
                <a href=''></a>
                <a href=''></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonCanarias} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Canarias</b>
              <div class="links">
                <a href=''><FaTwitter /></a>
                <a href=''>< BiWorld /></a>
                <a href=''></a>
                <a href=''></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonAlicante} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Alicante</b>
              <div class="links">
                <a href=''><FaTwitter /></a>
                <a href=''>< BiWorld /></a>
                <a href=''></a>
                <a href=''></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonSanSebastián} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python San Sebastián</b>
              <div class="links">
                <a href=''><FaTwitter /></a>
                <a href=''>< BiWorld /></a>
                <a href=''></a>
                <a href=''></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonGirona} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Girona</b>
              <div class="links">
                <a href=''><FaTwitter /></a>
                <a href=''>< BiWorld /></a>
                <a href=''></a>
                <a href=''></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonMadrid} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Madrid</b>
              <div class="links">
                <a href=''><FaTwitter /></a>
                <a href=''>< BiWorld /></a>
                <a href=''></a>
                <a href=''></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PyLadiesMadrid} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>PyLadies Madrid</b>
              <div class="links">
                <a href=''><FaTwitter /></a>
                <a href=''>< BiWorld /></a>
                <a href=''></a>
                <a href=''></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PyDataMallorca} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>PyData Mallorca</b>
              <div class="links">
                <a href=''><FaTwitter /></a>
                <a href=''>< BiWorld /></a>
                <a href=''></a>
                <a href=''></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonAlmería} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Almería</b>
              <div class="links">
                <a href=''><FaTwitter /></a>
                <a href=''>< BiWorld /></a>
                <a href=''></a>
                <a href=''></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PyDataSalamanca} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Salamanca</b>
              <div class="links">
                <a href=''><FaTwitter /></a>
                <a href=''>< BiWorld /></a>
                <a href=''></a>
                <a href=''></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={ExtrePython} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>ExtrePython</b>
              <div class="links">
                <a href=''><FaTwitter /></a>
                <a href=''>< BiWorld /></a>
                <a href=''></a>
                <a href=''></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonNavarra} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Navarra</b>
              <div class="links">
                <a href=''><FaTwitter /></a>
                <a href=''>< BiWorld /></a>
                <a href=''></a>
                <a href=''></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonMurcia} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Murcia</b>
              <div class="links">
                <a href=''><FaTwitter /></a>
                <a href=''>< BiWorld /></a>
                <a href=''></a>
                <a href=''></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonCórdoba} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Córdoba</b>
              <div class="links">
                <a href=''><FaTwitter /></a>
                <a href=''>< BiWorld /></a>
                <a href=''></a>
                <a href=''></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonCyL} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>PythonCyL</b>
              <div class="links">
                <a href=''><FaTwitter /></a>
                <a href=''>< BiWorld /></a>
                <a href=''></a>
                <a href=''></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PyLadiesBarcelona} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>PyLadies Barcelona</b>
              <div class="links">
                <a href=''><FaTwitter /></a>
                <a href=''>< BiWorld /></a>
                <a href=''></a>
                <a href=''></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={MallorcaPython} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Mallorca</b>
              <div class="links">
                <a href=''><FaTwitter /></a>
                <a href=''>< BiWorld /></a>
                <a href=''></a>
                <a href=''></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PyBCN} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>PyBCN</b>
              <div class="links">
                <a href=''><FaTwitter /></a>
                <a href=''>< BiWorld /></a>
                <a href=''></a>
                <a href=''></a>
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>


    )
  }
}





