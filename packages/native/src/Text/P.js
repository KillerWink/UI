import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import { P } from './Text.style';

const pText = ({ children, style, align='left', color }) => {
    const theme = useTheme();
    return (
        <P theme={theme} style={style} align={align} color={color}>
            {children}
        </P>
    );
};

pText.propTypes = {
    children: PropTypes.string,
    style: PropTypes.object,
};

export default pText;
