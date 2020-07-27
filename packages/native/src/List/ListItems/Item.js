import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useTheme } from 'emotion-theming';
import { ItemWrapper, ItemWrapperButton } from './Item.style';
import {AnimateSelectedItem} from "../../AnimateList";

const Item = ({ item, ListItems, style, setSelected, selectedState, topCorners, bottomCorners = false, lineColor, index, loading, selectedColor }) => {
    const theme = useTheme();
    const [ selectedStateChild, setSelectedStateChild ] = useState(selectedState);
    const [ animateChild, setAnimateChild ] = useState(true);

    useEffect(() => {
        setSelectedStateChild(selectedState ? index : selectedState);
        setAnimateChild(!selectedState);
    }, [selectedState]);

    useEffect(() => {
        selectedStateChild === index && setSelected(selectedStateChild, item);
    }, [selectedStateChild]);

    return (
        <ItemWrapperButton onPress={() => item.active && setSelectedStateChild(index)}>
            <View>
            <AnimateSelectedItem animate={animateChild} selectedState={selectedStateChild === index}>
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
            </AnimateSelectedItem>
            </View>
        </ItemWrapperButton>
    );
};

export default Item;
