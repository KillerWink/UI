import React, { useEffect } from 'react';
import { useTheme } from 'emotion-theming';
import { UnitItemWrapper } from './units.style';

const UnitItem = ({ unit, UnitItems, style, setSelected, selectedState, index }) => {
    const theme = useTheme();

    useEffect(() => {
        const { selected } = unit;
        selected && setSelected(index);
    }, []);


    return (
        <UnitItemWrapper onPress={() => setSelected(index)} isSelected={selectedState} theme={theme} style={style}>
            <UnitItems {...unit} />
        </UnitItemWrapper>
    );
};

export default UnitItem;
