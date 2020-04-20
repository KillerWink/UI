import React from 'react';
import { useTheme } from 'emotion-theming';
import Svg, { Path } from 'react-native-svg';
import { ButtonCornerWrapper, TopRightCorner, TopLeftCorner, BottomRightCorner, BottomLeftCorner } from './ButtonCustomCorners.style';


const ButtonCustomCorners = ({ children, style = { backgroundColor: '#000000' } }) => {
    const theme = useTheme();
    return (
        <ButtonCornerWrapper style={style} theme={theme}>
            <TopRightCorner>
            <Svg height="39" width="39" viewBox="0 0 39 39">
                <Path d="M-25,39 L-25,0 L2.32671289,0.00293198299 C18.3444455,0.0306229334 25.6415403,0.319839527 29.9620532,3.34054617 L30.4581583,3.69536339 C34.9430158,6.97881274 37.6996814,11.163137 38.5667201,20.3342429 L38.6362602,21.1046437 C38.7954818,22.9633314 38.8511568,24.3847925 38.9420522,26.890668 L38.9612085,27.5188617 C39.0186774,29.7703923 39.012292,33.5974384 38.9420522,39 L-25,39 Z" fill={style.backgroundColor} />
            </Svg>
            </TopRightCorner>
            <TopLeftCorner>
                <Svg height="39" width="39" viewBox="0 0 39 39">
                    <Path d="M64,39 L64,0 L36.6732871,0.00293198299 L33.1720706,0.014849083 C19.5643049,0.0903106393 13.0303195,0.549260285 9.03794676,3.34054617 L8.54184171,3.69536339 C4.05698425,6.97881274 1.3003186,11.163137 0.433279918,20.3342429 L0.363739837,21.1046437 L0.308614434,21.7841285 C0.190049107,23.3356407 0.13748125,24.6980269 0.0579478391,26.890668 L0.0387915286,27.5188617 L0.011972694,29.0588419 C-0.0135690532,31.3642314 0.00175599512,34.6779507 0.0579478391,39 L64,39 Z" fill={style.backgroundColor} />
                </Svg>
            </TopLeftCorner>
            <BottomRightCorner>
                <Svg height="39" width="39" viewBox="0 0 39 39">
                    <Path d="M-25,0 L-25,39 L2.32671289,38.997068 L5.82792938,38.9851509 L8.75814247,38.9610394 L10.4611261,38.9375236 C20.9784067,38.7646307 26.4523405,38.1132857 29.9620532,35.6594538 L30.4581583,35.3046366 C34.9430158,32.0211873 37.6996814,27.836863 38.5667201,18.6657571 L38.6362602,17.8953563 L38.6913856,17.2158715 C38.8099509,15.6643593 38.8625188,14.3019731 38.9420522,12.109332 L38.9612085,11.4811383 L38.9880273,9.94115806 L39,7.93108083 L38.9954471,5.65463025 C38.9875069,4.01458219 38.9697409,2.12970544 38.9420522,0 L-25,0 Z" fill={style.backgroundColor} />
                </Svg>
            </BottomRightCorner>
            <BottomLeftCorner>
                <Svg height="39" width="39" viewBox="0 0 39 39">
                    <Path d="M64,0 L64,39 L36.6732871,38.997068 L33.1720706,38.9851509 L30.2418575,38.9610394 L28.5388739,38.9375236 L27.4311806,38.9171082 C17.6331034,38.7158069 12.4223126,38.0256489 9.03794676,35.6594538 L8.54184171,35.3046366 C4.05698425,32.0211873 1.3003186,27.836863 0.433279918,18.6657571 L0.363739837,17.8953563 L0.308614434,17.2158715 C0.190049107,15.6643593 0.13748125,14.3019731 0.0579478391,12.109332 L0.0387915286,11.4811383 L0.011972694,9.94115806 L0,7.93108083 L0.00455292643,5.65463025 L0.0269011485,2.69452359 C0.0352956717,1.84471028 0.0456417348,0.946535751 0.0579478391,0 L64,0 Z" fill={style.backgroundColor} />
                </Svg>
            </BottomLeftCorner>
                {children}
        </ButtonCornerWrapper>
    );
};

export default ButtonCustomCorners;