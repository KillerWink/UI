import styled from '@emotion/native';

const backgroundSelector = ({isFocused, hasError, theme}) => {
    if(isFocused){
        return theme.color5;
    }
    return theme.color15;
};

const borderSelector = ({isFocused, hasError, theme}) => {
    if(!hasError){
        return isFocused ? theme.color1 : theme.color16
    }
    return theme.color4;
};

export const InputContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: stretch;
    ${props => props.style};
`;

export const Input = styled.TextInput`
    background-color: ${props => backgroundSelector(props)};
    font-family: ${props => props.theme.fontFamily1};
    border-width: 1px;
    border-color: ${ props => borderSelector(props) };
    border-radius: ${ props => props.theme.borderRadiusSmall };
    font-size: ${ props => props.textSize };
    padding: ${props => props.theme.padding};
    align-self: stretch;
    flex: 6;
    ${props => props.style};
`;
