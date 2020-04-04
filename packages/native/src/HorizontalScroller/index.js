import React from 'react';
import { useTheme } from 'emotion-theming';
import { ScrollView } from 'react-native-gesture-handler';
import { ScrollWrapper } from './HorizontalScroller.style';

const HorizontalScroll = ({ children }) => {
    const theme = useTheme();
    return (
        <ScrollWrapper theme={theme}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                snapToAlignment='start'
                snapToInterval={110}
                contentContainerStyle={{ paddingHorizontal: 20 }}
            >
                { children }
            </ScrollView>
        </ScrollWrapper>

    );
};


export default HorizontalScroll;
