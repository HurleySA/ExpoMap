import { listEvents } from '../../mocks/event.ts'
import { EventDetailsCompleteItem } from '../EventDetailsCompleteItem/index.tsx';
import { Container } from "./styles.ts";


export const EventDetailsComplete = () => {
    return (
        <Container className="container">
            {listEvents.map(event => (
                <EventDetailsCompleteItem event={event} />
             ) )}
        </Container>
    )
}