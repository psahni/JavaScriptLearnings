* npm install --save react-native-router-flux@3.35.0


* React Router

* src/Router.js
  - Tweak all routes that a user can navigate to.

* Code

  import React from 'react';
  import { Scene, Router } from 'react-native-router-flux';


  const RouterComponent = () => {
    return (
      <Router sceneStyle=({ paddingTop: 65})>
        <Scene key="login" component={LoginForm}>
      </Router>
    );
  }


  export default RouterComponent;


  * Now in app.js, remove the login component

