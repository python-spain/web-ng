import { Marker, Popup } from 'react-leaflet'
import React, { Component } from 'react'
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
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



Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const iconMarkup = renderToStaticMarkup(<div class="python-logo"><SiPython /></div>); // Utilizamos renderToStaticMarkup() cuando queremos utilizar React como un simple generador de páginas estáticas, 
const customMarkerIcon = divIcon({                                                    // en este caso LeafletMap se espera un "string" de markup que tiene que renderizar como icono, 
    html: iconMarkup,                                                                 // de esta manera convertimos el JSX en un string
});                                                                                   // Si planeas usar React en el cliente para hacer que el marcado sea interactivo, no uses este método. 
                                                                                      // En su lugar, use renderToString en el servidor y ReactDOM.hydrate() en el cliente.





const MapData = () => {
    const groups = [
        {
            name: 'Python Vigo',
            latitude: 42.19864,
            longitude: -8.7726,
            web: 'http://www.python-vigo.es/',
            twitter: 'https://twitter.com/python_vigo',
            telegram: 'https://t.me/joinchat/AAAAAAfW2-q8miOKsVGjCg',
            email: 'vigo@lists.es.python.org',
        },
        {
            name: 'Python Málaga',
            latitude: 36.7644,
            longitude: -4.4242,
            web: 'https://www.python-malaga.es/',
            meetup: 'https://www.meetup.com/es-ES/python_malaga/',
            twitter: 'https://twitter.com/python_malaga',
            telegram: 'https://t.me/python_malaga',
            email: 'python.malaga@gmail.com',
            video: 'https://www.youtube.com/watch?v=wnhtNjsSLe8',
        },
        {
            name: 'Python Valencia',
            latitude: 39.4227,
            longitude: -0.3525,
            web: 'http://www.meetup.com/es-ES/Python-Valencia-Meetup/',
            twitter: 'https://twitter.com/python_vlc',
        },
        {
            name: 'PyBCN',
            latitude: 41.3929,
            longitude: 2.1404,
            web: 'http://pybcn.org/',
            meetup: 'https://www.meetup.com/es-ES/python-barcelona/',
            twitter: 'https://twitter.com/PyBCN',
            email: 'pybcn@googlegroups.com',
            video: 'https://www.youtube.com/watch?v=JYCcPr4QW_k',
        },
        {
            name: 'Mallorca Python',
            latitude: 39.6602,
            longitude: 2.9862,
            meetup: 'https://www.meetup.com/es-ES/Mallorca-Python-Meetup/',
            twitter: 'https://twitter.com/MallorcaPython',
            video: 'https://www.youtube.com/watch?v=CDmqQBreRmk',
        },
        {
            name: 'Python Sevilla',
            latitude: 37.3766,
            longitude: -5.926,
            web: 'https://python-sevilla.github.io/',
            meetup: 'https://www.meetup.com/es-ES/Python-Sevilla/',
            twitter: 'https://twitter.com/python_sevilla',
            telegram: 'https://t.me/pythonsevilla',
            video: 'https://www.youtube.com/watch?v=x0YF9q1pJcY',
        },
        {
            name: 'Python Granada',
            latitude: 37.1809,
            longitude: -3.5983,
            twitter: 'https://twitter.com/python_granada',
            email: 'pythongranada@gmail.com',
            video: 'https://www.youtube.com/watch?v=pgKXhg0cDyE',
        },
        {
            name: 'Python Canarias',
            latitude: 28.4811,
            longitude: -16.3227,
            web: 'http://pythoncanarias.es/',
            twitter: 'https://twitter.com/pythoncanarias',
            telegram: 'https://t.me/joinchat/AJ7pmT-X0xZVPgWDIzGA-A',
            email: 'info@pythoncanarias.es',
            video: 'https://www.youtube.com/watch?v=6QxgyXe7_RA',
        },
        {
            name: 'Python Alicante',
            latitude: 38.3453,
            longitude: -0.4831,
            meetup: 'https://www.meetup.com/es-ES/python_alc/',
            twitter: 'https://twitter.com/python_alc',
            telegram: 'https://t.me/python_alc',
            discord: 'https://discord.gg/5AZkkC9egw',
            email: 'pyalicante@gmail.com',
            video: 'https://www.youtube.com/watch?v=Om2kcuqvAsM',
        },
        {
            name: 'Python San Sebastián',
            latitude: 43.2918,
            longitude: -1.9889,
            web: 'https://pyss.org/',
            twitter: 'https://twitter.com/acpyss',
        },
        {
            name: 'Python Girona',
            latitude: 41.9830495,
            longitude: 2.8245813,
            web: 'https://pythongirona.cat',
            meetup: 'https://www.meetup.com/es-ES/PythonGirona/',
            twitter: 'https://twitter.com/PythonGirona',
            email: 'info@pythongirona.cat',
        },
        {
            name: 'Python Madrid',
            latitude: 40.41664,
            longitude: -3.70381,
            web: 'https://www.python-madrid.es/',
            meetup: 'https://www.meetup.com/python-madrid/',
            twitter: 'https://twitter.com/python_madrid',
            video: 'https://www.youtube.com/watch?v=kaJTW_yZDm0',
        },
        {
            name: 'PyLadies Madrid',
            latitude: 40.417037,
            longitude: -3.702626,
            web: 'http://madrid.pyladies.com/',
            meetup: 'https://www.meetup.com/es-ES/PyLadiesMadrid/',
            twitter: 'https://twitter.com/pyladiesmadrid',
            email: 'madrid@pyladies.com',
            video: 'https://www.youtube.com/watch?v=2H6wASZfGxQ',
        },
        {
            name: 'PyData Mallorca',
            latitude: 39.6149,
            longitude: 2.9527,
            meetup: 'https://www.meetup.com/PyData-Mallorca/',
            twitter: 'https://twitter.com/PyDataMallorca',
        },
        {
            name: 'Python Almería',
            latitude: 36.842512,
            longitude: -2.457619,
            meetup: 'https://www.meetup.com/Python-Almeria/',
            video: 'https://www.youtube.com/watch?v=Doub2vARmrc',
        },
        {
            name: 'PyData Salamanca',
            latitude: 40.961613,
            longitude: -5.667607,
            meetup: 'https://www.meetup.com/es-ES/PyData-Salamanca/',
            twitter: 'https://twitter.com/pydatalabUSAL',
            email: 'coordinaciondatalab@gmail.com',
            video: 'https://www.youtube.com/watch?v=WeGSIZ-3SI8',
        },
        {
            name: 'ExtrePython',
            latitude: 39.478848,
            longitude: -6.342179,
            twitter: 'https://twitter.com/ExtrePython',
        },
        {
            name: 'Python Navarra',
            latitude: 42.81692,
            longitude: -1.64286,
            twitter: 'https://twitter.com/pythonnavarra',
            email: 'pythonnavarra@gmail.com',
            video: 'https://www.youtube.com/watch?v=C-vdmYFfWck',
        },
        {
            name: 'Python Murcia',
            latitude: 37.990434,
            longitude: -1.133015,
            twitter: 'https://twitter.com/pythonmurcia',
            telegram: 'https://t.me/pythonmurcia',
            email: 'pythonmurcia@gmail.com',
            video: 'https://www.youtube.com/watch?v=BgnbYAZTMDQ',
        },
        {
            name: 'Python Córdoba',
            latitude: 37.883333,
            longitude: -4.766667,
            meetup: 'https://www.meetup.com/es-ES/Meetup-de-Python-en-Cordoba/',
        },
        {
            name: 'Python CyL',
            latitude: 41.652778,
            longitude: -4.723611,
            telegram: 'https://t.me/PyCyL',
            video: 'https://www.youtube.com/watch?v=WeGSIZ-3SI8',
        },
        {
            name: 'PyLadies Barcelona',
            latitude: 41.3959,
            longitude: 2.1404,
            web: 'https://pybcn.org/pyladies_bcn/about/',
            meetup: 'https://www.meetup.com/PyLadies-BCN/',
            twitter: 'https://twitter.com/PyLadies_BCN',
            mail: 'pyladies-bcn@googlegroups.com',
            video: 'https://www.youtube.com/watch?v=JYCcPr4QW_k',
        },
    ]


    return groups.map((group, index) => {
        return < Marker key={index.toString()} position={[group.latitude, group.longitude]} icon={customMarkerIcon} >
            <Popup>
                <div class="div-container">
                    <b>{group.name}</b>
                    <div class="links">
                        {group.twitter ? (<a href={group.twitter}><FaTwitter /></a>) : ''}
                        {group.web ? (<a href={group.web}>< BiWorld /></a>) : ''}
                        {group.telegram ? (<a href={group.telegram}><FaTelegram /></a>) : ''}
                        {group.mail ? (<a href={group.mail}><FiMail /></a>) : ''}
                        {group.meetup ? (<a href={group.meetup}><FaMeetup /></a>) : ''}
                        {group.video ? (<a href={group.video}><FaVideo /></a>) : ''}
                        {group.discord ? (<a href={group.discord}><FaDiscord /></a>) : ''}
                    </div>
                </div>
            </Popup>
        </Marker >

    })


}
export default MapData


