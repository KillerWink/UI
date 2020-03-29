import React from 'react';
import { StatusBar } from 'react-native';
import { DEFAULT_PROPS_STATUS_BAR } from './defaults';

export const StatusBarComponent = ({ options }) => {

    const {
        hidden = DEFAULT_PROPS_STATUS_BAR.hidden,
        barStyle = DEFAULT_PROPS_STATUS_BAR.barStyle,
        backgroundColor = DEFAULT_PROPS_STATUS_BAR.backgroundColor,
    } = options;

    return (
        <StatusBar
            backgroundColor={backgroundColor}
            barStyle={barStyle}
            hidden={hidden}
        />
    );
};
