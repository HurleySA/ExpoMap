import React from 'react';
import { ButtonStyled } from './styles';
import { IButtonProps } from '../../commons/dto';

export const Button: React.FC<IButtonProps> = ({children, theme,...rest}) => {
    return (
        <ButtonStyled theme={theme} {...rest}> 
            {children}
        </ButtonStyled>
    )
}