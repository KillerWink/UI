import styled from '@emotion/native';

const backgroundSelector = ({isFocused, hasError, theme}) => {
    if(!hasError){
        return isFocused ? theme.color1 : theme.color7
    }
    return theme.color4;
};

export const InputContainer = styled.View`
    ${props => props.style};
`;

export const InputSpacing = styled.View`
 position: absolute;
    z-index:10;
    margin: 0 ${props => props.theme.margin};
    height: 100%;
    align-items: center;
    justify-content: center;
    ${props => props.style};
`;

export const InputBackground = styled.View`
    margin: 0 ${props => props.theme.padding};
    display: ${props => props.hideIcon ? 'none' : 'flex'};
    ${props => props.style};
`;

export const Input = styled.TextInput`
    background-color: ${props => props.isFocused ? props.theme.color5 : props.theme.color7};
    border-width: 3px;
    border-color: ${ props => backgroundSelector(props) };
    border-radius: ${ props => props.theme.borderRadiusSmall };
    font-size: ${ props => props.theme.small };
    padding: ${props => props.theme.padding};
    margin: ${props => props.theme.margin};
    flex: 1;
    ${props => props.style};
`;