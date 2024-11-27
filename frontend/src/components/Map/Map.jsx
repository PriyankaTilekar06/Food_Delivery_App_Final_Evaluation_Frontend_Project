import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.module.css"; // CSS for custom styling

const CustomMap = () => {
  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "400px", borderRadius: "12px", overflow: "hidden" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            <div className="custom-popup">
              <h2>McDonald's</h2>
              <p>
                <strong>South London</strong>
              </p>
              <p>Tooley St, London Bridge, London SE1 2TF, United Kingdom</p>
              <p>
                <strong>Phone number:</strong> +934443-43
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a href="http://mcdonalds.uk/" target="_blank" rel="noreferrer">
                  http://mcdonalds.uk/
                </a>
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CustomMap;
