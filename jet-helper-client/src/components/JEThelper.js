import React from 'react';
import '../style/JEThelper.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';

export default class JEThelper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foundSubmissions: []
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

        let submissionDivs = submissionList.map((submission, i) =>{


          console.log(Date.now())
          console.log(submission.dateUnixTime);
          const date = new Date(submission.dateUnixTime );
          console.log(date);





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

  render() {
    return (
      <div className="JEThelper">
        <PageNavbar active="JEThelper" />
        <div className="container jet-container">
          <div className="jumbotron less-headspace">

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
        </div>
      </div>
    );
  }
}