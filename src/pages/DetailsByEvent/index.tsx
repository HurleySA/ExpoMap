// @ts-nocheck
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import {  Container, Title } from "./styles"
import { EventDetailsCompleteItem } from "../../components/EventDetailsCompleteItem/index.tsx"
import { IEvent } from '../../commons/dto.ts'
import { api } from '../../services/api.ts'



export const DetailsByEvent: React.FC = () => {
    const { id }= useParams();
    const [event, setEvent] = useState<IEvent>();
    const [loading, setLoading] = useState<boolean>(false)

    const getEvent = async (): Promise<IEvent> => {
        try {
            const data = await api.get(`/event/${id}`);
            const json = data.data;
            return json;
        } catch (err) {
            return null;
        }
    } 

    useEffect(() => {
        const loadEvent = async () => {
            setLoading(true);
            const event = await getEvent();
            setEvent(event);
            setLoading(false);
        }

        loadEvent();
    },[])
    return(
        <Container className="container">
              {
                loading ? 
                    <h1>CARREGANDO</h1> 
                : (
                    <>
                       {event ? 
                        <>
                            <Title>Evento: {event.name}</Title>
                            <EventDetailsCompleteItem event={event} />
                        </>
                        : 
                            <p>Evento não encontrado</p>
                        }
                    </>
                )
            }
            
        </Container>
        
        
    )
}