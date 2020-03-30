import React from 'react';
import '../style/Submission.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';

export default class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //contact information
      authorLast: "",
      authorFirst: "",
    }
  }

  handleSubmit = (event) => {
    this.postAuthor();
    this.getLastId();
    
  }

  postAuthor = () => {

    const data = {
      lastName: this.state.authorLast,
      firstName: this.state.authorFirst,
    }

    fetch("http://localhost:8081/testPost", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => {
      console.log("resultado: ", res.json());
      if (res.status >= 400) {
        throw new Error("Bad response from server. Status: " + res.status);
      }
      // alert("resultado: ", res.json());
      return res.json();
    }, err => {
      console.warn("err1: ", err);
    }).then(data => {
      console.log("Success!", data);
      this.setState({ authorLast: "" });
      this.setState({ authorFirst: "" });  
    }, err => {
      console.warn("err2: ", err);
    });
  }

  getLastId = () => {
    console.warn("get last id!!")
    fetch("http://localhost:8081/lastid",
      {
        method: 'GET'
      }).then(res => {
        return res.json();
      }, err => {
        console.log(err);
      }).then(result => {
        console.log("ID: ", result[0]);
      }, err => {
        console.log(err);
      });
  }



  // update states
  authorLast = (event) => {
    this.setState({ authorLast: event.target.value });
  }
  authorFirst = (event) => {
    this.setState({ authorFirst: event.target.value });
  }

  render() {
    return (
      <div className="Test">
        <PageNavbar active="Test" />
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

            <form onSubmit={this.handleSubmit}>
              <input type="submit" value="Submit" />
            </form>


          </div>
        </div>
      </div>
    );
  }
}