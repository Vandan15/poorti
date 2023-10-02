import React, { useContext, useState } from 'react';
import { Router, Switch } from 'react-router-dom';
import { AppContext } from './AppContext';
import PublicRoute from './PublicRoute';
import App from './app/App';
import { ROUTES } from './common/constants';
import history from './historyData';
import Login from './modules/auth/component/Login';
import Register from './modules/auth/component/Register';
import Error404 from './Error404';

const Routes = () => {
  const { getToken } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const path = history?.location?.pathname;
  const idToken = getToken();

  return (
    <Router history={history}>
      <Switch>
        <PublicRoute exact path={ROUTES?.LOGIN} component={Login} />
        <PublicRoute exact path={ROUTES?.SIGNUP} component={Register} />

        {/* MAKE IT PRIVATE WHEN AUTHENTICATION API DONE */}
        <PublicRoute path={ROUTES?.MAIN} component={App} />
        <PublicRoute path="*" component={Error404} />
      </Switch>
    </Router>
  );
};
export default Routes;
