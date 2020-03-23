import React from 'react';
import '../style/Submission.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';

export default class Submission extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //contact information
      authorLast: "",
      authorFirst: "",
      institution: "",
      position: "",
      address: "",
      email: "",
      telephone: "",
      //manuscript
      authorId: 3,
      title: "",
      keyword1: "",
      keyword2: "",
      keyword3: "",
      keyword4: "",
      keyword5: "",
      abstract: "",
      //submission
      unixtime: 0
    }
  }
  componentDidMount = () =>{
    this.setState({ unixtime: Date.now() });
  }

  handleSubmit = (event) => {
  
    this.postAuthor();
    this.postManuscript();

  }


  postAuthor = () => {

    const data ={
      authordId: this.state.authordId,
      authorLast: this.state.authorLast,
      authorFirst: this.state.authorFirst,
      institution: this.state.institution,
      position: this.state.position,
      address: this.state.address,
      email: this.state.email,
      telephone: this.state.telephone,
    }

    fetch("http://localhost:8081/newauthor", {
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
      // alert("Success!", data);
      this.setState({ authorLast: "" });
      this.setState({ authorFirst: "" });
      this.setState({ institution: "" });
      this.setState({ position: "" });
      this.setState({ address: "" });
      this.setState({ email: "" });
      this.setState({ telephone: "" });
    }, err => {
      console.warn("err2: ",err);
    });
  }

  postManuscript = () => {

    const data ={
      authorId: this.state.authorId,
      title: this.state.title,
      keyword1: this.state.keyword1,
      keyword2: this.state.keyword2,
      keyword3: this.state.keyword3,
      keyword4: this.state.keyword4,
      keyword5: this.state.keyword5,
      abstract: this.state.abstract,
      unixtime: this.state.unixtime
    }

    fetch("http://localhost:8081/newsubmission", {
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
      this.setState({ title: "" });
      this.setState({ keyword1: "" });
      this.setState({ keyword2: "" });
      this.setState({ keyword3: "" });
      this.setState({ keyword4: ""});
      this.setState({ keyword5: "" });
      this.setState({ abstract: "" });
      this.setState({ unixtime: 0 });
    }, err => {
      console.warn("err2: ",err);
    });

  }

  // update states
  authorLast = (event) => {
    this.setState({ authorLast: event.target.value });
  }
  authorFirst = (event) => {
    this.setState({ authorFirst: event.target.value });
  }
  institution = (event) => {
    this.setState({ institution: event.target.value });
  }
  position = (event) => {
    this.setState({ position: event.target.value });
  }
  address = (event) => {
    this.setState({ address: event.target.value });
  }
  email = (event) => {
    this.setState({ email: event.target.value });
  }
  telephone = (event) => {
    this.setState({ telephone: event.target.value });
  }
  title = (event) => {
    this.setState({ title: event.target.value });
  }
  keyword1 = (event) => {
    this.setState({ keyword1: event.target.value });
  }
  keyword2 = (event) => {
    this.setState({ keyword2: event.target.value });
  }
  keyword3 = (event) => {
    this.setState({ keyword3: event.target.value });
  }
  keyword4 = (event) => {
    this.setState({ keyword4: event.target.value });
  }
  keyword5 = (event) => {
    this.setState({ keyword5: event.target.value });
  }
  abstract = (event) => {
    this.setState({ abstract: event.target.value });
  }


  render() {
    return (
      <div className="Submission">
        <PageNavbar active="Submission" />
        <div className="container submission-container">
          <div className="jumbotron less-headspace">

            <div className="submission-header">Contact Information : </div>
            <br></br>
            <div className="submission-body">
              <label> Author <br></br>
                <input type="text" placeholder="Last name" style={{ width: "25vw" }} value={this.state.authorLast} onChange={this.authorLast} /> {" "}
                <input type="text" placeholder="First name" style={{ width: "25vw" }} value={this.state.authorFirst} onChange={this.authorFirst} />
              </label>
            </div>
            <div className="submission-body">
              <label> Institution <br></br>
                <input type="text" placeholder="University, Organization, Research Institution, Laboratory, etc. " style={{ width: "50vw" }} value={this.state.institution} onChange={this.institution} />
              </label>
            </div>
            <div className="submission-body">
              <label> Title / Position <br></br>
                <input type="text" placeholder="Assistant Professor, Associate Professor, Senior Researcher, etc. " style={{ width: "50vw" }} value={this.state.position} onChange={this.position} />
              </label>
            </div>
            <div className="submission-body">
              <label> Mailing Address <br></br>
                <input type="text"  placeholder="Preferred Mailing Address" style={{ width: "50vw" }} value={this.state.address} onChange={this.address} />
              </label>
            </div>
            <div className="submission-body">
              <label> Email <br></br>
                <input type="text" placeholder="Email address" style={{ width: "50vw" }} value={this.state.email} onChange={this.email} />
              </label>
            </div>
            <div className="submission-body">
              <label> Telephone Number <br></br>
                <input type="text" placeholder="Phone # with Country Code" style={{ width: "50vw" }} value={this.state.telephone} onChange={this.telephone} />
              </label>
            </div>

            <br></br>

            <div className="submission-header">Manuscript : </div>
            <br></br>
            <div className="submission-body">
              <label> Title<br></br>
                <input type="text" placeholder="Title of the Manuscript" style={{ width: "50vw" }} value={this.state.title} onChange={this.title} />
              </label>
            </div>
            <div className="submission-body">
              <label> Keywords (up to five) <br></br>
                <input type="text" placeholder="Keyword 1" style={{ width: "10vw" }} value={this.state.keyword1} onChange={this.keyword1} />
                <input type="text" placeholder="Keyword 2" style={{ width: "10vw" }} value={this.state.keyword2} onChange={this.keyword2} />
                <input type="text" placeholder="Keyword 3" style={{ width: "10vw" }} value={this.state.keyword3} onChange={this.keyword3} />
                <input type="text" placeholder="Keyword 4" style={{ width: "10vw" }} value={this.state.keyword4} onChange={this.keyword4} />
                <input type="text" placeholder="Keyword 5" style={{ width: "10vw" }} value={this.state.keyword5} onChange={this.keyword5} />
              </label>
            </div>
            <div className="submission-body">
              <label> Abstract (300 words) <br></br>
                <textarea className="bigText" placeholder="Abstract of the Manuscript"  height="50%" style={{ width: "50vw" }} value={this.state.abstract} onChange={this.abstract} />
              </label>
            </div>
            <br></br>

     

            <form onSubmit={this.handleSubmit}>
              <input type="submit" value="Submit" />
            </form>


          </div>
        </div>
      </div>
    );
  }
}