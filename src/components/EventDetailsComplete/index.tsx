import { Information } from "../Information"
import { Container, EventItem, Row, Section, TitleSection, FlexItem, ContainerButton } from "./styles"
import { listEvents } from '../../mocks/event.ts'
import { Button } from "../Button/index.tsx";
import { useNavigate } from "react-router-dom";
import { IAddress } from "../../commons/dto.ts";


export const EventDetailsComplete = () => {


    const getAddressString = (address: IAddress): string => {
        const completedAddress = `${address.street}, ${address.neighborhood} ${address.number}`
        return completedAddress;
    }

    const getIsPaidString = (typeEntrance: string) => typeEntrance === 'free' ? 'Não' : 'Sim' ;
    const getHasLounge = (hasLounge: boolean) => hasLounge ? 'Sim' : 'Não' ;
    const navigate = useNavigate()
    return (
        <Container className="container">
            {listEvents.map(event => (
                <EventItem>
                    <Section>
                        <TitleSection>Informações Gerais</TitleSection>
                        <Row>
                            <FlexItem><Information label="Nome do Evento" value={event.name}  /></FlexItem>
                            <FlexItem><Information label="Data Inicio" value={event.startDate} /></FlexItem>
                            <FlexItem><Information label="Data Fim" value={event.endDate} /></FlexItem>
                        </Row>
                        <Row>
                            <FlexItem><Information label="Horário de Abertura" value={event.openningHour} /></FlexItem>
                            <FlexItem><Information label="Horário de Fechamento" value={event.closeHour} /></FlexItem>
                         </Row>
                        <Row>
                            <FlexItem><Information label="Evento pago" value={getIsPaidString(event.typeEntrance)} /></FlexItem>
                            { event.startPaymentEntranceHour && <FlexItem><Information label="Hórario de inicio da entrada paga" value={event.startPaymentEntranceHour} /></FlexItem>}
                            { event.valueEntrance && <FlexItem><Information label="Valor da entrada" value={event.valueEntrance.toString()} /></FlexItem>}
                         </Row>
                    </Section>
                    <Section>
                        <TitleSection>Localização</TitleSection>
                        <Row>
                            <FlexItem><Information label="Cidade" value={event.address.city} /></FlexItem>
                            <FlexItem><Information label="Estado" value={event.address.state} /></FlexItem>
                            <FlexItem><Information label="Endereço" value={getAddressString(event.address)} /></FlexItem>
                        </Row>
                    </Section>
                    { event.valueEntrance && 
                    <Section>
                        <TitleSection>Informações Camarote</TitleSection>
                        <Row>
                            <FlexItem><Information label="Há camarote" value={getHasLounge(event.hasLounge)} /></FlexItem>
                            { event.loungeBuyLink && <FlexItem><Information label="Compre pelo link" value={event.loungeBuyLink} /></FlexItem>}
                        </Row>
                    </Section>
                    }
                    <Section>
                        <TitleSection>Contato Administração</TitleSection>
                        <Row>
                            <FlexItem><Information label="E-mail" value={event.emailAdmin} /></FlexItem>
                            <FlexItem><Information label="Telefone" value={event.phoneAdmin} /></FlexItem>
                        </Row>
                    </Section>
                    <ContainerButton>
                        <Button theme="white" hasBorder  onClick={() => navigate("/list")}>Ver programação</Button> 
                    </ContainerButton>
                </EventItem>
             ) )}
            <Button theme="white" hasBorder  onClick={() => navigate("/list")}>Ver mais</Button> 
        </Container>
    )
}