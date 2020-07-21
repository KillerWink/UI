import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { ListItemsWrapper, LoadMore, ItemWrapperButton } from './Item.style';
import Item from './Item';
import DividerItem1 from './DividerItem1';
import DividerItem2 from './DividerItem2';
import { AnimateItem, AnimateSelectedItem } from '../../AnimateList';
import AnimationWrapper from './AnimationWrapper';
import Animated from "react-native-reanimated";

const ListItems = ({ items, ListItems, style, ListFooterComponent, selectedFunction, loading, lineColor, ListHeaderComponent }) => {
    const [ selectedState, setSelectedState ] = useState(false);

    const setSelected = (idx, item) => {
        selectedFunction(item);
        setSelectedState(idx);
    };

    const returnDivider1 = ({divider1, index}) => {
        if(items[index - 1]){
            return items[index - 1].Divider1 !== divider1;
        }
        return divider1 && true;
    };

    const returnDivider2 = ({divider2, index}) => {
        if(items[index - 1]){
            return items[index - 1].Divider2 !== divider2;
        }
        return divider2 && true;
    };

    /*
    const returnDivider2Prev = ({divider2, index}) => {
        if(items[index + 1]){
            return items[index + 1].Divider2 !== divider2;
        }
        return divider2 && true;
    };
    */

    const renderItem = ({item, index}) => {
        return (
            <AnimationWrapper duration={100 * (index + 1 >= 20 ? 1 : index + 1)}>
                {
                    returnDivider1({ divider1: item.Divider1, index }) &&
                    <DividerItem1 lineColor={lineColor} key={`${index}divider1`} divider1={item.Divider1} />
                }
                {
                    returnDivider2({ divider2: item.Divider2, index }) &&
                    <DividerItem2 lineColor={lineColor} key={`${index}divider2`} divider2={item.Divider2} />
                }

                            <Item
                                index={index}
                                ListItems={ListItems}
                                item={item}
                                lineColor={lineColor}
                                setSelected={setSelected}
                                selectedState={selectedState === index}
                            />

            </AnimationWrapper>
        );
    };


    return (
        <ListItemsWrapper style={style}>
        <FlatList
            data={items}
            style={{ paddingHorizontal: 15 }}
            renderItem={renderItem}
            keyExtractor={(item, index) => { return index.toString() }}
            extraData={selectedState}
            ListHeaderComponent={ListHeaderComponent}
            ListFooterComponent={ListFooterComponent}
        />
        </ListItemsWrapper>
    );
};

export default ListItems;
