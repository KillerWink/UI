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
    background-color: ${props => props.theme.color5};
    border-width: 3px;
    border-color: ${ props => backgroundSelector(props) };
    border-radius: ${ props => props.theme.borderRadiusSmall };
    font-size: ${ props => props.theme.small };
    padding: ${props => props.theme.padding};
    align-self: stretch;
    flex: 6;
    ${props => props.style};
`;

export const InputButton = styled.View`
    background-color:  ${props => props.theme.color1};
    padding: ${props => props.theme.padding};
    margin-left: ${props => props.theme.margin};
    width: 25px;
    flex: 1;
    border-radius: ${ props => props.theme.borderRadiusSmall };
    align-items: center;
    justify-content: center;
`;