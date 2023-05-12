import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComp = () => {
	const position = [55.781, 49.125];

	return (
		<MapContainer zoom={13} style={{ height: 'calc(100% - 76px)' }}>
			<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
			<Marker position={position}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	);
};

export default MapComp;
