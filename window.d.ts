import { IPopupConfig } from './src/types';
import { ICordova } from './src/types/cordova';

export { };

declare global {
  interface Window {
    popupProps?: Partical<IPopupConfig>
    cordova?: ICordova
    StatusBar?: any // cordova-plugin-statusbar
    IonicDeeplink?: any
  }
}
