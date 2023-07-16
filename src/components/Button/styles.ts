import styled from "styled-components";
import { ButtonThemeProps } from "../../commons/dto";

interface IConfigColor {
        [x:string]: string;
}
interface IConfigColorBackground {
        [x:string]: string;
}

const configColor: IConfigColor = {
        'green': '#43A838',
        'white': '#fafafa',
} 

const configColorBackground: IConfigColorBackground = {
        'green': '#fafafa',
        'white': '#43A838',
} 
const getColor = (theme: string) => configColor[theme] || '#000000'

const getBackgroudColor = (hasBorder: boolean, theme: string) => hasBorder ? configColorBackground[theme] || '#fafafa' : 'transparent' 


export const ButtonStyled = styled.button<ButtonThemeProps>`
        display: flex;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 500;
        border: none;
        border-radius: .5rem;
        color: ${(props) => getColor(props.theme)
        };;
        background-color: ${(props) => getBackgroudColor(props.hasBorder, props.theme)
        };
        box-sizing: border-box;
        padding: .5rem 1rem;
        box-shadow:  ${(props) => props.hasBorder && `0px 5px 10px 0px var(--color-gray-400)`};
`