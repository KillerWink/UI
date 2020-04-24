import React from 'react';
import { useTheme } from 'emotion-theming';
import { InputContainer } from './InputDefault.style';

const InputDefault = ({ children, style, className }) => {
    const theme = useTheme();

    return (
        <InputContainer theme={theme} style={style} className={className}>
            {children}
        </InputContainer>
    );
};

export default InputDefault;
