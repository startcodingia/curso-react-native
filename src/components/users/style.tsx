import styled from 'styled-components/native';

const List = styled.FlatList`
  width: 100%;
  padding: 24px;
`;

const CardContainer = styled.View`
  width: 100%;
  border-radius: 14px;
  height: 250px;
  padding: 16px;
`;

const CardImage = styled.ImageBackground`
  flex: 1;
`;

const CardName = styled.Text`
  color: white;
  font-weight: 700;
  font-family: 'Montserrat-bold';
  font-size: 18px;
  text-transform: uppercase;
`;

const CardDesc = styled.Text`
  color: white;
  font-weight: 400;
  font-family: 'Montserrat-medium';
  font-size: 12px;
  text-transform: uppercase;
`;

export {List, CardContainer, CardImage, CardDesc, CardName};
