import React from 'react';
import { useTheme } from 'emotion-theming';
import { ItemWrapper } from './Item.style';

const Item = ({ item, ListItems, style, topCorners, bottomCorners = false, loading, selectedColor }) => {
    const theme = useTheme();
    return (
            <ItemWrapper
                loading={loading}
                isActive={item.active}
                theme={theme}
                style={style}
                topCorners={topCorners}
                bottomCorners={bottomCorners}
                selectedColor={selectedColor}
            >
                <ListItems {...item} />
            </ItemWrapper>
    );
};

export default Item;
