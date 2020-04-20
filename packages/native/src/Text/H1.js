import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import { H1 } from './Text.style';

const H1Text = ({ children, style }) => {
    const theme = useTheme();
    return (
        <H1 theme={theme} style={style}>
            {children}
        </H1>
    );
};

H1Text.propTypes = {
    children: PropTypes.string,
    style: PropTypes.object,
};

export default H1Text;
