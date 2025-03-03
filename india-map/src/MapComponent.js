import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; 
import "leaflet/dist/leaflet.css";

// Defining custom icon
const customPin = L.icon({
  iconUrl: "/pin22.png", 
  iconSize: [25, 32],     
  iconAnchor: [16, 32],    
  popupAnchor: [0, -32],     
});

// Listing locations
const locations = [
        { id: 1, name: "Andhra Pradesh", lat: 15.9129, lon: 79.7400 },
        { id: 2, name: "Arunachal Pradesh", lat: 28.2180, lon: 94.7278 },
        { id: 3, name: "Assam", lat: 26.2006, lon: 92.9376 },
        { id: 4, name: "Bihar", lat: 25.0961, lon: 85.3131 },
        { id: 5, name: "Chhattisgarh", lat: 21.2787, lon: 81.8661 },
        { id: 6, name: "Goa", lat: 15.2993, lon: 74.1240 },
        { id: 7, name: "Gujarat", lat: 22.2587, lon: 71.1924 },
        { id: 8, name: "Haryana", lat: 29.0588, lon: 76.0856 },
        { id: 9, name: "Himachal Pradesh", lat: 31.1048, lon: 77.1734 },
        { id: 10, name: "Jharkhand", lat: 23.6102, lon: 85.2799 },
        { id: 11, name: "Karnataka", lat: 15.3173, lon: 75.7139 },
        { id: 12, name: "Kerala", lat: 10.8505, lon: 76.2711 },
        { id: 13, name: "Madhya Pradesh", lat: 23.4733, lon: 77.9470 },
        { id: 14, name: "Maharashtra", lat: 19.7515, lon: 75.7139 },
        { id: 15, name: "Manipur", lat: 24.6637, lon: 93.9063 },
        { id: 16, name: "Meghalaya", lat: 25.4670, lon: 91.3662 },
        { id: 17, name: "Mizoram", lat: 23.1645, lon: 92.9376 },
        { id: 18, name: "Nagaland", lat: 26.1584, lon: 94.5624 },
        { id: 19, name: "Odisha", lat: 20.9517, lon: 85.0985 },
        { id: 20, name: "Punjab", lat: 31.1471, lon: 75.3412 },
        { id: 21, name: "Rajasthan", lat: 27.0238, lon: 74.2179 },
        { id: 22, name: "Sikkim", lat: 27.5330, lon: 88.5122 },
        { id: 23, name: "Tamil Nadu", lat: 11.1271, lon: 78.6569 },
        { id: 24, name: "Telangana", lat: 18.1124, lon: 79.0193 },
        { id: 25, name: "Tripura", lat: 23.9408, lon: 91.9882 },
        { id: 26, name: "Uttar Pradesh", lat: 26.8467, lon: 80.9462 },
        { id: 27, name: "Uttarakhand", lat: 30.0668, lon: 79.0193 },
        { id: 28, name: "West Bengal", lat: 22.9868, lon: 87.8550 },
        { id: 29, name: "Delhi", lat: 28.7041, lon: 77.1025 },
        { id: 30, name: "Puducherry", lat: 11.9416, lon: 79.8083 },
        { id: 31, name: "Jammu & Kashmir", lat: 33.7782, lon: 76.5762 },
        { id: 32, name: "Ladakh", lat: 34.1526, lon: 77.5770 },
        { id: 33, name: "Chandigarh", lat: 30.7333, lon: 76.7794 },
        { id: 34, name: "Lakshadweep", lat: 10.5667, lon: 72.6417 },
        { id: 35, name: "Andaman & Nicobar Islands", lat: 11.7401, lon: 92.6586 },
];

const MapComponent = () => {
  const [selected, setSelected] = useState(null);
  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "100vh", width: "100%" }}>
      
      <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />

      {locations.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.lon]} icon={customPin} eventHandlers={{
          click: () => setSelected(loc),
        }}>
          {selected && selected.id === loc.id && (
            <Popup onClose={() => setSelected(null)}>
            <a 
              href={`https://en.wikipedia.org/wiki/${loc.name.replace(/ /g, "_")}`} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: "none", fontWeight: "bold", color: "blue" }}
            >
              {loc.name}
            </a>
          </Popup>          
          )}
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
