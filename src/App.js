import React from "react";
import { Switch, Route, Redirect } from "react-router";
import UserPage from "./Pages/UserPage";
import 'bulma/css/bulma.min.css'

const App = () => {
    return(<div> <>
        <Switch>
          <Route exact path="/">
            <Redirect to = "/users"/>
          </Route>
          <Route exact path="/users">
            <UserPage/>
          </Route>
          <Route path="/">
            <h1>Not Found</h1>
          </Route>
        </Switch>
        
      </></div>)
}

export default App;