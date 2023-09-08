import { format, parseISO } from "date-fns"
import { IAddress, IEventDetailsCompleteProps } from "../../commons/dto"
import { Button } from "../Button"
import { Information } from "../Information"
import { EventItem, Row, Section, TitleSection, FlexItem, ContainerButton, ContainerResumeItem, ArrowIcon, ContainerResumeInfo, BorderBox } from "./styles"
import { Link } from "react-router-dom"
import { useState } from "react"
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { stateName } from "../../commons/utils"

export const EventDetailsCompleteItem: React.FC<IEventDetailsCompleteProps>  = ({event}) =>  { 

    const [isOpen, setIsOpen] = useState(false);

    const getAddressString = (address: IAddress): string => {
        const completedAddress = `${address.street}, ${address.neighborhood} ${address.number}`
        return completedAddress;
    }

    const getIsPaidString = (typeEntrance: string) => typeEntrance === 'free' ? 'Não' : 'Sim' ;
    const getHasLounge = (hasLounge: boolean) => hasLounge ? 'Sim' : 'Não' ;
    return (
    <EventItem key={event.name}>
       
        
        <ContainerResumeItem>
            <ContainerResumeInfo>
                <TitleSection onClick={() => setIsOpen(!isOpen)}>
                    {event.name} |
                </TitleSection>
                <TitleSection onClick={() => setIsOpen(!isOpen)}>
                    {stateName[event.address.state]} |
                </TitleSection>
                <TitleSection onClick={() => setIsOpen(!isOpen)}>
                    {event.address.city}
                </TitleSection>
            </ContainerResumeInfo>
            <ArrowIcon onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <MdOutlineKeyboardArrowUp/> : <MdOutlineKeyboardArrowDown/>}
            </ArrowIcon>
        </ContainerResumeItem> 
        
        
        {isOpen && (<>
            <BorderBox/>
            <Section>
                <TitleSection>Informações Gerais</TitleSection>
                <Row>
                    <FlexItem><Information label="Nome do Evento" value={event.name}  /></FlexItem>
                    <FlexItem><Information label="Data Inicio" value={format(parseISO(event.startDate), 'dd/MM/yyyy')} /></FlexItem>
                    <FlexItem><Information label="Data Fim" value={format(parseISO(event.endDate), 'dd/MM/yyyy')} /></FlexItem>
                    <FlexItem><Information label="Horário de Abertura" value={event.openningHour} /></FlexItem>
                    <FlexItem><Information label="Horário de Fechamento" value={event.closeHour} /></FlexItem>
                    <FlexItem><Information label="Evento pago" value={getIsPaidString(event.typeEntrance)} /></FlexItem>
                    { event.startPaymentEntranceHour && <FlexItem><Information label="Hórario de inicio da entrada paga" value={event.startPaymentEntranceHour} /></FlexItem>}
                    { event.valueEntrance && <FlexItem><Information label="Valor da entrada" value={`${event.valueEntrance.toString()} reais`} /></FlexItem>}
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
                <Link to={`/programacao/${event.id}`}>
                    <Button theme="white" hasBorder>Ver programação</Button> 
                </Link>
            </ContainerButton></>)
        }
    </EventItem>
    )

}