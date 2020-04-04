import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useScrollHook from './useScrollHook';
import Header from '../Header';

const HeaderScrollable = ({styles = {}, children}) => {
    const [shouldHideHeader, setShouldHideHeader] = useState(false);

    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 400;

    useScrollHook(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setTimeout(() => {
            setShouldHideHeader(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    return (
        <Header styles={
            {
                transform: `translateY(${shouldHideHeader ? `-100%` : `0%`})`,
                position: 'fixed',
                ...styles
            }
        }>
            {children}
        </Header>
    );
};

HeaderScrollable.propTypes = {
    children: PropTypes.node,
};

export default HeaderScrollable;
