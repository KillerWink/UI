import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { ListItemsWrapper, GhostItem } from './Item.style';
import Item from './Item';
import DividerItem1 from './DividerItem1';
import DividerItem2 from './DividerItem2';
import AnimationWrapper from './AnimationWrapper';

const GhostArray = [{},{},{},{},{},{},{},{},{}];
const ListItems = ({ items, loading, ListItems, style, ListFooterComponent, selectedFunction, lineColor, ListHeaderComponent, selectedColor }) => {
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
                    <DividerItem2 lineColor={lineColor} key={`${index}divider2`} divider2={item.Divider2} Divider2Color={item.Divider2Color || false} />
                }

                <Item
                    index={index}
                    ListItems={ListItems}
                    item={item}
                    lineColor={lineColor}
                    setSelected={setSelected}
                    selectedColor={selectedColor}
                    selectedState={selectedState === index}
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
            style={{ paddingHorizontal: 15, marginRight: lineColor ? 5 : 0 }}
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
