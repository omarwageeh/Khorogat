import { createSwitchNavigator } from "react-navigation";
import startScreen from '../Screens/startScreen';
import SignUp from '../Screens/signupScreen';
import myDrawerNavigator from './MyDrawerNavigator';


const SwitchNavigator = createSwitchNavigator(
    {
      login: startScreen,
      DrawerNavigator: myDrawerNavigator,
      signup: SignUp,
    },
    {
      initialRouteName: "login",
    }
  )

  export default SwitchNavigator;