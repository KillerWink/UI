import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import { Span } from './Text.style';

const SpanText = ({ children, style, align='left', color }) => {
    const theme = useTheme();
    return (
        <Span theme={theme} style={style} align={align} color={color}>
            {children}
        </Span>
    );
};

SpanText.propTypes = {
    children: PropTypes.string,
    style: PropTypes.object,
};

export default SpanText;
