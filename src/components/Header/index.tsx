import { ContainerButton, HeaderStyle } from "./styles"
import {  useNavigate } from "react-router-dom";
import React from "react"
import { Button } from "../Button"

export const Header: React.FC = () => {
    const navigate = useNavigate()
    return(
        <HeaderStyle>
            <ul className="container">
                <li>
                        <img src="/logo.svg" alt="Logo Vacina Pitang" onClick={() => navigate("/")} />
                </li>
                <li>
                    <ContainerButton>
                        <Button theme="green" onClick={() => navigate("/list")} >Sobre</Button>
                        <Button theme="green" onClick={() => navigate("/list")} >Programação</Button>
                        <Button theme="green" onClick={() => navigate("/list")} >Participe</Button>
                        <Button theme="green" onClick={() => navigate("/list")} >FAQ</Button>
                    </ContainerButton>
                    
                </li>
            </ul>
        </HeaderStyle>
    )
}