//pakcages
import React from 'react';

//core components
import {Text, FlatList, ImageBackground, ActivityIndicator} from 'react-native';

import {gql, useQuery} from '@apollo/client';

//components
import {Header, Screen} from '../components';
import {STYLE} from '../constants';

const GET_AUTHORS = gql`
  query {
    authors {
      id
      name
      title
      picture {
        url
      }
    }
  }
`;

export default function CategoriesScreen({navigation}: any) {
  const {loading, error, data} = useQuery(GET_AUTHORS);

  const renderHero = ({item}: any) => {
    return (
      <ImageBackground
        source={{uri: item.picture.url}}
        style={{width: '100%', height: 300, marginBottom: 15, opacity: 0.9}}
        resizeMode="cover">
        <Text
          style={{
            color: 'white',
            fontWeight: '700',
            bottom: 40,
            fontSize: 24,
            margin: 10,
            position: 'absolute',
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            color: 'white',
            bottom: 0,
            fontSize: 18,
            margin: 10,
            position: 'absolute',
          }}>
          {item.title}
        </Text>
      </ImageBackground>
    );
  };

  if (loading) {
    return <ActivityIndicator color="blue" />;
  }
  if (error) {
    return <Text>Error loading data</Text>;
  }

  const {authors} = data;

  return (
    <Screen>
      <Header
        navigation={navigation}
        actionLeft={() => navigation.openDrawer()}
        title="Categories"
      />
      <FlatList
        keyExtractor={(item: any) => item.id}
        data={authors}
        style={{padding: STYLE.padding.xl}}
        renderItem={renderHero}
      />
    </Screen>
  );
}
