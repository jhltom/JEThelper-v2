import React from 'react';
import '../style/Status.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';

export default class Submission extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foundSubmissions: [],
      title: ""
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

          )
        }
        );

        this.setState({
          foundSubmissions: submissionDivs
        });
      }, err => {
        console.log(err);
      });
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  submitTitle = () => {
    alert("submitted!")
  }

  render() {
    return (
      <div className="Status">
        <PageNavbar active="Status" />
        <div className="container status-container">
          <div className="jumbotron less-headspace">
            
            <div className="input-container">
              <input type='text' placeholder="Title of the Manuscript"
                value={this.state.title}
                onChange={this.handleTitleChange}
                id="manuscriptTitle"
                className="login-input" />
              <button id="submitTitleBtn" onClick={this.submitTitle} className="submit-btn">Submit</button>
            </div>

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
        </div>
      </div>
    );
  }
}