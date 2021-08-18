//packages
import React from 'react';

///styles
import {AvatarImg, AvatarContainer} from './style';

//constants
import {IMAGES} from '../../constants';

export default function Avatar() {
  return (
    <AvatarContainer>
      <AvatarImg resizeMode="cover" source={IMAGES.musashi} />
    </AvatarContainer>
  );
}
