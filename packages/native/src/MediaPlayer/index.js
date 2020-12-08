import React from 'react';
import { useTheme } from 'emotion-theming';
import Video from 'react-native-video';
import ImageLoader from '../ImageLoader';
import {RoundedCorners} from './MediaPlayer.style';

export default function MediaPlayer({cdn_uri = "", type = "image/jpeg"}) {
    const theme = useTheme();
    if (type === 'image/jpeg') {
        return (
            <RoundedCorners theme={theme}>
                <ImageLoader style={{aspectRatio: 3 / 2}} imageUrl={cdn_uri} />
            </RoundedCorners>
        );
    }
    return (
        <RoundedCorners theme={theme}>
            <Video
                source={{uri: cdn_uri}}
                style={{aspectRatio: 3 / 2}}
                repeat={true}
                resizeMode={'cover'}
                muted={true}
                volume={1.0}
                rate={1.0}
                ignoreSilentSwitch={'obey'}
            />
        </RoundedCorners>
    );
}
