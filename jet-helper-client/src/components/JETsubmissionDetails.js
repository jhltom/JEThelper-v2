import React from 'react';
import '../style/JEThelper.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';

export default class JETsubmissionDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="JETsubmissionDetails">
        <PageNavbar active="JEThelperMain" />
        <div className="container jet-container">
          <div className="jumbotron less-headspace">
          </div>
        </div>
      </div>
    );
  }
}