import { styled } from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: start;
    padding: 2rem 0 0 0;
    margin-bottom: 1rem;
`

export const ActionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 30px;
    gap: 1rem;

    .disable {
        display: none;
    }
    .enable {
        display: flex;
    }
`

export const IconContainer = styled.span`
    font-size: 1rem;
    color: var(--color-green-200);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const TitleSection = styled.span`
    text-align: left;
    font-weight: bold ;
    color: var(--color-blue-400);
    font-size: 1.2rem;
`

export const FilterContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    p {
        font-weight: bold ;
        color: var(--color-blue-400);  
        font-size: 1.2rem; 

    }
`

export const FilterOptionsContainer = styled.div`
    display: flex;
    position: absolute;
    top: 40px;
    left: 0px;
    right: 0px;
    background: none padding-box rgb(255, 255, 255);
    border-top: 1px solid var(--color-black-200);
    padding: 0.5rem 1rem;
    flex-direction: column;

    .checkbox {
        margin-top: 0.2rem;
    }

    @media (max-width: 768px) {
    }
`
