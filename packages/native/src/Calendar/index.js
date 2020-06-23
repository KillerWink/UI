import React from 'react';
import { useTheme } from 'emotion-theming';
import { CalendarWrapper } from './Calendar.style';
import WeekDays from './WeekDays/WeekDays';

const Calendar = ({ weekdays, WeekdayItems, style, LoadMoreItem, setActivitySelectedStep }) => {
    const theme = useTheme();

    return (
        <CalendarWrapper theme={theme} style={style}>
           <WeekDays weekdays={weekdays} WeekdayItems={WeekdayItems} LoadMoreItem={LoadMoreItem} setActivitySelectedStep={setActivitySelectedStep} />
        </CalendarWrapper>
    );
};

export default Calendar;
