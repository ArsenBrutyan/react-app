import styled from 'styled-components';

export const StyledSwitchContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const StyledSwitchInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`;

export const StyledSlider = styled.span<{ $isDark: boolean }>`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
    background-color: ${({ $isDark }) => ($isDark ? '#2196F3' : '#ccc')};
    border-radius: 30px;
    -webkit-transition: 0.4s;
    transition: 0.4s;

    &:before {
        content: '';
        position: absolute;
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 50%;
        transform: ${({ $isDark }) =>
            $isDark ? 'translateX(26px)' : 'translateX(0)'};
    }
`;
