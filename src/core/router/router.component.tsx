import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {switchRoutes} from './routes';

import {
    LoginScene,
    SubmoduleListScene,
    EmployeeListScene,
    EmployeeScene,
} from 'scenes';

export const RouterComponent : React.FC = () => {
    return (
        <HashRouter>
            <Switch>
                <Route
                    exact={true} 
                    path={[switchRoutes.root, switchRoutes.login]}
                    component={LoginScene}
                />
                <Route 
                    exact={true}
                    path={switchRoutes.submodulelist}
                    component={SubmoduleListScene}
                />
                <Route 
                    exact={true}
                    path={switchRoutes.employees}
                    component={EmployeeListScene}
                />
                <Route 
                    exact={true}
                    path={switchRoutes.editEmployee}
                    component={EmployeeScene}
                />
            </Switch>
        </HashRouter>
    )
}