import React from 'react';
import { useTheme } from 'emotion-theming';
import { TimeWrapper } from './TimePicker.style';
import TimeUnits from './TimeUnits/TimeUnits';

const TimePicker = ({ units, UnitItems, style }) => {
    const theme = useTheme();

    return (
        <TimeWrapper theme={theme} style={style}>
           <TimeUnits units={units} UnitItems={UnitItems} />
        </TimeWrapper>
    );
};

export default TimePicker;
