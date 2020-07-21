import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
import PropTypes from 'prop-types';

const { event, Value } = Animated;

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
            <FlatList
                data={this.props.data}
                renderItem={ ({item, index}) => this.props.ListItems(item, index)}
                keyExtractor={(item, index) => { return index.toString() }}
                ref={this.scroller}
                { ...this.props }
                renderScrollComponent={(props) => (
                    <Animated.ScrollView
                        ref={props.ref}
                        scrollEventTrottle={16}
                        { ...props }
                        onScroll={event(
                            [{ nativeEvent: { contentOffset: { y: props.globalScroll } } }]
                        )}
                    />
                )}
            />
        );
    }
}

FlatScrollerView.propTypes = {
    children: PropTypes.node,
    headerHeight: PropTypes.number,
};

export default FlatScrollerView;
