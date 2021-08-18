// packages
import React from 'react';

// styles
import {ScreenBottom, ScreenImage} from './style';

//components
import Input from './Input';
import ButtonComponent from './Button';
import {StatusBar} from 'react-native';
import {Auth} from '../../Provider/AuthProvider';

export default function LoginComponent() {
  const {handleLogin} = React.useContext(Auth);

  const [email, setEmail] = React.useState<string>('');
  const [password, setPass] = React.useState<string>('');
  const [error, setError] = React.useState<string>('');
  const [errorPass, setErrorPass] = React.useState<string>('');

  const [active, setActive] = React.useState<boolean>();

  const handleKeyBoard = () => {
    setActive(prevState => !prevState);
  };

  const handleSendCredentials = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const trueMail = re.test(String(email).toLowerCase());
    trueMail ? setError('') : setError('invalid email');
    password.length >= 8
      ? setErrorPass('')
      : setErrorPass('must be more than 8 characters');

    if (password.length >= 8 && trueMail) {
      handleLogin ? handleLogin() : null;
    }
  };

  return (
    <ScreenImage source={require('../../../assets/images/samurai.jpeg')}>
      <StatusBar barStyle="light-content" />
      <ScreenBottom height={active ? '100%' : '40%'}>
        <Input
          name="email"
          value={email}
          onChangeText={setEmail}
          onFocus={handleKeyBoard}
          onBlur={handleKeyBoard}
          placeholder="write your email"
          errorMessage={error}
          type="mail"
        />
        <Input
          name="password"
          value={password}
          onChangeText={setPass}
          onBlur={handleKeyBoard}
          onFocus={handleKeyBoard}
          placeholder="Write your pass"
          errorMessage={errorPass}
          type="password"
        />
        <ButtonComponent title="Login" onPress={handleSendCredentials} />
      </ScreenBottom>
    </ScreenImage>
  );
}
