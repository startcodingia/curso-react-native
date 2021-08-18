//packages
import styled from 'styled-components/native';

const FlagContainer = styled.View<{background?: string}>`
  width: 75px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.background ? props.background : 'white')};
`;

const FlagSide = styled.View<{background?: string}>`
  height: 100%;
  width: 30%;
  background-color: ${props => (props.background ? props.background : 'white')};
`;

const Shield = styled.View<{background?: string}>`
  width: 25px;
  height: 25px;
  border-radius: 15px;
  background-color: ${props => (props.background ? props.background : 'white')};
`;

export {FlagContainer, FlagSide, Shield};
