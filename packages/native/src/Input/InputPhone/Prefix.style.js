import styled from '@emotion/native';

const backgroundSelector = ({isFocused, hasError, theme}) => {
    if(!hasError){
        return isFocused ? theme.color1 : theme.color7
    }
    return theme.color4;
};

export const PrefixInputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-width: 1px;
  border-radius: ${(props) => props.theme.borderRadiusSmall};
  border-color: ${ props => backgroundSelector(props) };
`;

export const PhoneInput = styled.TextInput`
  flex: 1;
  min-height: 80px;
    border-radius: ${ props => props.theme.borderRadiusSmall };
    font-size: ${ props => props.theme.small };
    padding: 0 ${props => props.theme.padding};
`;
