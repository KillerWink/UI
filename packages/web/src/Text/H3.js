import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import { H3 } from './Text.style';

const H3Text = ({ children, styles }) => {
    const theme = useTheme();
    return (
        <H3 theme={theme} styles={styles}>
            {children}
        </H3>
    );
};

H3Text.propTypes = {
    children: PropTypes.string,
    styles: PropTypes.object,
};

export default H3Text;
