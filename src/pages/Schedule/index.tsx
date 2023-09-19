import { useState, useEffect } from "react"
import { EventDetailsComplete } from "../../components/EventDetailsComplete"
import { Map } from "../../components/Map"
import {  Container } from "./styles"
import { Filter } from "../../components/Filter"
import { IEvent } from "../../commons/dto"
import { api } from "../../services/api"

export const Schedule: React.FC = () => {
    const [events, setEvents] = useState<IEvent[]>([]);
    const [loading, setLoading] = useState<boolean>(false)


    const getEvents = async (): Promise<IEvent[]> => {
        try {
            const data = await api.get(`/event`);
            const json = data.data;
            return json;
        } catch (err) {
            return [];
        }
    } 

    useEffect(() => {
        const loadEvents = async () => {
            setLoading(true);
            const events = await getEvents();
            setEvents(events);
            setLoading(false);
        }

        loadEvents();
        
    }, [])
    const [mapView, setMapView] = useState(false);
    return(
        <Container >
            {
                loading ? <h1>CARREGANDO</h1> : (
                    <>
                        <Filter mapView={mapView} setMapView={setMapView} />
                        {
                        mapView ? 
                        <Map events={events}/> :
                        <EventDetailsComplete events={events}/>
                        }
                    </>
                )
            }
        </Container>
        
        
    )
}