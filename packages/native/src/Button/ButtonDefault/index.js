import React from 'react';
import { useTheme } from 'emotion-theming';
import { ButtonWrapper, ButtonContainer } from './ButtonDefault.style';

const ButtonDefault = ({ children, style }) => {
    const theme = useTheme();
    return (
        <ButtonWrapper>
            <ButtonContainer theme={theme} style={style}>
                {children}
            </ButtonContainer>
        </ButtonWrapper>
    );
};

export default ButtonDefault;
