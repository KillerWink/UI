import React, { useState } from 'react';
import { View } from 'react-native';
import { useTheme } from 'emotion-theming';
import { ScrollView } from 'react-native-gesture-handler';
import { ScrollWrapper } from './HorizontalScroller.style';

const HorizontalScroll = ({ preview = 0, children }) => {
    const [childPreviewWidth, setChildPreviewWidth] = useState([]);
    const theme = useTheme();

    const onLayout = (event, index) => {
        const elementWidth = event.nativeEvent.layout.width;
        const previewWidth = elementWidth * ((100 - preview)/100);
        const previewAdjustment = elementWidth - previewWidth;

        setChildPreviewWidth([...childPreviewWidth, elementWidth*(index+1) - previewAdjustment]);
    };

    return (
        <ScrollWrapper theme={theme}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                snapToAlignment='center'
                snapToOffsets={childPreviewWidth}
                contentContainerStyle={{ paddingHorizontal: parseInt(theme.padding) }}
                decelerationRate="fast"
            >
                { React.Children.map(children, (child, index) => (
                    <View onLayout={(event) => onLayout(event, index)}>
                        {child}
                    </View>
                ))}
            </ScrollView>
        </ScrollWrapper>

    );
};


export default HorizontalScroll;
