import { styled } from "styled-components";

export const Container = styled.section`
    width: 100%;
`
export const ContainerIntro = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 8rem 5rem;
    color: var(--color-white);
    background-color:var(--color-green-200);
    font-size: 1.5rem;
    font-weight: 600 ;
`

export const Title = styled.p`
    font-size: 3rem;
`

export const YellowSpan = styled.span`
    color: var(--color-yellow-200);
    font-weight: bold;
`

export const BlueSpan = styled.span`
    color: var(--color-blue-400);
    font-weight: bold;
`