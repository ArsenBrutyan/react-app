import React from 'react';
import { StyledErrorContainer } from './styled';
import { useSelector } from 'react-redux';
import { themeModeSelector } from '@/store/selectors';

export const ErrorContent: React.FC = () => {
    const isDarkMode = useSelector(themeModeSelector);

    return (
        <StyledErrorContainer $isDarkMode={isDarkMode}>
            <h1>Oops! Something went wrong.</h1>
            <p>We couldnt find the page youre looking for.</p>
        </StyledErrorContainer>
    );
};
