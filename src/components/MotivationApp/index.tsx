import { Container, ContainerText, Title, Typography } from "./styles"


export const MotivationApp = () => {
    return (
        <Container>
            <ContainerText className="container">
                <Title>Qual a motivação do ExpoMap?</Title>
                <Typography>O ExpoMap é impulsionado por uma motivação clara: impulsionar o turismo, promover a participação de novos expositores e vendedores, e impulsionar o crescimento do setor agropecuário no nordeste do Brasil. </Typography>
                <Typography> Mapeamos e fornecemos informações detalhadas sobre exposições agropecuárias na região, visando atrair turistas, facilitar a participação de expositores e contribuir para o crescimento sustentável do setor.</Typography>
                <Typography>Com o ExpoMap, queremos ajudar os profissionais e entusiastas do setor agropecuário a se manterem informados sobre as exposições que acontecem na região nordeste. Se você está interessado em participar de exposições agropecuárias, explorar novas oportunidades de negócios, ou simplesmente apreciar a riqueza da agropecuária na região nordeste, o ExpoMap é o lugar ideal para começar sua jornada.</Typography>
            </ContainerText>
        </Container>
    )
}