import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../pages/dashboard/dashboard'
import AddNew from '../pages/issues/new/isuue-form'
import PendingIssues from '../pages/issues/pending/pending-issue'

class Routes extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <Switch>
          <Route path="/issues/new" exact component={AddNew} />
          <Route path="/issues/pending" exact component={PendingIssues} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/" exact component={Dashboard} />
        </Switch>
    );
  }
}


export default Routes;