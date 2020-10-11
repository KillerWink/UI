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
    align-items: center;
    justify-content: flex-start;
    border-radius: ${ props => props.theme.borderRadiusSmall };
     background-color: ${props => props.theme.color8};
    overflow: hidden;
    ${props => props.style};
`;

export const Input = styled.Text`
    font-family: ${props => props.theme.fontFamily1};
    font-size: ${ props => props.theme.small };
    padding: ${props => props.theme.padding};
    ${props => props.style};
`;
