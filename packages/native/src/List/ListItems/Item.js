import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'emotion-theming';
import { ItemWrapper } from './Item.style';

const Item = ({ item, ListItems, style, topCorners, bottomCorners = false, lineColor, loading, selectedColor }) => {
    const theme = useTheme();

    return (
            <View>
            <ItemWrapper
                loading={loading}
                isActive={item.active}
                theme={theme}
                style={style}
                topCorners={topCorners}
                bottomCorners={bottomCorners}
                lineColor={lineColor}
                selectedColor={selectedColor}
            >
                <ListItems {...item} />
            </ItemWrapper>
            </View>
    );
};

export default Item;
