import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: var(--color-black);
    font-size: 1rem;

    label {
        font-size: 0.8rem;
        font-weight: bold;
        color: var(--color-green-400);
    }

    p {
        line-height: 1.3rem;
        margin-bottom: 0.5rem;
    }
`