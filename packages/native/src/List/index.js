import React from 'react';
import { useTheme } from 'emotion-theming';
import { ListWrapper } from './List.style';
import ListItem from './ListItems/ListItems';

const List = ({ items, ListItems, style, ListFooterComponent, ListHeaderComponent, selectedFunction, loading = false, lineColor = false, selectedColor }) => {
    const theme = useTheme();

    return (
        <ListWrapper theme={theme} style={style}>
           <ListItem items={items} lineColor={lineColor} ListItems={ListItems} ListFooterComponent={ListFooterComponent} ListHeaderComponent={ListHeaderComponent} selectedFunction={selectedFunction} loading={loading} selectedColor={selectedColor} />
        </ListWrapper>
    );
};

export default List;
