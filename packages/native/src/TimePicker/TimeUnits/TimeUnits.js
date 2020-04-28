import React, { useState } from 'react';
import { View } from 'react-native';
import { TimeUnitsWrapper } from './units.style';
import UnitItem from './UnitItem';
import VariantItem from './VariantItem';

const TimeUnits = ({ units, UnitItems, style }) => {
    const [ selectedState, setSelectedState ] = useState(false);

    const setSelected = (idx) => {
        setSelectedState(idx);
    };

    const returnVariant = ({variant, index}) => {
        if(units[index - 1]){
            return units[index - 1].variant !== variant;
        }
        return true;
    };

    return (
        <TimeUnitsWrapper style={style}>
            {
                units.map((unit, index) => {
                    return (
                        <View key={`${index}container`}>
                        {
                            returnVariant({variant: unit.variant, index}) &&
                            <VariantItem key={`${index}variant`} variant={unit.variant} />
                        }
                        <UnitItem
                            key={index}
                            setSelected={setSelected}
                            index={index}
                            UnitItems={UnitItems}
                            unit={unit}
                            selectedState={selectedState === index}
                        />
                        </View>
                    )
                })
            }
        </TimeUnitsWrapper>
    );
};

export default TimeUnits;
