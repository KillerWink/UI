import React from 'react';
import { useTheme } from 'emotion-theming';
import { WeekHelpWrapper, WeekHelpText } from './Week.style';

const WeekHelpItem = ({ week, style }) => {
    const theme = useTheme();
    return (
        <WeekHelpWrapper theme={theme}>
            <WeekHelpText align="right">{ week }</WeekHelpText>
        </WeekHelpWrapper>
    );
};

export default WeekHelpItem;
