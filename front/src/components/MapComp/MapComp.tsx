import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComp = () => {
  const position = [55.7819805, 49.1251343];

  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComp;


// import { useEffect, useRef } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// import styles from './MapComp.module.scss';

// const MapComp = () => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     if (mapRef.current) {
//       const map = L.map('map').setView([51.505, -0.09], 13);

//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
//       }).addTo(map);
//     }
//   }, []);

//   return <div id="map" className="map-containe" ref={mapRef}></div>;
// };

// export default MapComp;