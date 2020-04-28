import React from 'react';
import { useTheme } from 'emotion-theming';
import { VariantWrapper, VariantText } from './units.style';

const VariantItem = ({ variant, style }) => {
    const theme = useTheme();

    return (
        <VariantWrapper theme={theme}>
            <VariantText>{ variant }</VariantText>
        </VariantWrapper>
    );
};

export default VariantItem;
