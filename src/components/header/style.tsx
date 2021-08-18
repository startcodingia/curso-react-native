import styled from 'styled-components/native';

const HeaderContainer = styled.View<{color?: string}>`
  background-color: ${props => (props.color ? props.color : 'black')};
  width: 100%;
  height: 10%;
  flex-direction: row;
  padding: 24px;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.Text`
  color: white;
  font-weight: 700;
  font-family: 'Montserrat-bold';
  font-size: 16px;
  text-transform: uppercase;
`;

const ButtonHeader = styled.TouchableOpacity``;

export {HeaderContainer, Title, ButtonHeader};
