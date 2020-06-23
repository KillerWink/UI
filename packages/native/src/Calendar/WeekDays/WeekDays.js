import React, { useState } from 'react';
import { View } from 'react-native';
import { WeekDaysWrapper, LoadMore } from './Week.style';
import WeekItem from './WeekItem';
import MonthItem from './MonthItem';
import WeekHelpItem from './WeekHelpItem';

const WeekDays = ({ weekdays, WeekdayItems, style, LoadMoreItem, setActivitySelectedStep }) => {
    const [ selectedState, setSelectedState ] = useState(false);

    const setSelected = (idx, weekDay) => {
        setSelectedState(idx);
        setActivitySelectedStep(weekDay);
    };

    const returnMonth = ({month, index}) => {
        if(weekdays[index - 1]){
            return weekdays[index - 1].Month !== month;
        }
        return true;
    };

    const returnWeek = ({week, index}) => {
        if(weekdays[index - 1]){
            return weekdays[index - 1].Week !== week;
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
                            {
                                returnWeek({ week: weekDay.Week, index}) &&
                                <WeekHelpItem key={`${index}week`} week={weekDay.Week} />
                            }
                            <WeekItem
                                key={index}
                                setSelected={setSelected}
                                index={index}
                                WeekdayItems={WeekdayItems}
                                weekDay={weekDay}
                                setActivitySelectedStep={setActivitySelectedStep}
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
