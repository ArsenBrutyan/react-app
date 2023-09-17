import { MediaConfig } from 'constants/media-config';
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
        background: #f2f2f2;
    }

    td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 0;
        font-size: 8px;
    }

    @media (min-width: ${MediaConfig.mobilePortraitMax}) {
        th,
        td {
            padding: 8px;
            font-size: 14px;
        }
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
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 2px;

    @media (min-width: ${MediaConfig.mobilePortraitMax}) {
        flex-direction: row;
    }
`;

export const StyledCell = styled.th`
    cursor: pointer;
`;
