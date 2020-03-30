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
    
  }

  handleSubmit = (event) => {
    this.postAuthor();
  }


  postAuthor = () => {

    const data ={
      authorLast: this.state.authorLast,
      authorFirst: this.state.authorFirst,
    }

    fetch("http://localhost:8081/test", {
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