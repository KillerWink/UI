import React, { useState } from 'react';
import { useTheme } from 'emotion-theming';
import { PaxWrapper, LeftPad, Increment, RightPad } from './Pax.style';
import { H1 } from '../Text';
import Icons from '../Icons';

const Pax = ({ minPax = 1, maxPax = 100, style }) => {
    const theme = useTheme();
    const [pax, setPax] = useState(minPax || 1);

    const incrementLogic = (operator) => {
        const operators = {
            'add': (a) => { return a + 1 },
            'sub': (a) => { return a - 1 }
        };
        const PaxValue = operators[operator](pax);
        (minPax <= PaxValue && PaxValue <= maxPax) && setPax(PaxValue);
    };

    return (
        <PaxWrapper theme={theme} style={style}>
            <LeftPad theme={theme} onPress={() => incrementLogic('sub')}>
                <Icons size="large">
                    <Icons.Back />
                </Icons>
            </LeftPad>
            <Increment theme={theme}>
               <H1>{ pax }</H1>
            </Increment>
            <RightPad theme={theme} onPress={() => incrementLogic('add')}>
                <Icons size="large">
                    <Icons.Star />
                </Icons>
            </RightPad>
        </PaxWrapper>
    );
};

export default Pax;
