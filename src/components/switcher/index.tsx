import React from 'react';
import {
    StyledSwitchContainer,
    StyledSwitchInput,
    StyledSlider,
} from './styled';
import { useSelector } from 'react-redux';
import { themeModeSelector } from '@/store/selectors';
import { ISwitcher } from './types';

export const Switcher: React.FC<ISwitcher> = ({ onClick }) => {
    const isDarkMode = useSelector(themeModeSelector);

    return (
        <StyledSwitchContainer onClick={onClick}>
            <StyledSwitchInput
                type="checkbox"
                id="theme-toggle"
                defaultChecked={isDarkMode}
            />
            <StyledSlider $isDark={isDarkMode} />
        </StyledSwitchContainer>
    );
};
