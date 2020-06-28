import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from './src/pages/homepage';

const navigator = createStackNavigator({
  Home: HomePage,
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Restaurant Search'
  }
});

export default createAppContainer(navigator);


