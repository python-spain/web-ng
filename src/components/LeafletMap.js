import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



const LeafletMap = () => {

  const position = [51.505, -0.09]


return(
  <div>
  <h1>este es mi mapa</h1>
  <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  </div>
)

}


export default LeafletMap

