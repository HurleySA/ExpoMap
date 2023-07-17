import { ExplainApp } from "../../components/ExplainApp"
import { MotivationApp } from "../../components/MotivationApp"
import { Participate } from "../../components/Participate"
import { BlueSpan, Container, ContainerIntro, Title, YellowSpan } from "./styles"

export const About: React.FC = () => {
    return(
        <Container >
            <ContainerIntro>
                <div className="container">

                <Title>Conheça mais sobre o <YellowSpan>Expo</YellowSpan><BlueSpan>Map</BlueSpan></Title>
                <p>Aqui você encontrará todas as exposições do Nordeste</p>
                </div>
            </ContainerIntro>
            <ExplainApp  />
            <MotivationApp />
            <Participate />
        </Container>
        
        
    )
}