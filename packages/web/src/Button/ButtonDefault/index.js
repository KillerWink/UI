import React from 'react';
import { useTheme } from 'emotion-theming';
import { ButtonContainer } from './ButtonDefault.style';

const ButtonDefault = ({ children, style, className }) => {
    const theme = useTheme();

    return (
        <ButtonContainer theme={theme} style={style} className={className}>
            {children}
        </ButtonContainer>
    );
};

export default ButtonDefault;
