import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import { Span } from './Text.style';

const SpanText = ({ children, styles }) => {
    const theme = useTheme();
    return (
        <Span theme={theme} styles={styles}>
            {children}
        </Span>
    );
};

SpanText.propTypes = {
    children: PropTypes.string,
    styles: PropTypes.object,
};

export default SpanText;
