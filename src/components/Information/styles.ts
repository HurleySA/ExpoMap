import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: ${props => props.theme.colors.black};
    font-size: 1rem;

    label {
        margin-bottom: 8px;
        font-size: 0.8rem;
        font-weight: bold;
        color: ${props => props.theme.colors.green};
    }

    p {
        line-height: 1.3rem;
        margin-bottom: 1.3rem;
    }
`