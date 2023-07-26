import { styled } from "styled-components";
import { ParticipateOptionProps } from "../../commons/dto";

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    gap: 1rem;
`

export const Title = styled.span`
    font-size: 2rem;
    font-weight: 600 ;
    color: var(--color-blue-400);
`

export const ContainerChoices = styled.div`
    display: flex;
    justify-content: center;
    align-self: flex-start;
    gap: 1rem;
`

export const SubTitleSelect = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--color-blue-400);
`

export const ContainerOptions = styled.div`
    display: flex;
`

const getColor = (isActive: boolean) => isActive ? '#fafafa' : '#43A838';

const getBackgroudColor = (isActive: boolean) => isActive ? '#43A838' : '#fafafa' ;


export const ItemOption = styled.span<ParticipateOptionProps>`
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    border: 1px solid var(--color-green-400);
    border-radius: .5rem;
    padding: 0 1rem;
    color: ${(props) => getColor(props.isActive)};
    background-color: ${(props) => getBackgroudColor(props.isActive)};
    box-sizing: border-box;
    
    @media (max-width: 768px) {
        font-size: 0.9rem;
        padding: 0.5rem;
    }
`

export const ContaineForm = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    width: 100%;
    border-color: var(--color-green-400);
    padding: 2rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
`