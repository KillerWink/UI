import React, { useEffect } from 'react';
import { useTheme } from 'emotion-theming';
import { WeekItemWrapper } from './Week.style';

const WeekItem = ({ weekDay, WeekdayItems, style, setSelected, selectedState, index }) => {
    const theme = useTheme();

    useEffect(() => {
        const { selected } = weekDay;
        selected && setSelected(index);
    }, []);


    return (
        <WeekItemWrapper onPress={() => setSelected(index)} isSelected={selectedState} isActive={weekDay.active} theme={theme} style={style}>
            <WeekdayItems {...weekDay} />
        </WeekItemWrapper>
    );
};

export default WeekItem;
