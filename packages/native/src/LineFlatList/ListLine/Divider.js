import React from 'react';
import { useTheme } from 'emotion-theming';
import { DividerItemWrapper, DividerItem2Text, DividerMark } from './Item.style';

const DividerItem = ({ Divider, name, style }) => {
    const theme = useTheme();
    return (
        <DividerItemWrapper theme={theme}>
            <Divider name={name} />
        </DividerItemWrapper>
    );
};

export default DividerItem;
