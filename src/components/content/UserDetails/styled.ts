import styled from 'styled-components';

export const UserDetailsContainer = styled.div<{ $isDarkMode: boolean }>`
    height: 100vh;
    padding: 15px;
    background: ${({ $isDarkMode }) => ($isDarkMode ? '#000000' : '#ffffff')};
    color: ${({ $isDarkMode }) => ($isDarkMode ? '#ffffff' : '#000000')};
`;

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
        background-color: #f2f2f2;
    }

    td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
`;

export const UserDetailsFooter = styled.div`
    margin-top: 15px;
`;
