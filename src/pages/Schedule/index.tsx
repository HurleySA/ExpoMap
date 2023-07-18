import { EventDetailsComplete } from "../../components/EventDetailsComplete"
import { Map } from "../../components/Map"
import {  Container } from "./styles"

export const Schedule: React.FC = () => {
    return(
        <Container >
            <Map/>
            <EventDetailsComplete/>
        </Container>
        
        
    )
}