import { useState, useEffect } from "react"
import { EventDetailsComplete } from "../../components/EventDetailsComplete"
import { Map } from "../../components/Map"
import {  Container } from "./styles"
import { Filter } from "../../components/Filter"
import { IEvent } from "../../commons/dto"
import { api } from "../../services/api"

export const Schedule: React.FC = () => {
    const [events, setEvents] = useState<IEvent[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [states, setStates] = useState<string[]>(['ALL']);
    const [filteredEvents, setFilteredEvents] = useState<IEvent[]>([]);

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

    useEffect(() => {
        const filterEvents = () => {
            if(states.includes('ALL')){
                setFilteredEvents(events);
            } else {
                const filteredEvents = events.filter((event) => states.includes(event.address.state))
                setFilteredEvents(filteredEvents);
            } 
        }

        filterEvents(); 
    }, [states, events])
    const [mapView, setMapView] = useState(false);
    return(
        <Container >
            {
                loading ? <h1>CARREGANDO</h1> : (
                    <>
                        <Filter mapView={mapView} setMapView={setMapView} events={events} states={states} setStates={setStates}/>
                        {
                        mapView ? 
                        <Map events={events}/> :
                        <EventDetailsComplete events={filteredEvents}/>
                        }
                    </>
                )
            }
        </Container>
        
        
    )
}