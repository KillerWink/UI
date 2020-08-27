import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
import PropTypes from 'prop-types';
import {TouchableOpacity} from "react-native-gesture-handler";

const { event, Value } = Animated;
const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

class FlatScrollerView extends Component {

    constructor(props) {
        super(props);
        this.scroller = React.createRef();
        this.onScroll = event(
            [{ nativeEvent: { contentOffset: { y: props.globalScroll } } }]
        );
    }

    render() {
        return (
            <AnimatedFlatlist
                data={this.props.data}
                renderItem={ ({item, index}) => this.props.ListItems(item, index)}
                keyExtractor={(item, index) => { return index.toString() }}
                ref={this.scroller}
                scrollEventTrottle={16}
                onScroll={event(
                    [{ nativeEvent: { contentOffset: { y: this.props.globalScroll } } }]
                )}
                { ...this.props }
            />
        );
    }
}

FlatScrollerView.propTypes = {
    children: PropTypes.node,
    headerHeight: PropTypes.number,
};

export default FlatScrollerView;
