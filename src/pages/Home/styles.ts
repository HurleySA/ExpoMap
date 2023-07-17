import styled from "styled-components";

export const HomeStyle = styled.section`
    width: 100%;
`

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 500px;


    img{
        min-width: 300px;
    }
    
`

export const ButtonHome =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 1.2rem;
    gap: 1rem;

    @media (max-width: 600px) {
        padding: .5rem 1.5rem;
    }
`

export const ContainerIntro = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 8rem 10rem;
    color: var(--color-white);
    background-color:var(--color-green-200);
    font-size: 2rem;
    font-weight: 600 ;
    text-transform: uppercase;
`

export const YellowSpan = styled.div`
    color: var(--color-yellow-200);
    padding: 0 0.5rem;
    font-weight: bold;
    font-size: 2.2rem;
    `
export const BlueSpan = styled.span`
    padding: 0 0 0 0.5rem;
    color: var(--color-blue-400);
    font-weight: bold;
    font-size: 2.2rem;
`