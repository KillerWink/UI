import React, { Component } from 'react';
import Animated from 'react-native-reanimated';
import PropTypes from 'prop-types';

const { event, Value } = Animated;

class ScrollerView extends Component {

    constructor(props) {
        super(props);
        this.scroller = React.createRef();
        this.onScroll = event(
            [{ nativeEvent: { contentOffset: { y: props.globalScroll } } }]
        );
    }

    render() {
        return (
            <Animated.ScrollView
                ref={this.scroller}
                scrollEventTrottle={16}
                onScroll={this.onScroll}
                { ...this.props }
            >
                    {this.props.children}
            </Animated.ScrollView>
        );
    }
}

ScrollerView.propTypes = {
    children: PropTypes.node,
    headerHeight: PropTypes.number,
};

export default ScrollerView;
