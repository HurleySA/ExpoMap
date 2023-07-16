import { Container, ContainerNotFound } from "./styles";

export const NotFound: React.FC = () => {
    return (
        <Container>
            <ContainerNotFound>
                <h1>404</h1>
                <h2>Página não encontrada.</h2>
                <p>Aqui está onde pode procurar a vacina que perdeu:</p>
            </ContainerNotFound>
        </Container>
        
    )
}