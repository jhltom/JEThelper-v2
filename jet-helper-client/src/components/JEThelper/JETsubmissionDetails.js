import React from 'react';
import '../../style/JEThelper.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from '../PageNavbar';

export default class JETsubmissionDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submission: []
    }
  }

  componentDidMount = () => {
    // const { submissionId } = this.props.match.params
    // console.log(submissionId)
    const { submission } = this.props.location.state
    console.log(submission)
    const date = new Date(submission.dateUnixTime);
    let submissionDivs = [
      <div key={1} className="submission">
        <div className="authorid">{submission.authorId}</div>
        <div className="date">{date.toDateString()}</div>
        <div className="title">{submission.title}</div>
        <div className="title">{submission.reviewStatus}</div>
      </div>
    ];
    this.setState({
      submission: submissionDivs
    });


  }

  render() {
    return (
      <div className="JETsubmissionDetails">
        <PageNavbar active="JEThelper" />
        <div className="container jet-container">
          <div className="jumbotron less-headspace">
            <div>
              <div className="header-container">
                <div className="headers">
                  <div className="header"><strong>Author Id </strong></div>
                  <div className="header"><strong>Submission Date</strong></div>
                  <div className="header"><strong>Title</strong></div>
                  <div className="header"><strong>Review Status</strong></div>
                </div>
              </div>
              <div className="results-container" id="results">
                {this.state.submission}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}