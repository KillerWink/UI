import styled from '@emotion/native';

const backgroundSelector = ({isFocused, hasError, theme}) => {
    if(!hasError){
        return isFocused ? theme.color1 : theme.color7
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
    background-color: ${props => props.theme.color5};
    border-width: 1px;
    border-color: ${ props => backgroundSelector(props) };
    border-radius: ${ props => props.theme.borderRadiusSmall };
    font-size: ${ props => props.theme.small };
    padding: ${props => props.theme.padding};
    margin: 0 ${props => props.theme.margin};
    text-align: center;
    align-self: stretch;
    flex: 6;
    ${props => props.style};
`;
