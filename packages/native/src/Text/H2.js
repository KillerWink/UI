import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import { H2 } from './Text.style';

const H2Text = ({ children, style, align='left', color }) => {
    const theme = useTheme();
    return (
        <H2 theme={theme} style={style} align={align} color={color}>
            {children}
        </H2>
    );
};

H2Text.propTypes = {
    style: PropTypes.object,
};

export default H2Text;
