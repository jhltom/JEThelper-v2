import React from 'react';
import '../style/Status.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';

export default class Submission extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      foundSubmissions: []


    }
  }

  render() {
    return (
      <div className="Status">
        <PageNavbar active="Status" />
        <div className="container status-container">
          <div className="jumbotron less-headspace">

            <div className="status-header"> Submissions for Volume 33 Issue 2 : </div>
            <br></br>

            <div className="header-container">
			    			<div className="headers">
			    				<div className="header"><strong>Submission Date</strong></div>
                  <div className="header"><strong>Author Id </strong></div>
                  <div className="header"><strong>Author Last Name </strong></div>
			    				<div className="header"><strong>Title</strong></div>
                  <div className="header"><strong>Review Status</strong></div>
			    			</div>
			    		</div>

			    		<div className="results-container" id="results">
			    			{this.state.foundSubmissions}
			    		</div>

          </div>
        </div>
      </div>
    );
  }
}