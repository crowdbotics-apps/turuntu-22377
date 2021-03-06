import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile169113Navigator from '../features/UserProfile169113/navigator';
import Tutorial169112Navigator from '../features/Tutorial169112/navigator';
import NotificationList169084Navigator from '../features/NotificationList169084/navigator';
import Settings169083Navigator from '../features/Settings169083/navigator';
import Settings169075Navigator from '../features/Settings169075/navigator';
import UserProfile169073Navigator from '../features/UserProfile169073/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile169113: { screen: UserProfile169113Navigator },
Tutorial169112: { screen: Tutorial169112Navigator },
NotificationList169084: { screen: NotificationList169084Navigator },
Settings169083: { screen: Settings169083Navigator },
Settings169075: { screen: Settings169075Navigator },
UserProfile169073: { screen: UserProfile169073Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
