import React from 'react';
import '../../style/JETsumissionDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from '../PageNavbar';

export default class JETsubmissionDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submission: [],
      reviewer1: false,
      reviewer2: false,
      reviewer3: false
    }
  }

  componentDidMount = () => {
    const { submission } = this.props.location.state

    const date = new Date(submission.dateUnixTime);

    if (submission.reviewer1Id) {
      this.setState({ reviewer1: true });
    }
    if (submission.reviewer2Id) {
      this.setState({ reviewer2: true });
    }
    if (submission.reviewer3Id) {
      this.setState({ reviewer3: true });
    }

    let submissionDivs = [
      <div key={1} className="submission">
        <div className="authorid">{submission.authorId}</div>
        <div className="date">{date.toDateString()}</div>
        <div className="title">{submission.title}</div>
        {this.state.reviewer1 ?
          <div className="reviewer1Id">{submission.reviewer1Id}</div>
          :
          <div className="reviewer1Id">-</div>
        }
        {this.state.reviewer2 ?
          <div className="reviewer2Id">{submission.reviewer2Id}</div>
          :
          <div className="reviewer2Id">-</div>
        }
        {this.state.reviewer3 ?
          <div className="reviewer3Id">{submission.reviewer3Id}</div>
          :
          <div className="reviewer3Id">-</div>
        }
        <div className="reviewstatus">{submission.reviewStatus}</div>
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
                  <div className="header"><strong>Reviewer1</strong></div>
                  <div className="header"><strong>Reviewer2</strong></div>
                  <div className="header"><strong>Reviewer3</strong></div>
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