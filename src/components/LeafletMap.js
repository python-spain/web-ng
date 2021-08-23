import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { Component } from 'react'
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { divIcon } from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { SiPython } from "@react-icons/all-files/si/SiPython"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { BiWorld } from "@react-icons/all-files/bi/BiWorld"
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram"
import { FiMail } from "@react-icons/all-files/fi/FiMail"
import { FaMeetup } from "@react-icons/all-files/fa/FaMeetup"
import { FaVideo } from "@react-icons/all-files/fa/FaVideo"
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord"
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
        <MarkerClusterGroup>
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
                <a href='https://www.meetup.com/es-ES/python_malaga/'><FaMeetup /></a>
                <a href='https://www.youtube.com/watch?v=wnhtNjsSLe8'><FaVideo /></a>
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
                <a href='https://twitter.com/python_sevilla'><FaTwitter /></a>
                <a href='https://python-sevilla.github.io/'>< BiWorld /></a>
                <a href='https://www.youtube.com/watch?v=x0YF9q1pJcY'><FaVideo /></a>
                <a href='https://t.me/pythonsevilla'><FaTelegram /></a>
                <a href='https://www.meetup.com/es-ES/Python-Sevilla/'><FaMeetup /></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonGranada} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Granada</b>
              <div class="links">
                <a href='https://twitter.com/python_granada'><FaTwitter /></a>
                <a href='pythongranada@gmail.com'><FiMail /></a>
                <a href='https://www.youtube.com/watch?v=pgKXhg0cDyE'><FaVideo /></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonCanarias} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Canarias</b>
              <div class="links">
                <a href='https://twitter.com/pythoncanarias'><FaTwitter /></a>
                <a href='http://pythoncanarias.es/'><BiWorld /></a>
                <a href='https://t.me/joinchat/AJ7pmT-X0xZVPgWDIzGA-A'><FaTelegram /></a>
                <a href='info@pythoncanarias.es'><FiMail /></a>
                <a href='https://www.youtube.com/watch?v=6QxgyXe7_RA'><FaVideo /></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonAlicante} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Alicante</b>
              <div class="links">
                <a href='https://twitter.com/python_alc'><FaTwitter /></a>
                <a href='https://t.me/python_alc'><FaTelegram /></a>
                <a href='pyalicante@gmail.com'><FiMail /></a>
                <a href='https://www.youtube.com/watch?v=Om2kcuqvAsM'><FaVideo /></a>
                <a href='https://www.meetup.com/es-ES/python_alc/'><FaMeetup /></a>
                <a href='https://discord.gg/5AZkkC9egw'><FaDiscord /></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonSanSebastián} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python San Sebastián</b>
              <div class="links">
                <a href='https://twitter.com/acpyss'><FaTwitter /></a>
                <a href='https://pyss.org/'><BiWorld /></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonGirona} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Girona</b>
              <div class="links">
                <a href='https://twitter.com/PythonGirona'><FaTwitter /></a>
                <a href='https://pythongirona.cat'><BiWorld /></a>
                <a href='info@pythongirona.cat'><FiMail /></a>
                <a href='https://www.meetup.com/es-ES/PythonGirona/'><FaMeetup /></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonMadrid} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Madrid</b>
              <div class="links">
                <a href='https://twitter.com/python_madrid'><FaTwitter /></a>
                <a href='https://www.python-madrid.es/'><BiWorld /></a>
                <a href='https://www.youtube.com/watch?v=kaJTW_yZDm0'><FaVideo /></a>
                <a href='https://www.meetup.com/python-madrid/'><FaMeetup /></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PyLadiesMadrid} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>PyLadies Madrid</b>
              <div class="links">
                <a href='https://twitter.com/pyladiesmadrid'><FaTwitter /></a>
                <a href='http://madrid.pyladies.com/'><BiWorld /></a>
                <a href='madrid@pyladies.com'><FiMail /></a>
                <a href='https://www.youtube.com/watch?v=2H6wASZfGxQ'><FaVideo /></a>
                <a href='https://www.meetup.com/es-ES/PyLadiesMadrid/'><FaMeetup /></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PyDataMallorca} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>PyData Mallorca</b>
              <div class="links">
                <a href='https://twitter.com/PyDataMallorca'><FaTwitter /></a>
                <a href='https://www.meetup.com/PyData-Mallorca/'><FaMeetup /></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonAlmería} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Almería</b>
              <div class="links">
                <a href='https://www.youtube.com/watch?v=Doub2vARmrc'><FaVideo /></a>
                <a href='https://www.meetup.com/Python-Almeria/'><FaMeetup /></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PyDataSalamanca} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>PyData Salamanca</b>
              <div class="links">
                <a href='https://twitter.com/pydatalabUSAL'><FaTwitter /></a>
                <a href='coordinaciondatalab@gmail.com'><FiMail /></a>
                <a href='https://www.youtube.com/watch?v=WeGSIZ-3SI8'><FaVideo /></a>
                <a href='https://www.meetup.com/es-ES/PyData-Salamanca/'><FaMeetup /></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={ExtrePython} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>ExtrePython</b>
              <div class="links">
                <a href='https://twitter.com/ExtrePython'><FaTwitter /></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonNavarra} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Navarra</b>
              <div class="links">
                <a href='https://twitter.com/pythonnavarra'><FaTwitter /></a>
                <a href='pythonnavarra@gmail.com'><FiMail /></a>
                <a href='https://www.youtube.com/watch?v=C-vdmYFfWck'><FaVideo /></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonMurcia} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Murcia</b>
              <div class="links">
                <a href='https://twitter.com/pythonmurcia'><FaTwitter /></a>
                <a href='https://t.me/pythonmurcia'><FaTelegram /></a>
                <a href='pythonmurcia@gmail.com'><FiMail /></a>
                <a href='https://www.youtube.com/watch?v=BgnbYAZTMDQ'><FaVideo /></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonCórdoba} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Córdoba</b>
              <div class="links">
                <a href='https://www.meetup.com/es-ES/Meetup-de-Python-en-Cordoba/'><FaMeetup /></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PythonCyL} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>PythonCyL</b>
              <div class="links">
                <a href='https://t.me/PyCyL'><FaTelegram /></a>
                <a href='https://www.youtube.com/watch?v=WeGSIZ-3SI8'><FaVideo /></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PyLadiesBarcelona} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>PyLadies Barcelona</b>
              <div class="links">
                <a href='https://twitter.com/PyLadies_BCN'><FaTwitter /></a>
                <a href='https://pybcn.org/pyladies_bcn/about/'><BiWorld /></a>
                <a href='https://www.youtube.com/watch?v=JYCcPr4QW_k'><FaVideo /></a>
                <a href='https://www.meetup.com/PyLadies-BCN/'><FaMeetup /></a>
                <a href='pyladies-bcn@googlegroups.com'><FiMail /></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={MallorcaPython} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>Python Mallorca</b>
              <div class="links">
                <a href='https://twitter.com/MallorcaPython'><FaTwitter /></a>
                <a href='https://www.youtube.com/watch?v=CDmqQBreRmk'><FaVideo /></a>
                <a href='https://www.meetup.com/es-ES/Mallorca-Python-Meetup/'><FaMeetup /></a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker position={PyBCN} icon={customMarkerIcon}>
          <Popup>
            <div class="div-container">
              <b>PyBCN</b>
              <div class="links">
                <a href='https://twitter.com/PyBCN'><FaTwitter /></a>
                <a href='http://pybcn.org/'><BiWorld /></a>
                <a href='pybcn@googlegroups.com'><FiMail /></a>
                <a href='https://www.youtube.com/watch?v=JYCcPr4QW_k'><FaVideo /></a>
                <a href='https://www.meetup.com/es-ES/python-barcelona/'><FaMeetup /></a>
              </div>
            </div>
          </Popup>
        </Marker>
        </MarkerClusterGroup>
      </MapContainer>


    )
  }
}





