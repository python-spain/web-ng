import { MapContainer, TileLayer } from 'react-leaflet'
import React, { useEffect, useState } from 'react'
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import MapData from './MapData';

const LeafletMap = () =>{
  const [mapa, setMapa] = useState()
  const state = {
    lat: 36.014,
    lng: -5.120,
  }
  const position = [state.lat, state.lng]

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMapa(<MapData/>)
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
      });
    }
  }, [])

  return (
    <MapContainer center={position} zoom={5} style={{ height: '400px' }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>
        {mapa}
      </MarkerClusterGroup>
    </MapContainer>
  )
}
export default LeafletMap
