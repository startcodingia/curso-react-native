// packages
import React from 'react';

//components
import Screen from '../screen/Screen';
import Card from './Card';
import Header from '../header/Header';

// styles
import {List} from './style';
import {ActivityIndicator} from 'react-native';

interface IItem {
  id: string;
  name: string;
  desc: string;
  image: string;
}

export default function UserComponent({navigation}: any) {
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

  return (
    <Screen>
      <React.Suspense
        fallback={<ActivityIndicator size="large" color="#00ff00" />}>
        <Header
          navigation={navigation}
          actionLeft={() => navigation.openDrawer()}
          title="Users"
        />
        <List
          renderItem={Card}
          keyExtractor={(item: any) => item.id}
          data={superHeroes}
        />
      </React.Suspense>
    </Screen>
  );
}
