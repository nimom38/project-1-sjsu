import React, { useState } from "react";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const [user, setUser] = useLocalStorage("User", null);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home user={user} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
