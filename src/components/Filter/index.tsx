import { IFilterProps } from "../../commons/dto"
import { ActionContainer, Container, IconContainer, TitleSection } from "./styles.ts";
import { SiOpenstreetmap } from 'react-icons/si'
import { AiOutlineOrderedList } from 'react-icons/ai'
import { FaFilter } from 'react-icons/fa'


export const Filter: React.FC<IFilterProps> = ({mapView, setMapView }) => {

    return (
        <Container className="container">
            <ActionContainer onClick={() => {setMapView(!mapView)}}>
                <TitleSection>{mapView ? 'Veja em Lista' : 'Veja no Mapa' }</TitleSection>
                <IconContainer >{mapView ? <AiOutlineOrderedList/> : <SiOpenstreetmap/> }</IconContainer>
            </ActionContainer>
            <ActionContainer>
                <IconContainer>
                    <FaFilter/>
                </IconContainer>
            </ActionContainer>
        </Container>
    )

}