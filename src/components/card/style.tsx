//packages
import styled from 'styled-components/native';

const CardContainer = styled.View`
  height: 250px;
  width: 100%;
  background-color: #d5d0d0;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const CardHeader = styled.View`
  padding-horizontal: 8px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-color: gray;
  border-bottom-width: 1px;
`;

const CardBody = styled.View`
  flex: 3;
`;

const CardDescription = styled.View`
  padding: 8px;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 32px;
`;

const CardFooter = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 8px;
  border-color: grey;
  border-top-width: 1px;
`;

const ButtonFooter = styled.TouchableOpacity``;

const CardView = styled.View``;

const CardTitle = styled.Text``;

export {
  CardContainer,
  CardView,
  CardHeader,
  CardTitle,
  CardBody,
  CardDescription,
  CardFooter,
  ButtonFooter,
};
