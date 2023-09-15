import styled from 'styled-components';

export const StyledUserListContainer = styled.div<{ $isDarkMode: boolean }>`
    width: 100%;
    height: 100vh;
    padding: 15px;
    background: ${({ $isDarkMode }) => ($isDarkMode ? '#000000' : '#ffffff')};
    color: ${({ $isDarkMode }) => ($isDarkMode ? '#ffffff' : '#000000')};

    a {
        color: ${({ $isDarkMode }) => ($isDarkMode ? '#ffffff' : '#000000')};
    }
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

export const StyledInput = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 10px;
`;

export const StyledTableFooter = styled.div`
    margin-top: 15px;
`;

export const StyledCell = styled.th`
    cursor: pointer;
`;
