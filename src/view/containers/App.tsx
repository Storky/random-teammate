import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    withRouter,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import RandomizerPage from './pages/randomizer-page';
import CreateTeamPage from './pages/create-team-page';

const App = () => {

    const routes = (
        <Switch>
            <Route path="/create-team">
                <RandomizerPage/>
            </Route>
            <Route path="/create-occasion">
                <CreateTeamPage/>
            </Route>
            <Route path="/randomizer">
                <RandomizerPage/>
            </Route>
            <Route path="/logs">
                <></>
            </Route>
            <Redirect from="/" to="/randomizer" />
        </Switch>
    );

    return (
        <div className="App">


            {routes}

        </div>
    )
}

export default withRouter(App);



