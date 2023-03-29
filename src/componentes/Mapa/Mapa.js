import React, { useState, useRef } from "react";
//import BloqueTiendas from "../BloqueTiendas/BloqueTiendas";
import styles from "./mapa.module.css";
//import dynamic from "next/dynamic";
import { Link } from "react-scroll";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl";

/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/
const Mapa = ({ markers }) => {
  const marcador = markers.arrayMarker;
  const [viewState, setViewState] = useState({
    longitude: -0.3793897,
    latitude: 39.470953,
    zoom: 11,
    cooperativeGestures: true,
  });
  const mapRef = useRef();
  const resetMap = () => {
    setShowPopup(false);
    mapRef.current?.flyTo({
      center: [-0.3793897, 39.470953],
      duration: 2000,
      zoom: 11,
    });
  };
  const [showPopup, setShowPopup] = useState(null);
  const toggleTab = () => {
    setShowPopup(true);
  };

  const [showInfo, setShowInfo] = useState({
    id: "",
    longitude: "",
    latitude: "",
    tienda: "",
    telefono: "",
    direccion: "",
    comoLlegar: "",
    nombreTienda: "",
    duration: "",
    zoom: "",
  });
  const [activeId, setActiveId] = useState("");
  const onSelectMarker = (marker) => {
    setShowInfo({
      id: marker.id,
      longitude: marker.longitude,
      latitude: marker.latitude,
      tienda: marker.tienda,
      telefono: marker.telefono,
      direccion: marker.direccion,
      comoLlegar: marker.comoLlegar,
      nombreTienda: marker.nombreTienda,
      duration: marker.duration,
      zoom: marker.zoom,
    });
    mapRef.current?.flyTo({
      center: { lng: marker.longitude, lat: marker.latitude },
      duration: 1500,
      zoom: 11,
    });
    setActiveId(marker.id);
  };
  const numeroDeTiendas = markers.arrayMarker[markers.arrayMarker.length - 1];
  return (
    <section className={styles.contenedorMapa}>
      <div className={styles.contenedorbloqueIzq}>
        <div className={styles.bloqueIzq}>
          <h2>
            Casas de cambio en <span className={styles.linea}>Valencia</span>
          </h2>
          <p>
            Tiendas Quickgold: <span>{numeroDeTiendas.id}</span>
          </p>
        </div>
        <div className={styles.contenedorTiendas}>
          {marcador.map((marker) => (
            <div
              onClick={() => {
                toggleTab();
                onSelectMarker(marker);
              }}
              key={marker.id}
              className={
                activeId === marker.id && showPopup
                  ? `${styles.contenedorInfoTiendaMapa} ${styles.contenedorInfoTiendaMapaActivo}`
                  : ` ${styles.contenedorInfoTiendaMapa}`
              }
            >
              <Link
                onClick={() => {
                  toggleTab();
                  onSelectMarker(marker);
                }}
                to="contenedorMapa"
                smooth={true}
                offset={-110}
                spy={true}
                duration={500}
              >
                <h3>{marker.nombreTienda}</h3>
              </Link>
              <div className={styles.tienda}>
                <p>{marker.direccion}</p>
                <p>Telefono: {marker.telefono}</p>
                <Link
                  to="contenedorMapa"
                  smooth={true}
                  offset={-110}
                  spy={true}
                  duration={500}
                  className={styles.boton_como_llegar}
                >
                  Ver Más
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/*<BloqueTiendas />*/}
      </div>
      <div className={styles.bloqueDer} id="contenedorMapa">
        <Map
          onStyleLoad
          ref={mapRef}
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          className={styles.mapa}
          mapStyle="mapbox://styles/mapbox/streets-v9?optimize=true"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPA}
        >
          <FullscreenControl /> <GeolocateControl /> <NavigationControl />
          <button
            className={styles.reset_map}
            onClick={() => {
              resetMap();
            }}
          >
            Reset Map
          </button>
          {marcador.map((marker) => (
            <Marker
              key={marker.id}
              longitude={marker.longitude}
              latitude={marker.latitude}
              onClick={() => {
                onSelectMarker(marker);
                toggleTab();
              }}
            >
              {showPopup ? (
                <Popup
                  style={{ top: -25, maxWidth: 255 }}
                  longitude={showInfo.longitude}
                  className="popup"
                  latitude={showInfo.latitude}
                  closeOnClick={false}
                  anchor={null}
                  onClose={() => setShowPopup(false)}
                >
                  <div className={styles.contenedor_popuop}>
                    <p className={styles.nombre_ciudad_popup}>
                      {showInfo.nombreTienda}
                    </p>
                    <p className={styles.nombre_ciudad_popup}>Contacto:</p>
                    <a
                      title="Dirección"
                      href={showInfo.comoLlegar}
                      rel="noreferrer"
                      target="_blank"
                      className={styles.direccion_popup}
                    >
                      {showInfo.direccion}
                    </a>
                    <br />
                    <a
                      title="Cómo llegar"
                      href={showInfo.comoLlegar}
                      rel="noreferrer"
                      ƒ
                      className={styles.boton_como_llegar}
                    >
                      Cómo llegar
                    </a>
                    <br></br>
                    <a
                      href={`tel:${showInfo.telefono}`}
                      className={styles.telefono_popup}
                      title="Teléfono"
                    >
                      <span>Llamar: </span>
                      {showInfo.telefono}
                    </a>
                  </div>
                </Popup>
              ) : null}
            </Marker>
          ))}
        </Map>
      </div>
    </section>
  );
};

export default Mapa;
