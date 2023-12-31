// @ts-nocheck
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { FormAdministrator } from "../../components/FormAdministrator"
import {  Container,Title } from "./styles"
import { api } from '../../services/api';
import { IEventSolicitation } from '../../commons/dto';




export const CompleteSolicitation: React.FC = () => {
    const { id }= useParams();
    const [solicitation, setSolicitation] = useState<IEventSolicitation>()
    const [loading, setLoading] = useState<boolean>(false)
    const [alreadyExistEvent, setAlreadyExistEvent] = useState<boolean>(false);
    const navigate = useNavigate()

    const getSolicitation = async (id: string | undefined): Promise<IEventSolicitation> => {
        try {
            const storageToken = window.localStorage.getItem('token');
            const data = await api.get(`/solicitation/${id}`,  {
                headers: {
                    Authorization: `Bearer ${storageToken ?? ``}`, 
                }
            });
            const json = data.data;
            return json;
        } catch (err) {
            return null;
        }
    } 

    const getEventBySolicitationId = async (id: string | undefined): Promise<IEventSolicitation> => {
        try {
            const data = await api.get(`/event/solicitation/${id}`);
            const json = data.data;
            return json;
        } catch (err) {
            return null;
        }
    } 
    useEffect(()=> {

        const loadSolicition = async () => {
            setLoading(true);
            const solicitation = await getSolicitation(id);
            if(!solicitation) {
                navigate('/error')
            }else {
                setSolicitation(solicitation);
                const event = await getEventBySolicitationId(id);
                if(event){
                    setAlreadyExistEvent(true)
                }
                setLoading(false);
            }

        }
        
        loadSolicition()
    },[id, navigate]);
    return(
        <Container className="container">
            {
                loading || !solicitation? <Title>CARREGANDO</Title> : alreadyExistEvent ? <Title>EVENTO JÁ CADASTRADO PARA ESSA SOLICITAÇÃO</Title> : (
                    <>
                        <Title>{solicitation?.eventName}</Title>
                        <FormAdministrator solicitation={solicitation} />
                    </>
                )
            }
            
        </Container>    
    )
}