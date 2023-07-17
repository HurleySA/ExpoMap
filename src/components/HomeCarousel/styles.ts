import styled, { keyframes } from "styled-components";


export const TestImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;

    img {
        border-radius: 10px;
        object-fit: contain;
        height: 100%;
    }
`


export const CarouselBack = styled.div`
background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%), #fafafa;
`

export const ContainerTextSlide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    padding: 3rem 10rem 5rem;
    color: var(--color-white);
    background-color: var(--color-green-400);
    opacity: 0.7;
    font-size: 1.5rem;

    @media (max-width: 768px) {
      padding: 3rem 4rem 5rem;
      font-size: 1.2rem;
    }
    
`

const fadeRightAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const FadeRight = styled.p`
  animation: ${fadeRightAnimation} 0.5s ease-in-out;
`;

const fadeLeftAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const FadeLeft = styled.p`
  animation: ${fadeLeftAnimation} 0.5s ease-in-out;
`;
