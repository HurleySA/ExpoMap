import styled from "styled-components";

export const AccordionWrapper = styled.section`
    background:  var(--color-green-400);
    opacity: 0.7;
    padding: 5rem 0rem;
    text-align: center;
    transition: all 0.6s ease-in-out;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
export const Title = styled.span`
    font-size: 2rem;
    font-weight: 600 ;
    text-transform: uppercase;
    color: var(--color-white);
    margin-bottom: 1rem;
`