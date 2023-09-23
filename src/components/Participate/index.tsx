import { useNavigate } from "react-router-dom"
import { Button } from "../Button"
import { Container, ContainerParticipateItems, ParticipateItem, Title, TitleParticipateItem, Typography } from "./styles"


export const Participate = () => {
    const navigate = useNavigate()
    return (
        <Container className="container">
            <Title>Participe</Title>
            <ContainerParticipateItems>
                <ParticipateItem>
                    <TitleParticipateItem>Expositor</TitleParticipateItem>
                    <Typography>Garanta sua participação no evento solicitando que a administração do evento entre em contato.</Typography>
                    <Button theme="white" hasBorder><div onClick={() => navigate('/participate')}>Solicitar participação</div></Button>
                </ParticipateItem>
                <ParticipateItem>
                    <TitleParticipateItem>Administrador de Evento</TitleParticipateItem>
                    <Typography>Você pode solicitar adição do seu evento clicando no botão abaixo.</Typography>
                    <Button theme="white" hasBorder><div onClick={() => navigate('/participate')}>Solicitar adição</div></Button>
                </ParticipateItem>
                <ParticipateItem>
                    <TitleParticipateItem>Visistante</TitleParticipateItem>
                    <Typography>Você pode acessar informações detalhadas dos eventos clicando no botão abaixo</Typography>
                    <Button theme="white" hasBorder><div onClick={() => navigate('/programacao')}>Ver eventos</div></Button>
                </ParticipateItem>
            </ContainerParticipateItems>
        </Container>
    )
}