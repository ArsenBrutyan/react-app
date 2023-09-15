import React from 'react';
import { StyledLoader, StyledPreloader } from './styled';

export const Preloader: React.FC = () => {
    return (
        <StyledPreloader>
            <StyledLoader />
        </StyledPreloader>
    );
};
