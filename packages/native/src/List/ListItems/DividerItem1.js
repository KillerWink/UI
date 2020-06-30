import React from 'react';
import { useTheme } from 'emotion-theming';
import { DividerItem1Wrapper, DividerItem1Text } from './Item.style';

const DividerItem1 = ({ divider1, shouldBeTransparent, lineColor, style }) => {
    const theme = useTheme();

    return (
        <DividerItem1Wrapper lineColor={lineColor} shouldBeTransparent={shouldBeTransparent} theme={theme}>
            <DividerItem1Text>{ divider1 }</DividerItem1Text>
        </DividerItem1Wrapper>
    );
};

export default DividerItem1;
