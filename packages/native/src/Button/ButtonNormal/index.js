import React from 'react';
import {ButtonNormal} from './ButtonNormal.style';
import {useTheme} from "emotion-theming";

const BtnNormal = (props) => {
    const { children, styles } = props;
    const theme = useTheme();

    return (
            <ButtonNormal theme={theme} {...props} styles={styles}>
                {children}
            </ButtonNormal>
    );
};

export default BtnNormal;
