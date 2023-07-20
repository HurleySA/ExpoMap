import { useParams } from "react-router-dom"
import {  Container, Title } from "./styles"
import { listEvents } from '../../mocks/event.ts'
import { ShowList } from "../../components/ShowList/index.tsx"



export const ScheduleByEvent: React.FC = () => {
    const { id }= useParams();

    const event = listEvents.find((event) => event.id === id)
    return(
        <Container className="container">
            {event ? 
             <>
             <Title>Programação completo {event.name}</Title>
             <ShowList event={event} /> 
             </>
             : 
             <p>Evento não encontrado</p>
            }
        </Container>
        
        
    )
}