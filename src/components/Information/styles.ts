import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: var(--color-black);
    font-size: 1rem;

    label {
        font-size: 1rem;
        font-weight: bold;
        color: var(--color-green-400);
        text-align: start;
    }

    p {
        line-height: 1.3rem;
        margin-bottom: 0.5rem;
    }
`