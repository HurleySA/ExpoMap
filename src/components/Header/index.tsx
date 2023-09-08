import { ContainerButton, DropdownMenu, HeaderStyle, NavigationMobile, NavigationWeb } from "./styles"
import {  useNavigate, useLocation } from "react-router-dom";
import React, { useState} from "react"
import { Button } from "../Button"

export const Header: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const isHomePage = location.pathname === '/';

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    
    const handleScrollClick = () => {
        const element = document.getElementById('faq');
    
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };

    const getButtonNavigation = () => {
        return (
            <>
                <Button theme="green" onClick={() => navigate("/sobre")} >Sobre</Button>
                <Button theme="green" onClick={() => navigate("/programacao")} >Eventos</Button>
                <Button theme="green" onClick={() => navigate("/participate")} >Participe</Button>
                { isHomePage && <Button theme="green" onClick={handleScrollClick} >FAQ</Button>}
            </>
        )
    }
    return(
        <HeaderStyle>
            <ul className="container">
                <li>
                        <img src="/logo.svg" alt="Logo ExpoMap" onClick={() => navigate("/")} />
                </li>
                <NavigationWeb>
                    <ContainerButton>
                        {getButtonNavigation()}
                    </ContainerButton>
                    
                </NavigationWeb>
                <NavigationMobile >
                    <img src="/hamburger.png" alt="Menu mobile" onClick={toggleMenu} />
                    <DropdownMenu isOpen={isOpen}>
                        {getButtonNavigation()}
                    </DropdownMenu>
                </NavigationMobile>
            </ul>
        </HeaderStyle>
    )
}