import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import {  Container, Title } from "./styles"
import { ShowList } from "../../components/ShowList/index.tsx"
import { IEvent } from '../../commons/dto.ts'
import { api } from '../../services/api.ts'



export const ScheduleByEvent: React.FC = () => {
    const { id } = useParams();
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
            {event ? 
             <>
             <Title>Programação de shows {event.name}</Title>
             <ShowList event={event} /> 
             </>
             : 
             <p>Evento não encontrado</p>
            }
        </Container>
        
        
    )
}