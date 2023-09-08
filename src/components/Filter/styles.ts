import { styled } from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: start;
    padding: 2rem 0 0 0;
`

export const ActionContainer = styled.div`
    display: flex;
    gap: 1rem;
`

export const IconContainer = styled.span`
    font-size: 2rem;
    color: var(--color-green-200);
`
export const TitleSection = styled.span`
    text-align: left;
    font-weight: bold ;
    color: var(--color-blue-400);
    font-size: 1.5rem;
`