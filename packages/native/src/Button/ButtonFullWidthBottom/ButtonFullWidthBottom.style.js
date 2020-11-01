import styled from '@emotion/native';

export const ButtonNormal = styled.TouchableOpacity`
    flex: 1;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 70px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
    background-color: ${ props => props.active ? props.color : props.theme.color9 };
    ${props => props.style};
`;
