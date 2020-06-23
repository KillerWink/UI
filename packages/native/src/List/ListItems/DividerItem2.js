import React from 'react';
import { useTheme } from 'emotion-theming';
import { DividerItem2Wrapper, DividerItem2Text } from './Item.style';

const DividerItem2 = ({ divider2, style }) => {
    const theme = useTheme();
    return (
        <DividerItem2Wrapper theme={theme}>
            <DividerItem2Text align="right">{ divider2 }</DividerItem2Text>
        </DividerItem2Wrapper>
    );
};

export default DividerItem2;
