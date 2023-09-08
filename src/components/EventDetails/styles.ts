import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
`

export const Title = styled.span`
    font-size: 2rem;
    font-weight: 600 ;
    text-transform: uppercase;
    color: var(--color-green-400);
    margin-bottom: 1rem;
`

export const EventItem = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
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
    gap: 2rem;
    justify-content: space-between;
    
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