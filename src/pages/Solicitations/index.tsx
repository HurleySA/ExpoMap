import { listSolicitations } from "../../mocks/solicitation"
import {  Container,Title } from "./styles"
import { SolicitationDetailsCompleteItem } from "../../components/SolicitationDetailsCompleteItem"




export const SolicitationsPage: React.FC = () => {
    return(
        <Container className="container">
             <Title>SOLICITAÇÕES EM ABERTO</Title>
             

             { listSolicitations.map(solicitation => {
                return (
                   <SolicitationDetailsCompleteItem eventSolicitation={solicitation} />
             )})}


        </Container>    
    )
}