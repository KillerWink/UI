import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import { H4 } from './Text.style';

const H4Text = ({ children, style, align='left', color }) => {
    const theme = useTheme();
    return (
        <H4 theme={theme} style={style} align={align} color={color}>
            {children}
        </H4>
    );
};

H4Text.propTypes = {
    children: PropTypes.string,
    style: PropTypes.object,
};

export default H4Text;
