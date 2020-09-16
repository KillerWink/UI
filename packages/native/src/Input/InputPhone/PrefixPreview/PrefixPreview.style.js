import styled from '@emotion/native';

export const PrefixWrapper = styled.TouchableOpacity`
  height: 60px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

export const PrefixFlag = styled.Image`
  width: 30px;
  height: 30px;
  margin-left: ${(props) => props.theme.padding};
`;

export const PrefixCaret = styled.View`
  width: 30px;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const PrefixNumber = styled.View`
  width: 50px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-left-width: 1px;
  border-color: ${(props) => props.theme.color7};
`;
