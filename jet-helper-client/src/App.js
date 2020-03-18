import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import Home from './components/Home';
import Submission from './components/Submission';
import './App.css';

function App() {
  return (
    <div className="App">
				<Router>
					<Switch>
						<Route
							exact
							path="/"
							render={() => (
								<Home />
							)}
						/>
						<Route
							exact
							path="/Home"
							render={() => (
								<Home />
							)}
						/>
						<Route
							exact
							path="/Submission"
							render={() => (
								<Submission />
							)}
						/>
					</Switch>
				</Router>
			</div>
  );
}

export default App;
