import React, { useState } from 'react';
import { View } from 'react-native';
import { WeekDaysWrapper, LoadMore } from './Week.style';
import WeekItem from './WeekItem';
import MonthItem from './MonthItem';

const WeekDays = ({ weekdays, WeekdayItems, style, LoadMoreItem }) => {
    const [ selectedState, setSelectedState ] = useState(false);

    const setSelected = (idx) => {
        setSelectedState(idx);
    };

    const returnMonth = ({month, index}) => {
        if(weekdays[index - 1]){
            return weekdays[index - 1].Month !== month;
        }
        return true;
    };

    return (
        <WeekDaysWrapper style={style}>
            {
                weekdays.map((weekDay, index) => {
                    return (
                        <View key={`${index}container`}>
                        {
                            returnMonth({month: weekDay.Month, index}) &&
                            <MonthItem key={`${index}month`} month={weekDay.Month} />
                        }
                        <WeekItem
                            key={index}
                            setSelected={setSelected}
                            index={index}
                            WeekdayItems={WeekdayItems}
                            weekDay={weekDay}
                            selectedState={selectedState === index}
                        />
                        </View>
                    )
                })
            }
            {
                LoadMoreItem && (
                    <LoadMore>
                        <LoadMoreItem />
                    </LoadMore>
                )
            }
        </WeekDaysWrapper>
    );
};

export default WeekDays;
