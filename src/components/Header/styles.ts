import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 100%;
    border-bottom: 2px solid  var(--color-gray-200);
    background-color: bl;
    ul{
        display: flex;
        justify-content: space-between;
        
    }

    li{
        display: flex;
        align-items: center;
        padding: 10px 0px;
    }
    li img { 
        cursor: pointer;;
        width: 150px;
    }
    
    
`

export const ContainerButton =styled.div`
    display: flex;
    font-size: 1.2rem;
    gap: 1rem;
`

export const NavigationWeb = styled.li`
    @media (max-width: 768px) {
        &&& {
            display: none;
        }
    }
`
export const NavigationMobile = styled.li`
    position: relative;
    img {
        width: 40px !important;
        height: 40px;
    }
    @media (min-width: 768px) {
        &&& {
            display: none;
        }
    }
`

interface IDropdownMenu {
    isOpen: boolean,
}

export const DropdownMenu = styled.div<IDropdownMenu>`
    display:  ${(props) => props.isOpen ? 'block' : 'none'};
    position: absolute;
    top: 80px;
    right: 0px;
    background-color: var(--color-white);
    border: 1px solid var(--color-green-400);
    border-radius: 1rem;
`