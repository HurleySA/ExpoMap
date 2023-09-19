import { useState, useEffect } from 'react'
import { listSolicitations } from "../../mocks/solicitation"
import {  Container,Title } from "./styles"
import { SolicitationDetailsCompleteItem } from "../../components/SolicitationDetailsCompleteItem"
import { IEventSolicitation } from '../../commons/dto'
import { api } from '../../services/api'




export const SolicitationsPage: React.FC = () => {
    const [eventSolicitations, setEventSolicitations] = useState<IEventSolicitation[]>([]);
    const [loading, setLoading] = useState<boolean>(false)

    const getEventSolicitations = async (): Promise<IEventSolicitation[]> => {
        try {
            const data = await api.get(`/solicitation`);
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
            setEventSolicitations(events);
            setLoading(false);
        }

        loadEventSolicitations();
        
    }, [])
    return(
        <Container className="container">
               {
                loading ? <Title>CARREGANDO</Title> : (
                    <>
                        <Title>SOLICITAÇÕES EM ABERTO</Title>
                        { eventSolicitations.map(solicitation => {
                            return (
                            <SolicitationDetailsCompleteItem eventSolicitation={solicitation} />
                        )})}
                    </>
                )
            }
        </Container>    
    )
}