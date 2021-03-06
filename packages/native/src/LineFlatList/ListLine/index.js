import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { useTheme } from 'emotion-theming';
import { ListItemsWrapper, GhostItem } from './Item.style';
import Item from './Item';
import DividerItem from './Divider';
import AnimationWrapper from './AnimationWrapper';

const GhostArray = [{},{},{},{},{},{},{},{},{}];
const ListItems = ({ items, loading, ListItems, style, ListFooterComponent, lineColor, ListHeaderComponent, selectedColor }) => {
    const theme = useTheme();

    const returnDivider = ({ dividerName, idx, index, dividerKey }) => {
        if(items[index - 1]){
            return items[index - 1][dividerKey][idx].name !== dividerName;
        }
        return dividerName && true;
    };

    const renderItem = ({item, index}) => {
        return (
            <AnimationWrapper duration={80 * (index + 1 >= 20 ? 1 : index + 1)}>
                {
                    (item.Divider).map((itm, idx) => (
                        returnDivider({ dividerName: itm.name, idx, index, dividerKey: 'Divider' }) &&
                        <DividerItem lineColor={lineColor} key={`${index}divider`} Divider={itm.value} name={itm.name} />
                    ))
                }
                {
                    (item.Divider2).map((itm, idx) => (
                        returnDivider({ dividerName: itm.name, idx, index, dividerKey: 'Divider2' }) &&
                        <DividerItem lineColor={lineColor} key={`${index}divider2`} Divider={itm.value} name={itm.name} />
                    ))
                }
                <Item
                    index={index}
                    ListItems={ListItems}
                    item={item}
                    lineColor={lineColor}
                    theme={theme}
                    selectedColor={selectedColor}
                />

            </AnimationWrapper>
        );
    };

    if(loading) {
        return (
            <ListItemsWrapper style={style}>
                <View style={{ paddingHorizontal: 12}}>
                    { ListHeaderComponent && <ListHeaderComponent /> }
                </View>
                {GhostArray.map((item, index) => (
                    <GhostItem key={index} />
                ))}
            </ListItemsWrapper>
        );
    }

    return (
        <ListItemsWrapper style={style}>
            <FlatList
                data={items}
                style={{ paddingHorizontal: parseInt(theme.padding.replace("px", "")) }}
                renderItem={renderItem}
                keyExtractor={(item, index) => { return index.toString() }}
                ListHeaderComponent={ListHeaderComponent}
                ListFooterComponent={ListFooterComponent}
            />
        </ListItemsWrapper>
    );
};

export default ListItems;
