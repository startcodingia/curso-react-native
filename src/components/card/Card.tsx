// packages
import React from 'react';

//styles
import {
  ButtonFooter,
  CardBody,
  CardContainer,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardView,
} from './style';

//native components

// components
import {Avatar, Flag} from '../index';

interface Icard {
  name?: string;
  country?: string;
  age?: number;
  sex?: string;
  //points: number
}
export default function Card({name, country, age, sex}: Icard) {
  const [points, setPoints] = React.useState(0);

  return (
    <CardContainer>
      <CardHeader>
        <Avatar />
        <CardView>
          <CardTitle>{name}</CardTitle>
        </CardView>
      </CardHeader>
      <CardBody>
        <CardDescription>
          <CardTitle>
            this is a citizen from {country} that has {age} years old and is a{' '}
            {sex}
          </CardTitle>
          {country === 'Guatemala' ? (
            <Flag
              color="white"
              leftColor="blue"
              rightColor="blue"
              shieldColor="blue"
            />
          ) : (
            <Flag
              color="white"
              leftColor="transparent"
              rightColor="transparent"
              shieldColor="red"
            />
          )}
        </CardDescription>
      </CardBody>
      <CardFooter>
        <ButtonFooter
          onLongPress={() => alert('Long press no permitido')}
          onPress={() => setPoints(points + 1)}>
          <CardTitle>Sumar ++</CardTitle>
        </ButtonFooter>
        <CardTitle>{points}</CardTitle>
        <ButtonFooter onPress={() => setPoints(points - 1)}>
          <CardTitle>restar --</CardTitle>
        </ButtonFooter>
      </CardFooter>
    </CardContainer>
  );
}
