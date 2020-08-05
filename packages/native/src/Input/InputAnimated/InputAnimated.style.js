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

export const InputBackground = styled.View`
    position: absolute;
    z-index:10;
    left: ${props => props.theme.padding};
    top: ${props => props.theme.padding};
    padding: ${props => props.theme.margin};
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
    min-height: 60px;
    ${props => props.style};
`;