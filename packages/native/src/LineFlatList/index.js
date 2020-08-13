import React from 'react';
import { View } from 'react-native';
import { ListWrapper } from './List.style';
import ListLine from './ListLine';
import ListDefault from './ListDefault';

const LineFlatList = ({ children }) => {
    return (
        <ListWrapper>
            {children}
        </ListWrapper>
    );
};

LineFlatList.Line = (props) => {
    return <ListLine {...props} />
};

LineFlatList.Normal = (props) => {
    return <ListDefault {...props} />
};

export default LineFlatList;
