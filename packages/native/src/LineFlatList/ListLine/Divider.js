import React from 'react';
import { useTheme } from 'emotion-theming';
import { DividerItemWrapper, DividerItem2Text, DividerMark } from './Item.style';

const DividerItem = ({ Divider, style }) => {
    const theme = useTheme();
    return (
        <DividerItemWrapper theme={theme}>
            <Divider />
        </DividerItemWrapper>
    );
};

export default DividerItem;
