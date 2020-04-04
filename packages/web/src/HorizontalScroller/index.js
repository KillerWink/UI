import React from 'react';
import { useTheme } from 'emotion-theming';
import { ScrollWrapper, ScrollItem } from './HorizontalScroller.style';

const HorizontalScroll = ({ preview = 0, children }) => {
    const theme = useTheme();

    return (
        <ScrollWrapper theme={theme}>
            { React.Children.map(children, (child, index) => (
                <ScrollItem>
                    {child}
                </ScrollItem>
            ))}
        </ScrollWrapper>

    );
};


export default HorizontalScroll;
