import styled from 'styled-components';

export const StyledErrorContainer = styled.div<{ $isDarkMode: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: ${({ $isDarkMode }) => ($isDarkMode ? '#000000' : '#f8f8f8')};

    h1 {
        font-size: 2rem;
        color: #ff0000;
    }

    p {
        font-size: 1.2rem;
        margin-top: 16px;
        text-align: center;
        color: ${({ $isDarkMode }) => ($isDarkMode ? '#ffffff' : '#333')};
    }
`;
