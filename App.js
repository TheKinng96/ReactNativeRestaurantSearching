import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from './src/pages/homepage';
import DetailPage from './src/pages/detailpage';

const navigator = createStackNavigator({
  Home: HomePage,
  Detail: DetailPage,
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Restaurant Search'
  }
});

export default createAppContainer(navigator);


