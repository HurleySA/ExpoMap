import { Information } from "../Information"
import { Container, EventItem, FlexItem, Row, Title, TitleSection } from "./styles"
import { listEvents } from '../../mocks/event.ts'
import { Button } from "../Button/index.tsx";
import { useNavigate } from "react-router-dom";
import { format, parseISO } from "date-fns";


export const EventDetails = () => {

    const getIsPaidString = (typeEntrance: string) => typeEntrance === 'FREE' ? 'Não' : 'Sim' ;
    const navigate = useNavigate()
    const firstTwoEvents = listEvents.slice(0, 3);
    return (
        <Container className="container">
            <Title>Próximos eventos</Title>
            {firstTwoEvents.map(event => (
                <EventItem key={event.id}>
                     <TitleSection>Informações Gerais</TitleSection>
                    <Row>
                        <FlexItem><Information label="Nome do Evento" value={event.name} /></FlexItem>
                        <FlexItem><Information label="Data Inicio" value={format(parseISO(event.startDate), 'dd/MM/yyyy')} /></FlexItem>
                        <FlexItem><Information label="Data Fim" value={format(parseISO(event.endDate), 'dd/MM/yyyy')} /></FlexItem>
                        <FlexItem><Information label="Cidade" value={event.address.city} /></FlexItem>
                        <FlexItem><Information label="Horário de Abertura" value={event.openningHour} /></FlexItem>
                        <FlexItem><Information label="Horário de Fechamento" value={event.closeHour} /></FlexItem>
                    </Row>
                    <Row>
                     
                    </Row>
                </EventItem>
             ) )}
            <Button theme="white" hasBorder  onClick={() => navigate("/programacao")}>Ver mais</Button> 
        </Container>
    )
}