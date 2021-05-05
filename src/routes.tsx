import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Template from "./views/template/view"

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" render={() => <Template />}/>
      </Switch>
    </Router>
  )
}