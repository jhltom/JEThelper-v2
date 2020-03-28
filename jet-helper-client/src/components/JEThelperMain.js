import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import JETsubmissions from './JETsubmissions';
import JETsubmissionDetails from './JETsubmissionDetails';

export default class JEThelperMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
    }
  }

 

  render() {
    return (
      <div className="JEThelperMain">
				<Router>
					<Switch>
						<Route
							exact
							path="/JEThelperMain/"
							render={() => (
								<JETsubmissions />
							)}
						/>
            <Route
							exact
							path="/JEThelperMain/"
							render={() => (
								<JETsubmissionDetails />
							)}
						/>
					</Switch>
				</Router>
			</div>
    );
  }
}