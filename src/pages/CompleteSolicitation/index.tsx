import { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { FormAdministrator } from "../../components/FormAdministrator"
import {  Container,Title } from "./styles"




export const CompleteSolicitation: React.FC = () => {
    const { id }= useParams();
    const navigate = useNavigate()
    useEffect(()=> {
        if((+id % 2) !== 0) navigate('/error')
    },[]);
    return(
        <Container className="container">
             <Title>COMPLETE SEU CADASTRO {id}</Title>
             <FormAdministrator/>
        </Container>    
    )
}