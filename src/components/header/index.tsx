import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { StyledHeaderContainer, StyledLinkContainer } from './styled';
import { Switcher } from 'components/switcher';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '@/store/actions';
import { themeModeSelector } from '@/store/selectors';

export const Header: React.FC = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector(themeModeSelector);

    const onSwitcher = useCallback(() => {
        dispatch(changeTheme());
    }, [dispatch]);

    return (
        <StyledHeaderContainer $isDarkMode={isDarkMode}>
            <StyledLinkContainer>
                <Link to="/home">Home</Link>
                <Link to="/list">List</Link>
            </StyledLinkContainer>
            <Switcher onClick={onSwitcher} />
        </StyledHeaderContainer>
    );
};
