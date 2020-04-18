import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import { H2 } from './Text.style';

const H2Text = ({ children, styles }) => {
    const theme = useTheme();
    return (
        <H2 theme={theme} styles={styles}>
            {children}
        </H2>
    );
};

H2Text.propTypes = {
    children: PropTypes.string,
    styles: PropTypes.object,
};

export default H2Text;
