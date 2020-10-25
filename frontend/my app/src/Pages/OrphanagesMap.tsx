import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import mapMarkerImg from '../images/map-marker.svg'
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import api from '../services/api';
import mapIcon from '../utils/mapIcon';

// const mapIcon = Leaflet.icon({
//     iconUrl: mapMarkerImg,
//     iconSize: [58, 68],
//     iconAnchor: [29, 68],
//     popupAnchor: [170, 2]
// })

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

useEffect(() => {
    api.get('orphanages').then(response => {
       setOrphanages(response.data)
    })
}, []);

    return (
        <div id="page-map">
            <aside><header>
                <img src={mapMarkerImg} alt=""/>
                <h2>Choose an orphanage in the map</h2>
                <p>Many children await your visit!</p>
                </header>
                <footer>
                    <strong>Manchester</strong>
                    <span>United Kingdom</span>
                </footer>
            </aside>

<Map center={[53.472225,-2.2935023]} zoom={15} style={{width: '100%', height: '100%'}}>
    <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

   
    {orphanages.map(orphanage => {
        return (
            <Marker 
            icon={mapIcon}
            position={[orphanage.latitude,orphanage.longitude]}
            key={orphanage.id}
        >
       
    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
        {orphanage.name}
        <Link to={`/orphanages/${orphanage.id}`}>
            <FiArrowRight size={20} color="#FFF"/>
        </Link>
    </Popup>
    
    </Marker>
        )
    })}


</Map>

    <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
    </Link>


        </div>
    )
} 

export default OrphanagesMap;