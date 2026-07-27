import React from 'react';
import {ButtonRounded} from './ButtonRounded.style';
import {useTheme} from "emotion-theming";

const BtnRounded = (props) => {
    const { children, styles } = props;
    const theme = useTheme();

    return (
        <ButtonRounded theme={theme} {...props} styles={styles}>
            {children}
        </ButtonRounded>
    );
};

export default BtnRounded;
