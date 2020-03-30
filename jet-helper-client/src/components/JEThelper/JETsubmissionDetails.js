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
      reviewer3: false,
      reviewerdId: null,

      //reviewer info
      lastName: "",
      firstName: "",
      institution: "",
      position: "",
      mailing: "",
      email: "",
      number: ""
    }
  }

  /**
   * componentDidMount
   */
  componentDidMount = () => {
    this.getNewReviewerId();
    this.getSubmission();
  }

  getNewReviewerId = () =>{
    fetch("http://localhost:8081/newreviewerid",
      {
        method: 'GET'
      }).then(res => {
        return res.json();
      }, err => {
        console.log(err);
      }).then(result => {
        const reviewerdId = result[0].id + 1;
        console.log(reviewerdId)
        this.setState({reviewerdId: reviewerdId});
      }, err => {
        console.log(err);
      });
  }

  getSubmission = () =>{
    const { submission } = this.props.location.state
    const date = new Date(submission.dateUnixTime);

    if (submission.reviewer1Id) {
      console.log("aqui1")
      this.setState({ reviewer1: true });
    }
    if (submission.reviewer2Id) {
      console.log("aqui2")
      this.setState({ reviewer2: true });
    }
    if (submission.reviewer3Id) {
      console.log("aqui3")
      this.setState({ reviewer3: true });
    }

    let submissionDivs = [
      <div key={1} className="submission">
        <div className="authorid">{submission.authorId}</div>
        <div className="date">{date.toDateString()}</div>
        <div className="title">{submission.title}</div>
        {submission.reviewer1Id ?
          <div className="reviewer1Id">{submission.reviewer1Id}</div>
          :
          <div className="reviewer1Id">-</div>
        }
        {submission.reviewer2Id ?
          <div className="reviewer2Id">{submission.reviewer2Id}</div>
          :
          <div className="reviewer2Id">-</div>
        }
        {submission.reviewer3Id ?
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

  /**
   * Submit methods
   */
  submitReviewer = () =>{
    // let selectReviewer = 0;
    // if (!this.state.reviewer1) selectReviewer=1
    // else if (!this.state.reviewer2) selectReviewer=2;
    // else selectReviewer=3;

    this.postReviewer();
  }

  postReviewer = () => {

    const data ={
      lastName: this.state.lastName,
      firstName: this.state.firstName,
      institution: this.state.institution,
      position: this.state.position,
      mailing: this.state.mailing,
      email: this.state.email,
      number: this.state.number,
    }

    fetch("http://localhost:8081/newreviewer", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then ( res =>{
      console.log("resultado: ", res.json());
      if (res.status >=400){
        throw new Error ("Bad response from server. Status: "+res.status);
      }
      // alert("resultado: ", res.json());
      return res.json();
    }, err => {
      console.warn("err1: ",err);
    }).then ( data =>{
      alert("Success!", data);
      this.setState({ lastName: "" });
      this.setState({ firstName: "" });
      this.setState({ institution: "" });
      this.setState({ position: "" });
      this.setState({ mailing: "" });
      this.setState({ email: "" });
      this.setState({ number: "" });
    }, err => {
      console.warn("err2: ",err);
    });
  }

  /**
   * setStates
   */
  lastName = (event) => {
    this.setState({ lastName: event.target.value });
  }
  firstName = (event) => {
    this.setState({ firstName: event.target.value });
  }
  institution = (event) => {
    this.setState({ institution: event.target.value });
  }
  position = (event) => {
    this.setState({ position: event.target.value });
  }
  mailing = (event) => {
    this.setState({ mailing: event.target.value });
  }
  email = (event) => {
    this.setState({ email: event.target.value });
  }
  number = (event) => {
    this.setState({ number: event.target.value });
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
                      <input type="text" placeholder="Last name" style={{ width: "25vw" }} value={this.state.lastName} onChange={this.lastName} /> {" "}
                      <input type="text" placeholder="First name" style={{ width: "25vw" }} value={this.state.firstName} onChange={this.firstName} />
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
                      <input type="text" placeholder="Preferred Mailing Address" style={{ width: "50vw" }} value={this.state.mailing} onChange={this.mailing} />
                    </label>
                  </div>
                  <div className="placeholder-body">
                    <label> Email <br></br>
                      <input type="text" placeholder="Email address" style={{ width: "50vw" }} value={this.state.email} onChange={this.email} />
                    </label>
                  </div>
                  <div className="placeholder-body">
                    <label> Telephone Number <br></br>
                      <input type="text" placeholder="Phone # with Country Code" style={{ width: "50vw" }} value={this.state.number} onChange={this.number} />
                    </label>
                  </div>
                  <button id="submitTitleBtn" onClick={this.submitReviewer} className="submit-btn">Submit</button>
                </div>
              }

            </div>
          </div>
        </div>
      </div>
    );
  }
}