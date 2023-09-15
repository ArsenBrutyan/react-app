import React from 'react';
import { StyledButton } from './styled';
import { IButton } from './types';

const Button: React.FC<IButton> = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
