import { Information } from "../Information"
import { Container, EventItem, Row, Title } from "./styles"
import { listEvents } from '../../mocks/event.ts'
import { Button } from "../Button/index.tsx";
import { useNavigate } from "react-router-dom";


export const EventDetails = () => {

    const getIsPaidString = (typeEntrance: string) => typeEntrance === 'free' ? 'Não' : 'Sim' ;
    const navigate = useNavigate()
    return (
        <Container className="container">
            <Title>Próximos eventos</Title>
            {listEvents.map(event => (
                <EventItem>
                    <Row>
                        <Information label="Nome do Evento" value={event.name} />
                        <Information label="Data Inicio" value={event.startDate} />
                        <Information label="Data Fim" value={event.endDate} />
                        <Information label="Cidade" value={event.address.city} />
                    </Row>
                    <Row>
                        <Information label="Horário de Abertura" value={event.openningHour} />
                        <Information label="Horário de Fechamento" value={event.closeHour} />
                        <Information label="Evento pago" value={getIsPaidString(event.typeEntrance)} />
                    </Row>
                </EventItem>
             ) )}
        <Button theme="white" hasBorder  onClick={() => navigate("/list")}>Ver mais</Button>
       
        </Container>
    )
}