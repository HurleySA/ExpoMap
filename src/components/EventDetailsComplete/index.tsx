import { listEvents } from '../../mocks/event.ts'
import { EventDetailsCompleteItem } from '../EventDetailsCompleteItem/index.tsx';
import { Container, Title } from "./styles.ts";


export const EventDetailsComplete = () => {
    return (
        <Container className="container">
            <Title>Lista de Eventos</Title>
            {listEvents.map(event => (
                <EventDetailsCompleteItem key={event.id} event={event} />
             ) )}
        </Container>
    )
}