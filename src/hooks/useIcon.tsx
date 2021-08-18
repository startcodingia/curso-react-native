// packages
import React from 'react';

//categories
import {ICONS} from '../constants';

export default function useIcon(icon: string): string {
  const [iconPath, setIconPath] = React.useState('');

  React.useEffect(() => {
    switch (icon) {
      case 'home':
        setIconPath(ICONS.home);
        break;
      case 'categories':
        setIconPath(ICONS.categories);
        break;
      case 'users':
        setIconPath(ICONS.users);
        break;
      case 'settings':
        setIconPath(ICONS.settings);
        break;
      case 'drawer':
        setIconPath(ICONS.drawer);
        break;
      case 'left':
        setIconPath(ICONS.left);
        break;
      case 'camera':
        setIconPath(ICONS.camera);
        break;
      case 'email':
        setIconPath(ICONS.email);
        break;
      case 'password':
        setIconPath(ICONS.lock);
        break;
      default:
        setIconPath(ICONS.home);
    }
  }, [icon]);

  return iconPath;
}
