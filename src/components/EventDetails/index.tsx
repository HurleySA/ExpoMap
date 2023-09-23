import { useState, useEffect } from 'react'
import { Information } from "../Information"
import { Container, EventItem, FlexItem, Row, Title, TitleSection } from "./styles"
import { Button } from "../Button/index.tsx";
import { useNavigate } from "react-router-dom";
import { format, parseISO } from "date-fns";
import { IEvent } from "../../commons/dto.ts";
import { api } from '../../services/api.ts';


export const EventDetails = () => {
    const [events, setEvents] = useState<IEvent[]>([]);
    const [loading, setLoading] = useState<boolean>(false)


    const getEvents = async (): Promise<IEvent[]> => {
        try {
            const data = await api.get(`/event`);
            const json = data.data;
            return json;
        } catch (err) {
            return [];
        }
    } 

    useEffect(() => {
        const loadEvents = async () => {
            setLoading(true);
            const events = await getEvents();
            setEvents(events);
            setLoading(false);
        }

        loadEvents();
        
    }, [])

    const getIsPaidString = (typeEntrance: string) => typeEntrance === 'FREE' ? 'Não' : 'Sim' ;
    const navigate = useNavigate()
    const firstTwoEvents = events.slice(0, 2);

    return (
        <Container className="container">
            {
                loading ? <Title>CARREGANDO</Title> : (
                    <>
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
                    </>
                )
            }
         
        </Container>
    )
}