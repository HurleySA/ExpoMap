import { useState } from "react"
import { EventDetailsComplete } from "../../components/EventDetailsComplete"
import { Map } from "../../components/Map"
import {  Container } from "./styles"
import { Filter } from "../../components/Filter"

export const Schedule: React.FC = () => {
    const [mapView, setMapView] = useState(false);
    return(
        <Container >
            <Filter mapView={mapView} setMapView={setMapView} />
            {
            mapView ? 
            <Map/> :
            <EventDetailsComplete/>
            }
        </Container>
        
        
    )
}