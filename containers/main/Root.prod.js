import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import PatientContainer from '../PatientContainer';
import PatientDetailContainer from '../PatientDetailContainer';

class Root extends React.Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={PatientContainer} />
          <Route path="/patients" component={PatientContainer} />
          <Route path="/patient/:patientId(/:type(/:noteNumber))" component={PatientDetailContainer} />
        </Router>
      </Provider>
    	);
  }
}

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired
}

export default Root;