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
                    <Typography>Faça um contato com a administração do evento por e-mail ou telefone informados nos dados do evento.</Typography>
                    <Button theme="white" hasBorder><div onClick={() => navigate('/participate')}>Solicitar participação</div></Button>
                </ParticipateItem>
                <ParticipateItem>
                    <TitleParticipateItem>Administrador de Evento</TitleParticipateItem>
                    <Typography>Você pode solicitar adição do seu evento enviando um e-mail com detalhes clicando no link abaixo.</Typography>
                    <Button theme="white" hasBorder><div onClick={() => navigate('/participate')}>Solicitar adição</div></Button>
                </ParticipateItem>
                <ParticipateItem>
                    <TitleParticipateItem>Turista</TitleParticipateItem>
                    <Typography>Você pode acessar informações de programação clicando no botão abaixo</Typography>
                    <Button theme="white" hasBorder><div onClick={() => navigate('/programacao')}>Ver programação</div></Button>
                </ParticipateItem>
            </ContainerParticipateItems>
        </Container>
    )
}