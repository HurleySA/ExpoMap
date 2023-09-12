import { useState } from "react"
import { IEventSolicitation } from "../../commons/dto"
import { ArrowIcon, BorderBox, ContainerResumeInfo, ContainerResumeItem, EventItem, FlexItem, Row, Section, TitleSection } from "./styles"
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { Information } from "../Information"
import { Button } from "../Button"

export interface ISolicitationDetailsCompleteProps {
    eventSolicitation: IEventSolicitation
}

const eventTypeText =  { 
    free: 'Grátis',
    hybrid: 'Pago parcialmente',
    paid: 'Pago'
}

const handleAccept = () => {
    console.log('accept');
}
const handleReject = () => {
    console.log('reject');
}
export const SolicitationDetailsCompleteItem: React.FC<ISolicitationDetailsCompleteProps>  = ({eventSolicitation}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <EventItem key={eventSolicitation.id}>
            <ContainerResumeItem>
                            <ContainerResumeInfo>
                                <TitleSection onClick={() => setIsOpen(!isOpen)}>
                                    {eventSolicitation.id} |
                                </TitleSection>
                                <TitleSection onClick={() => setIsOpen(!isOpen)}>
                                    {eventSolicitation.eventName} |
                                </TitleSection>
                            </ContainerResumeInfo>
                            <ArrowIcon onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? <MdOutlineKeyboardArrowUp/> : <MdOutlineKeyboardArrowDown/>}
                            </ArrowIcon>
                        </ContainerResumeItem> 

                        {isOpen && (<>
                            <BorderBox/>
                            <Section>
                                <Row>
                                    <FlexItem><Information label="Email do solicitante" value={eventSolicitation.emailAdmin}  /></FlexItem>
                                    <FlexItem><Information label="Telefone do solicitante" value={eventSolicitation.phoneAdmin} /></FlexItem>
                                    <FlexItem><Information label="Tipo de evento" value={eventTypeText[eventSolicitation.typeEntrance]} /></FlexItem>
                                    <Information label="Descrição do evento " value={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ac arcu id cursus. Suspendisse ut feugiat enim. Vestibulum eget vulputate justo. Curabitur ullamcorper ante at ipsum lacinia, at ultricies tellus fringilla. Aenean vehicula sapien id ex facilisis, eget rhoncus nulla bibendum. Nullam auctor, risus in egestas hendrerit, nunc libero convallis elit, a fringilla est elit id justo. Morbi nec quam nec massa pellentesque vulputate. Duis ultrices congue enim, eu scelerisque dui rhoncus in. Nullam nec ipsum nec nisi tristique feugiat vel nec lorem. Vestibulum tincidunt, nunc in vestibulum aliquam, est massa varius sem, eu congue justo ante et ex. Nunc sed malesuada est. Vivamus eleifend, arcu ut consectetur faucibus, arcu justo tristique lorem, in viverra ante erat id urna. Praesent rhoncus lectus vitae quam aliquam, in malesuada sapien lobortis. Nulla facilisi."} />
                                </Row>
                                <Row>
                                    <Button theme="white" hasBorder onClick={handleAccept} >ACEITAR</Button > 
                                    <Button theme="green" onClick={handleReject}>RECUSAR</Button > 
                                </Row>
                            </Section>
                            </>)
            }
        </EventItem>

    )
}