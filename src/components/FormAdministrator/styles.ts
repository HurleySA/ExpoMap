import styled from "styled-components";

export const ContainerShowList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 2rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
`

export const ContainerShow = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 1rem;
`

export const TitleShowDate = styled.p`
        font-size: 1.1rem;
        font-weight: bold;
        color: var(--color-green-400);
`

export const ShowDetailsContainer = styled.div`
    display: flex;
    align-items: center;
    p {
        margin-left: 1rem;
        color: var(--color-blue-400);
        font-weight: 500;
        font-size: 1rem;
    }
`