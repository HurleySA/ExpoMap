import { styled } from "styled-components";

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
export const ContainerResumeItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

export const ArrowIcon = styled.span`
    font-size: 2rem;

    &:hover {
        cursor: pointer;
    }
`


export const FilterOptionsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.1);
`

export const ConfirmAction = styled.div`
    display: flex;
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
    border-radius: 10px;
    background-color: var(--color-white);
`

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-around;
`