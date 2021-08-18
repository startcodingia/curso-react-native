//pakcages
import React, {useContext} from 'react';
import Geolocation from '@react-native-community/geolocation';

//core components
import {Alert, Button, Text} from 'react-native';

//components
import {Header, Screen} from '../components';
import ButtonComponent from '../components/login/Button';

//Provider
import {Auth} from '../Provider/AuthProvider';

export default function SettingsScreen({navigation}: any) {
  const [location, setLocation] = React.useState<string>('');
  const {handleLogin} = useContext(Auth);

  const showLocation = () => {
    Geolocation.getCurrentPosition(
      data => {
        const position = JSON.stringify(data);
        setLocation(position);
      },
      error => {
        Alert.alert(JSON.stringify(error));
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  };
  const handleLogout = () => {
    handleLogin ? handleLogin() : null;
  };

  return (
    <Screen>
      <Header
        navigation={navigation}
        actionLeft={() => navigation.openDrawer()}
        title="Settings"
      />

      <ButtonComponent title="Show location" onPress={showLocation} />
      <Button title="Logout" onPress={handleLogout} />
      <Text>location {location}</Text>
    </Screen>
  );
}
