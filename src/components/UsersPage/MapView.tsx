import 'leaflet/dist/leaflet.css';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { User } from '@/models/model';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default as any).prototype._getIconUrl;
L.Icon.Default.mergeOptions({
   iconRetinaUrl: markerIcon2x,
   iconUrl: markerIcon,
   shadowUrl: markerShadow,
});

interface MapViewProps {
  users: User[];
}

const MapView: React.FC<MapViewProps> = ({ users}) => {
  return (
    <div
     className="w-full h-[800px] rounded-lg overflow-hidden shadow-md"
     style={{ marginLeft: '31rem', top: '36rem', position: 'absolute', width: '30rem', height: '20rem',outline: '3px solid #f3f4f6' }}
    >
      
      <MapContainer
        center={[30, 3]}
        zoom={1}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        {users.map(user => {
          const lat = parseFloat(user.address?.geo?.lat || '0');
          const lng = parseFloat(user.address?.geo?.lng || '0');
          if (!lat || !lng) return null;

          return (
            <Marker key={user.id} position={[lat, lng]}>
              <Popup>
                <strong>{user.name}</strong><br />
                 {user.address?.city}<br />
                 {user.email}<br />
                 {user.phone}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapView;
