import styled from 'styled-components';

export const StyledButton = styled.button`
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }

    &:active {
        background-color: #004499;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;
