import React from 'react';
import '../style/JEThelper.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';

export default class JEThelper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foundSubmissions: [],
      accessGranted: false,
      accessKey: ""
    }
  }

  componentDidMount = () => {
    fetch("http://localhost:8081/getallsubmissions",
      {
        method: 'GET'
      }).then(res => {
        return res.json();
      }, err => {
        console.log(err);
      }).then(submissionList => {
        let submissionDivs = submissionList.map((submission, i) => {
          const date = new Date(submission.dateUnixTime);
          return (
            <div key={i} className="submission">
              <div className="authorid">{submission.id}</div>
              <div className="date">{date.toDateString()}</div>
              <div className="title">{submission.title}</div>
              <div className="reviewstatus">{submission.reviewStatus}</div>
            </div>
          )}
        );
        this.setState({
          foundSubmissions: submissionDivs
        });
      }, err => {
        console.log(err);
      });
  }

  handleAccessKeyChange = (event) => {
    this.setState({ accessKey: event.target.value });
  }

  submitAccessKey = () => {
    if (this.state.accessKey === "testing"){
      alert("Access Granted! ");
      this.setState({accessGranted: true})
    } else {
      alert("Access Denied! Only AJLAS editors have access.");
    }
  }

  render() {
    return (
      <div className="JEThelper">
        <PageNavbar active="JEThelper" />
        <div className="container jet-container">
          <div className="jumbotron less-headspace">

            {this.state.accessGranted ? (

              <div>
                <div className="jet-header"> Submissions for Volume 33 Issue 2 : </div>
                <br></br>
                <div className="header-container">
                  <div className="headers">
                    <div className="header"><strong>Author Id </strong></div>
                    <div className="header"><strong>Submission Date</strong></div>
                    <div className="header"><strong>Title</strong></div>
                    <div className="header"><strong>Review Status</strong></div>
                  </div>
                </div>
                <div className="results-container" id="results">
                  {this.state.foundSubmissions}
                </div>
              </div>
            ) : (
                <div>
                  <div className="input-container">
                    <input type='password' placeholder="Enter Access Key"
                      value={this.state.accessKey}
                      onChange={this.handleAccessKeyChange}
                      className="access-input" />
                    <button id="submitTitleBtn" onClick={this.submitAccessKey} className="submit-btn">Submit</button>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}