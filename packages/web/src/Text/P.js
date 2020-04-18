import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import { P } from './Text.style';

const pText = ({ children, styles }) => {
    const theme = useTheme();
    return (
        <P theme={theme} styles={styles}>
            {children}
        </P>
    );
};

pText.propTypes = {
    children: PropTypes.string,
    styles: PropTypes.object,
};

export default pText;
