import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
`

export const EventItem = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    width: 100%;
    border-color: var(--color-green-400);
    padding: 2rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
`
export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Section = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

export const TitleSection = styled.span`
    text-align: left;
    font-weight: bold ;
    color: var(--color-blue-400);
    font-size: 1rem;
`

export const FlexItem = styled.div`
    flex-basis: 30%;
    max-width: 30%;
`;

export const ContainerButton = styled.div`
    width: 200px;
`