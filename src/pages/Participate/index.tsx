import { useState } from 'react'
import {  Container, ContainerChoices, ItemOption, SubTitleSelect, Teste, Title } from "./styles"
import { GetInTouchSimple } from '../../components/FormAdministrator'

export const ParticipateEvent: React.FC = () => {
    const [typeForm, setTypeForm] = useState<'exhibitor' | 'administrator'>('exhibitor')    

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
            <Teste>
                <GetInTouchSimple />  
            </Teste>
        </Container>
        
        
    )
}