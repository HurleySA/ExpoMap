import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 3rem;
`

export const Title = styled.span`
    font-size: 2rem;
    font-weight: 600 ;
    text-transform: uppercase;
    color: var(--color-blue-400);
    margin-bottom: 1rem;
`

export const Typography = styled.p`
    text-align: center;
    font-size: 1rem;
    line-height: 1.3rem;
    color: var(--color-green-400);
    font-weight: 500;
`

export const ContainerParticipateItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 1rem;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`

export const ParticipateItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 300px;
    width: 300px;
    border: 1px solid var(--color-green-400);
    padding: 2rem;
    border-radius: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 1000px) {
        min-width: 240px;
    }
`

export const TitleParticipateItem = styled.span`
    font-size: 1.5rem;
    font-weight: 500 ;
    text-transform: uppercase;
    color: var(--color-blue-400);
`
