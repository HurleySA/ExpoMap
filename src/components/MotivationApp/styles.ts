import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 0;
    background-color: var(--color-green-200);
    color: var(--color-white);
`

export const Title = styled.span`
    color: var(--color-blue-400);
    font-size: 2rem;
    font-weight: 600 ;
    text-transform: uppercase;
    margin-bottom: 1rem;
`

export const Typography = styled.p`
    text-align: left;
    font-size: 1.2rem;
    line-height: 1.3rem;
    color: var(--color-white);
    margin-bottom: 1.3rem;
    font-weight: 500;
`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 3rem;
`