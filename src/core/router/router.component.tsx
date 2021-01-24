import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {switchRoutes} from './routes';

import {
    LoginScene,
    MainListScene,
    MemberScene,
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
                    path={switchRoutes.mainList}
                    component={MainListScene}
                />
                <Route 
                    exact={true}
                    path={switchRoutes.member}
                    component={MemberScene}
                />
                
            </Switch>
        </HashRouter>
    )
}