// import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "./agendamento.css";
import Calendario from "../../components/Calendario";






const center = {
  lat: -23.562904191196683,
  lng: -46.653306260755805,
};

function onLoad(mapInstance: google.maps.Map) {
  console.log("Map loaded:", mapInstance);
}

function onUnmount(mapInstance: google.maps.Map) {
  console.log("Map unmounted:", mapInstance);
}

export default function Agendamento() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA61PXvi8T58vjDdVdvgggh6DWMoAdhUtQ",
  });

  return (
    <>
    <div className="agendamento">
    <h1>Agente seu horario na oficina mais proxima</h1>
    <p>Na HelpCar, você pode escolher a oficina mais próxima de você e verificar os horários disponíveis de forma rápida e prática. Nossa plataforma facilita o agendamento, oferecendo um mapa interativo com as melhores opções de oficinas credenciadas. Após selecionar o local, basta escolher o horário que melhor se encaixa na sua agenda. Tudo em um processo simples e direto, garantindo que sua manutenção seja feita no momento certo e no lugar ideal. Agende agora e cuide do seu veículo com confiança!</p>

    </div>
    <div className="oficinas"> 
      <div className="map">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: "400px", height: "400px" }}
            center={center}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
            <Marker position={center} />
            
            <Marker position={{ lat: -23.57084173264071, lng: -46.6508121577195 }} />

            <Marker position={{ lat: -23.5623904255595, lng: -46.64016638647301 }} /> 
          </GoogleMap>
        ) : (
          <></>
        )}
        
      </div>

      <Calendario/>
      </div>
    
      ;
    </>
  );
}
