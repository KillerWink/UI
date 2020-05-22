import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import { H3 } from './Text.style';

const H3Text = ({ children, style, align='left', color }) => {
    const theme = useTheme();
    return (
        <H3 theme={theme} style={style} align={align} color={color}>
            {children}
        </H3>
    );
};

H3Text.propTypes = {
    children: PropTypes.string,
    style: PropTypes.object,
};

export default H3Text;
