
* Snippet
``
this.setState(this.initialState);
const routeStack = this.props.navigator.getCurrentRoutes();
this.props.navigator.jumpTo(routeStack[3]);
``

* Navigator Object

``
import {
	StyleSheet,
	Navigator,
	View,
} from 'react-native';
..

const routeStack = [
	{ name: 'Main', component: Main },
	{ name: 'Login', component: Login },
	{ name: 'Register', component: Register },
	{ name: 'Users', component: Users },
];

..

<Navigator
  initialRoute={this.state.initialRoute}
  initialRouteStack={routeStack}
  configureScene={() => Navigator.SceneConfigs.HorizontalSwipeJump}
  onWillFocus={route => store.dispatch(routeHistoryActions.push(route))}
  renderScene={(route, navigator) =>
    <route.component route={route} navigator={navigator} {...route.passProps} />
  }
/>
``
