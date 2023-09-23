import { useState, useEffect } from 'react'
import {  Container,Title } from "./styles"
import { SolicitationDetailsCompleteItem } from "../../components/SolicitationDetailsCompleteItem"
import { IEventSolicitation } from '../../commons/dto'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'




export const SolicitationsPage: React.FC = () => {
    const [eventSolicitations, setEventSolicitations] = useState<IEventSolicitation[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const storageToken = window.localStorage.getItem('token');
    const navigate = useNavigate() 
    const getEventSolicitations = async (): Promise<IEventSolicitation[]> => {
        try {
            const data = await api.get(`/solicitation`, {
                headers: {
                    Authorization: `Bearer ${storageToken ?? ``}`, 
                }
            });
            const json = data.data;
            return json;
        } catch (err) {
            return [];
        }
    } 

    useEffect(() => {
        const loadEventSolicitations = async () => {
            setLoading(true);
            const events = await getEventSolicitations();
            setEventSolicitations(events.reverse());
            setLoading(false);
        }

        const storageToken = window.localStorage.getItem('token');

        storageToken ? loadEventSolicitations() : navigate("/admin/login")
        
    }, [])
    return(
        <Container className="container">
               {
                loading ? <Title>CARREGANDO</Title> : (
                    <>
                        <Title>SOLICITAÇÕES EM ABERTO</Title>
                        { eventSolicitations.map(solicitation => {
                            return (
                            <SolicitationDetailsCompleteItem key={solicitation.id} eventSolicitation={solicitation} />
                        )})}
                    </>
                )
            }
        </Container>    
    )
}