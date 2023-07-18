import styled from "styled-components";

export const FilterMapContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FilterContainer = styled.div`
    gap: 1rem;
    position: absolute;
    top: 10px;
    right: 10%;
    z-index: 100;
    background: none padding-box rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;
    cursor: pointer;
    height: 40px;
    color: rgb(86, 86, 86);
    font-size: 18px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
    min-width: 66px;
    @media (max-width: 768px) {
        top: 60px;
        right: 10px;
        padding: 0rem;
        min-width: 40px;
    }
`

export const FilterContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 15px;
    }

    p {
        @media (max-width: 768px) {
            display: none;
        }
    }
`

export const FilterOptionsContainer = styled.div`
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    background: none padding-box rgb(255, 255, 255);
    border-top: 1px solid var(--color-black-200);
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
`

export const MapContainer = styled.div`
    position: relative;
    width: 700px;
    height: 700px;
`

export const FilterItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    span {
        width: 5px;
        d
    }
`