import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import { H1 } from './Text.style';

const H1Text = ({ children, styles }) => {
    const theme = useTheme();
    return (
        <H1 theme={theme} styles={styles}>
            {children}
        </H1>
    );
};

H1Text.propTypes = {
    children: PropTypes.string,
    styles: PropTypes.object,
};

export default H1Text;
