import styled from "styled-components";

export  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--color-white);
    padding: 4rem;
    border-radius: .5rem;
    width: 100%;
    box-shadow: -1px 1px 12px 0px var(--color-gray-400);
    -webkit-box-shadow: -1px 1px 12px 0px var(--color-gray-400);
    -moz-box-shadow: -1px 1px 12px 0px var(--color-gray-400);    
`
export const AccordionWrapper = styled.section`
    background:  var(--color-green-400);
    padding: 5rem 0rem;
    text-align: center;
    transition: all 0.6s ease-in-out;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
