import React, { useEffect } from 'react';
import { useTheme } from 'emotion-theming';
import { ItemWrapper } from './Item.style';

const Item = ({ item, ListItems, style, setSelected, selectedState, index }) => {
    const theme = useTheme();

    useEffect(() => {
        const { selected } = item;
        selected && setSelected(index, item);
    }, []);


    return (
        <ItemWrapper onPress={() => setSelected(index, item)} isSelected={selectedState} theme={theme} style={style}>
            <ListItems {...item} />
        </ItemWrapper>
    );
};

export default Item;
