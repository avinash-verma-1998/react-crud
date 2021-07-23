import React from "react";
import { Switch, Route, Redirect } from "react-router";
import UserPage from "./Pages/UserPage";
import 'bulma/css/bulma.min.css'
import UserProfile from "./Pages/UserProfile";
import CreatePost from "./Pages/CreatePosts";

export default () => (
  <>
    <Switch>
      <Route exact path="/">
        <Redirect to = "/users"/>
      </Route>
      <Route exact path="/users">
        <UserPage/>
      </Route>
      <Route path="/users/:id">
        <UserProfile/>
      </Route>
      <Route path="/post/:id">
        <CreatePost/>
      </Route>
      <Route path="/">
        <h1>Not Found</h1>
      </Route>
    </Switch>
    
  </>
);
