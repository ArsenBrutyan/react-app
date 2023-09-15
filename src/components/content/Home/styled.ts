import styled from 'styled-components';

export const StyledHomeContainer = styled.div<{ $isDarkMode: boolean }>`
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

export const StyledFormContainer = styled.div`
    margin-bottom: 15px;
    h4 {
        text-align: center;
    }

    form {
        display: flex;
        gap: 5px;
    }
`;

export const StyledInput = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`;
