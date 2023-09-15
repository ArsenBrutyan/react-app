import React from 'react';

export interface IButton {
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
}
