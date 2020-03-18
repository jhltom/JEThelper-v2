import React from 'react';
import '../style/Submission.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';

export default class Submission extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //contact information
      author: "",
      institution: "",
      address: "",
      email: "",
      telephone: "",
      //manuscript
      title: "",
      keywords: "",
      abstract: "",
      //submission
      unixtime: 0
    }
  }

  handleSubmit = (event) => {
    this.setState({ unixtime: Date.now() });
    const date = new Date(this.state.unixtime * 1000);
    alert('A manuscript was submitted: ' + this.state.title + ' at ' + date);
    event.preventDefault();
  }

  // update states
  author = (event) => {
    this.setState({ author: event.target.value });
  }
  institution = (event) => {
    this.setState({ institution: event.target.value });
  }
  address = (event) => {
    this.setState({ address: event.target.value });
  }
  email = (event) => {
    this.setState({ email: event.target.value });
  }
  telephone = (event) => {
    console.log(event.target.value)
    this.setState({ telephone: event.target.value });
  }
  title = (event) => {
    this.setState({ title: event.target.value });
  }
  keywords = (event) => {
    this.setState({ keywords: event.target.value });
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


            <div className="home-header">Contact Information : </div>
            <br></br>
            <div className="submission-body">
              <label> Author
                <input type="text" style={{ width: "500px" }} value={this.state.author} onChange={this.author} />
              </label>
            </div>
            <div className="submission-body">
              <label> Institution
                <input type="text" style={{ width: "500px" }} value={this.state.institution} onChange={this.institution} />
              </label>
            </div>
            <div className="submission-body">
              <label> Mailing Address
                <input type="text" style={{ width: "500px" }} value={this.state.address} onChange={this.address} />
              </label>
            </div>
            <div className="submission-body">
              <label> E-mail
                <input type="text" style={{ width: "500px", resize:"horizontal" }} value={this.state.email} onChange={this.email} />
              </label>
            </div>
            <div className="submission-body">
              <label> Telephone Number
                <input type="text" style={{ width: "500px" }} value={this.state.telephone} onChange={this.telephone} />
              </label>
            </div>

            <br></br>

            <div className="home-header">Manuscript : </div>
            <br></br>
            <div className="submission-body">
              <label> Title
                <input type="text" style={{ width: "500px" }} value={this.state.title} onChange={this.title} />
              </label>
            </div>
            <div className="submission-body">
              <label> Keywords
                <input type="text" style={{ width: "500px" }} value={this.state.keywords} onChange={this.keywords} />
              </label>
            </div>
            <div className="submission-body">
              <label> Abstract
                <input type="text" style={{ width: "500px" }} value={this.state.abstract} onChange={this.abstract} />
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