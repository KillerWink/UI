import React, { useState } from 'react';
import { View } from 'react-native';
import { ListItemsWrapper, LoadMore } from './Item.style';
import Item from './Item';
import DividerItem1 from './DividerItem1';
import DividerItem2 from './DividerItem2';
import AnimateItem from '../../AnimateList';

const ListItems = ({ items, ListItems, style, LoadMoreItem, selectedFunction, loading }) => {
    const [ selectedState, setSelectedState ] = useState(false);

    const setSelected = (idx, item) => {
        setSelectedState(idx);
        selectedFunction(item);
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

    return (
        <ListItemsWrapper style={style}>
            {
                items.map((item, index) => {
                    return (
                        <AnimateItem duration={200 * (index + 1)} key={`${index}container`}>
                            {
                                returnDivider1({ divider1: item.Divider1, index }) &&
                                <DividerItem1 key={`${index}divider1`} divider1={item.Divider1} />
                            }
                            {
                                returnDivider2({ divider2: item.Divider2, index }) &&
                                <DividerItem2 key={`${index}divider2`} divider2={item.Divider2} />
                            }
                            <Item
                                key={index}
                                setSelected={setSelected}
                                index={index}
                                ListItems={ListItems}
                                item={item}
                                loading={loading}
                                selectedState={selectedState === index}
                            />
                        </AnimateItem>
                    )
                })
            }
            {
                LoadMoreItem && (
                    <LoadMore>
                        <LoadMoreItem />
                    </LoadMore>
                )
            }
        </ListItemsWrapper>
    );
};

export default ListItems;
