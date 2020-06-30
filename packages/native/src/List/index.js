import React from 'react';
import { useTheme } from 'emotion-theming';
import { ListWrapper } from './List.style';
import ListItem from './ListItems/ListItems';

const List = ({ items, ListItems, style, LoadMoreItem, selectedFunction, loading = false, lineColor = false }) => {
    const theme = useTheme();

    return (
        <ListWrapper theme={theme} style={style}>
           <ListItem items={items} lineColor={lineColor} ListItems={ListItems} LoadMoreItem={LoadMoreItem} selectedFunction={selectedFunction} loading={loading} />
        </ListWrapper>
    );
};

export default List;
