import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    `

export const ContainerNotFound = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-green-200);
    padding: 6rem 0;
    color: var(--color-white);
    border-radius: .5rem;
    h1 {
        font-size: 10rem;
    }
    p {
        padding: 2rem;};

`