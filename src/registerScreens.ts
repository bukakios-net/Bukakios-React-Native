import { Navigation } from 'react-native-navigation';
import Home from './modules/Home/Home';
import History from './modules/History/History';
import Info from './modules/Info/Info';
import Profile from './modules/Profile/Profile';

export default () => {
    Navigation.registerComponent('Home', () => Home);
    Navigation.registerComponent('History', () => History);
    Navigation.registerComponent('Info', () => Info);
    Navigation.registerComponent('Profile', () => Profile);
};
