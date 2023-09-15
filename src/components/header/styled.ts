import styled from 'styled-components';

export const StyledHeaderContainer = styled.nav<{ $isDarkMode: boolean }>`
    width: 100%;
    padding: 10px;
    background: ${({ $isDarkMode }) => ($isDarkMode ? 'black' : '#e8e8e8')};
    display: flex;
    justify-content: space-between;

    a {
        color: ${({ $isDarkMode }) => ($isDarkMode ? 'white' : 'black')};
    }
`;

export const StyledLinkContainer = styled.div`
    display: flex;
    gap: 50px;

    a {
        font-size: 24px;
    }
`;
