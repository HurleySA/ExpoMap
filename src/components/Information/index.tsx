import { Container } from "./styles"

interface IInformationProps {
    label: string,
    value: string
}

export const Information = ({ label, value}:IInformationProps) => {

    return (
        <Container>
            <label>{label}</label>
            <p>{value}</p>
        </Container>
    )

}