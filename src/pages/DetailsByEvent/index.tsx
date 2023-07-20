import { useParams } from "react-router-dom"
import {  Container, Title } from "./styles"
import { listEvents } from '../../mocks/event.ts'
import { EventDetailsCompleteItem } from "../../components/EventDetailsCompleteItem/index.tsx"



export const DetailsByEvent: React.FC = () => {
    const { id }= useParams();

    const event = listEvents.find((event) => event.id === id)
    return(
        <Container className="container">
            {event ? 
             <>
             <Title>Evento: {event.name}</Title>
             <EventDetailsCompleteItem event={event} />
             </>
             : 
             <p>Evento não encontrado</p>
            }
        </Container>
        
        
    )
}