import React, { useEffect } from 'react';
import { useTheme } from 'emotion-theming';
import { ItemWrapper } from './Item.style';

const Item = ({ item, ListItems, style, setSelected, selectedState, index, loading }) => {
    const theme = useTheme();

    useEffect(() => {
        const { selected } = item;
        selected && setSelected(index, item);
    }, []);


    return (
        <ItemWrapper loading={loading} onPress={() => setSelected(index, item)} isActive={item.active} isSelected={selectedState} theme={theme} style={style}>
            <ListItems {...item} isSelected={selectedState} />
        </ItemWrapper>
    );
};

export default Item;
