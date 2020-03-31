import { KillerWink } from '@killerui/shared';
import React, { Component } from 'react';
import Animated from 'react-native-reanimated';
import PropTypes from 'prop-types';

const { call, event, Value } = Animated;

global.reanimatedScroll = new Value(0);

class ScrollView extends Component {

    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.scroller = React.createRef();
        this.onScroll = event(
            [{ nativeEvent: { contentOffset: { y: reanimatedScroll } } }]
        );
    }

    render() {
        return (
            <Animated.ScrollView
                ref={this.scroller}
                scrollEventTrottle={16}
                onScroll={this.onScroll}
            >
                    {this.props.children}
            </Animated.ScrollView>
        );
    }
}

ScrollContainer.propTypes = {
    children: PropTypes.node,
    headerHeight: PropTypes.number,
};

export default ScrollView;
