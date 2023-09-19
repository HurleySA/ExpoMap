import { IMapProps } from '../../commons/dto.ts';
import { EventDetailsCompleteItem } from '../EventDetailsCompleteItem/index.tsx';
import { Container, Title } from "./styles.ts";


export const EventDetailsComplete = ({ events }: IMapProps) => {
    return (
        <Container className="container">
            <Title>Lista de Eventos</Title>
            {events.map(event => (
                <EventDetailsCompleteItem key={event.id} event={event} />
             ) )}
        </Container>
    )
}