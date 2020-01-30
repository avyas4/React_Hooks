import React from 'react';
import { Route, Switch } from "react-router-dom";
// import history from './utils/history';
// import Context from './utils/context';

import Dashboard from './components/dashboard/dashboard';
import Vehicles from './components/vehicles/vehicles';

const Routes = () => {
    return (
        <Route
            path="*"
            render={({ location }) => (
                <React.Fragment>
                    <Switch location={location}>
                        <Route exact path='/' component={Dashboard} />
                        <Route exact path='/years' component={Dashboard} />
                        <Route exact path='/vehicles/:year' component={Vehicles} />
                    </Switch>
                </React.Fragment>
            )}
        />
    );
};

export default Routes;
