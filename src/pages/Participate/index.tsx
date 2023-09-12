import { useState } from 'react'
import {  Container, ContainerChoices, ItemOption, SubTitleSelect, ContaineForm, Title } from "./styles"
import { FormAdministrator } from '../../components/FormAdministrator'
import { FormExhibitor } from '../../components/FormExhibitor'
import { useLocation } from 'react-router-dom'
import { FormSolicitation } from '../../components/FormSolicitation'

export const ParticipateEvent: React.FC = () => {
    const [typeForm, setTypeForm] = useState<'exhibitor' | 'administrator'>('exhibitor')    
    const location = useLocation()
    const eventId: string = location?.state?.eventId;
    const toggleTypeForm = () => {
        typeForm === 'exhibitor' ? setTypeForm('administrator') : setTypeForm('exhibitor');
    }
    return(
        <Container className="container">
            <Title>Solitice sua participação</Title>
            <ContainerChoices>
                <SubTitleSelect>Você é ?</SubTitleSelect>
                <ItemOption isActive={typeForm === 'exhibitor'} onClick={toggleTypeForm} >Expositor</ItemOption>  
                <ItemOption isActive={typeForm === 'administrator'} onClick={toggleTypeForm} >Administrador</ItemOption>
            </ContainerChoices>
            <ContaineForm>
                {typeForm === 'exhibitor' ? <FormExhibitor eventId={eventId}/>   : <FormSolicitation />  }
            </ContaineForm>
        </Container>
        
        
    )
}