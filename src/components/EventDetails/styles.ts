import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
`

export const Title = styled.span`
    font-size: 2rem;
    font-weight: 600 ;
    text-transform: uppercase;
    color: ${props => props.theme.colors.green};
    margin-bottom: 1rem;
`

export const EventItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border: 1px solid red;
    width: 100%;
    border-color: ${props => props.theme.colors.green};
    padding: 2rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
`
export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;
`