import styled from "styled-components";

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

    @media (max-width: 768px) {
        flex-basis: 40%;
        max-width: 40%;
    }

    @media (max-width: 600px) {
        flex-basis: 100%;
        max-width: 100%;
    }
`;

export const ContainerButton = styled.div`
    width: 200px;
`

export const ContainerResumeItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ArrowIcon = styled.span`
    font-size: 2rem;

    &:hover {
        cursor: pointer;
    }
`

export const ContainerResumeInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
    font-size: 2rem;
`

export const BorderBox = styled.div`
    background-color: var(--color-gray-400);
    height: 1px;
    max-width: 300px;
    margin: 1rem 0;
`