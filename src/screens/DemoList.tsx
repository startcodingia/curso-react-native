// packages
import React from 'react';

//components
import {Screen} from '../../src/components';
import {FlatList, Text} from 'react-native';
import {STYLE} from '../../src/constants';

interface IItem {
  id: string;
  name: string;
}

export default function DemoList() {
  const [superHeroes, setSuperHeroes] = React.useState([]);

  const handleGetHeroes = async () => {
    const response = await fetch(
      'https://akabab.github.io/superhero-api/api/all.json',
    );
    return await response.json();
  };

  React.useEffect(() => {
    handleGetHeroes()
      .then(response => {
        setSuperHeroes(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const renderHero = ({item}: any) => {
    return <Text style={{color: 'black'}}>{item.name}</Text>;
  };

  return (
    <Screen>
      <FlatList
        style={{padding: STYLE.padding.xl}}
        renderItem={renderHero}
        keyExtractor={(item: IItem) => item.id}
        data={superHeroes}
      />
      {/*
        *  <ScrollView>
        {
          superHeroes.map(item => (
            <Card
              key={item.id}
              age={100}
              name={item.name}
              country="Japan"
              sex="male"
            />
          ))
        }
      </ScrollView>
        * */}
    </Screen>
  );
}
