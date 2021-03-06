import React from 'react';
import { useTheme } from 'emotion-theming';
import Mark from './DividerItemMark';
import { DividerItem2Wrapper, DividerItem2Text, DividerMark } from './Item.style';

const DividerItem2 = ({ lineColor, divider2, Divider2Color, style }) => {
    const theme = useTheme();
    return (
        <DividerItem2Wrapper lineColor={lineColor} theme={theme}>
            { lineColor &&
            <DividerMark>
                <Mark lineColor={lineColor}/>
            </DividerMark>
            }
            <DividerItem2Text lineColor={lineColor} Divider2Color={Divider2Color} align="right">{ divider2 }</DividerItem2Text>
        </DividerItem2Wrapper>
    );
};

export default DividerItem2;
