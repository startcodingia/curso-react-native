//pakcages
import React from 'react';
import {launchCamera} from 'react-native-image-picker';

//core components
import {Button, Image, Text} from 'react-native';

//components
import {Header, Screen} from '../components';

export default function CameraScreen({navigation}: any) {
  const [image, setImage] = React.useState<string>('');

  const takePhoto = (res: any) => {
    setImage(res.uri);
  };

  const openCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        maxHeight: 400,
        maxWidth: 400,
        quality: 1,
      },
      takePhoto,
    );
  };

  return (
    <Screen>
      <Header navigation={navigation} title="Camera" />
      <Text>Hola mundo Camera</Text>
      {image ? (
        <Image
          source={{uri: image}}
          style={{
            width: 400,
            height: 400,
          }}
          resizeMode="cover"
        />
      ) : null}
      <Button title="Open camera" onPress={openCamera} />
    </Screen>
  );
}
