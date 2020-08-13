import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { ListItemsWrapper, GhostItem } from './Item.style';
import AnimationWrapper from './AnimationWrapper';
import Item from './Item';

const GhostArray = [{},{},{},{},{},{},{},{},{}];
const ListItems = ({ items, loading, ListItems, style, ListFooterComponent, selectedFunction, ListHeaderComponent, selectedColor }) => {
    const [ selectedState, setSelectedState ] = useState(false);

    const setSelected = (idx, item) => {
        selectedFunction(item);
        setSelectedState(idx);
    };

    const renderItem = ({item, index}) => {
        return (
            <AnimationWrapper duration={100 * (index + 1 >= 20 ? 1 : index + 1)}>
                <Item
                    index={index}
                    ListItems={ListItems}
                    item={item}
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
