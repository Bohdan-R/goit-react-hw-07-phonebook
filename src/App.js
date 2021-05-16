import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from './components/AppBar';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import PhonebookView from './views/PhonebookView';
import PrivatRoute from './components/PrivatRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations } from './redux/auth';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            redirectTo="/contacts"
            restricted
            component={RegisterView}
          />
          <PublicRoute
            path="/login"
            redirectTo="/contacts"
            restricted
            component={LoginView}
          />
          <PrivatRoute
            path="/contacts"
            redirectTo="/login"
            component={PhonebookView}
          />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
