import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ItemWrapper, ItemWrapperButton } from './Item.style';
import {AnimateSelectedItem} from "../../AnimateList";

const Item = ({ item, ListItems, style, setSelected, selectedState, topCorners, bottomCorners = false, lineColor, index, loading, selectedColor, theme }) => {
    const [ selectedStateChild, setSelectedStateChild ] = useState(selectedState);

    useEffect(() => {
        setSelectedStateChild(selectedState ? index : selectedState);
    }, [selectedState]);


    const selectItemManyTimes = (index) => {
        setSelectedStateChild(index);
        setSelected(selectedStateChild, item);
    }

    return (
        <ItemWrapperButton onPress={() => item.active && selectItemManyTimes(index)}>
            <View>
            <ItemWrapper
                loading={loading}
                isActive={item.active}
                theme={theme}
                style={style}
                isSelected={selectedStateChild === index}
                topCorners={topCorners}
                bottomCorners={bottomCorners}
                lineColor={lineColor}
                selectedColor={selectedColor}
            >
                <ListItems {...item} isSelected={selectedStateChild === index} />
            </ItemWrapper>
            </View>
        </ItemWrapperButton>
    );
};

export default Item;
