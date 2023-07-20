import { useParams } from "react-router-dom"
import {  Container, Title } from "./styles"
import { listEvents } from '../../mocks/event.ts'

export const Participate: React.FC = () => {
    const { id }= useParams();

    const event = listEvents.find((event) => event.id === id)
    return(
        <Container className="container">
            {event ? 
             <>

             </>
             : 
             <p>Evento não encontrado</p>
            }
        </Container>
        
        
    )
}