import React from 'react';
import { useTheme } from 'emotion-theming';
import { MonthWrapper, MonthText } from './Week.style';

const MonthItem = ({ month, style }) => {
    const theme = useTheme();

    return (
        <MonthWrapper theme={theme}>
            <MonthText>{ month }</MonthText>
        </MonthWrapper>
    );
};

export default MonthItem;
