import { BlueSpan, Container, ContainerIntro, Title, YellowSpan } from "./styles"

export const About: React.FC = () => {
    return(
        <Container >
            <ContainerIntro>
                <Title>Conheça mais sobre o <YellowSpan>Expo</YellowSpan><BlueSpan>Map</BlueSpan></Title>
                <p>Aqui você encontrará todas as exposições do Nordeste</p>
            </ContainerIntro>

        </Container>
        
        
    )
}