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
    display: flex;
    position: absolute;
    top: 40px;
    left: 0px;
    right: 0;
    background: none padding-box rgb(255, 255, 255);
    border-top: 1px solid var(--color-black-200);
    padding: 0.5rem 1rem;
    flex-direction: column;

    .checkbox {
        margin-top: 0.2rem;
    }

    @media (max-width: 768px) {
        left: -80px;
    }
`

export const MapContainer = styled.div`
    position: relative;
    width: 700px;
    height: 700px;

    .marker {
        position: relative;
        background-color: blue;
        width: 200px;
        height: 200px;
    }

    
    .disable {
        display: none;
    }
    .enable {
        display: flex;
    }
`

export const FilterItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    span {
        width: 5px;
    }
`

export const ModalMarker = styled.div`
    position: absolute;
    min-width: 200px;
    left: 10px;
    top: 70px;
    text-align: center;
    z-index: 10;
    background: none padding-box rgb(255, 255, 255);
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
        cursor: pointer;
        position: absolute;
        width: 20px;
        height: 20px;
        top: -5px;
        right: -5px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        border-radius: 0.5rem;
        background: none padding-box rgb(255, 255, 255);
        box-shadow: rgba(0, 0, 0, 1) 0px 1px 4px -1px;
    }

    p {
        word-wrap: break-word;
    }
`