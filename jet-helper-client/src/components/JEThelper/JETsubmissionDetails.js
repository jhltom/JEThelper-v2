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
        <div className="container jetdetails-container">
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


              {this.state.reviewer1 &&  this.state.reviewer2 && this.state.reviewer3?
                <div></div>
                :
                <div>
                  <br></br>
                  <div className="jetdetails-header"> Add Reviewer  </div>
                  <div className="placeholder-body">
                    <label> Reviewer <br></br>
                      <input type="text" placeholder="Last name" style={{ width: "25vw" }} value={this.state.authorLast} onChange={this.authorLast} /> {" "}
                      <input type="text" placeholder="First name" style={{ width: "25vw" }} value={this.state.authorFirst} onChange={this.authorFirst} />
                    </label>
                  </div>
                  <div className="placeholder-body">
                    <label> Institution <br></br>
                      <input type="text" placeholder="University, Organization, Research Institution, Laboratory, etc. " style={{ width: "50vw" }} value={this.state.institution} onChange={this.institution} />
                    </label>
                  </div>
                  <div className="placeholder-body">
                    <label> Title / Position <br></br>
                      <input type="text" placeholder="Assistant Professor, Associate Professor, Senior Researcher, etc. " style={{ width: "50vw" }} value={this.state.position} onChange={this.position} />
                    </label>
                  </div>
                  <div className="placeholder-body">
                    <label> Mailing Address <br></br>
                      <input type="text" placeholder="Preferred Mailing Address" style={{ width: "50vw" }} value={this.state.address} onChange={this.address} />
                    </label>
                  </div>
                  <div className="placeholder-body">
                    <label> Email <br></br>
                      <input type="text" placeholder="Email address" style={{ width: "50vw" }} value={this.state.email} onChange={this.email} />
                    </label>
                  </div>
                  <div className="placeholder-body">
                    <label> Telephone Number <br></br>
                      <input type="text" placeholder="Phone # with Country Code" style={{ width: "50vw" }} value={this.state.telephone} onChange={this.telephone} />
                    </label>
                  </div>
                  <button id="submitTitleBtn" onClick={this.submitTitle} className="submit-btn">Submit</button>
                </div>
              }

              

            </div>
          </div>
        </div>
      </div>
    );
  }
}