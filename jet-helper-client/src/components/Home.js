import React from 'react';
import '../style/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    }
  }
  
  render() {    
    return (
      <div className="Dashboard">
        <PageNavbar active="Dashboard" />
        <div className="container home-container">
          <div className="jumbotron less-headspace">
            <div className="home-header">About Journal</div>
             <div className="home-body">The Asian Journal of Latin American Studies (AJLAS, previously the Korean Journal of Latin American Studies) is an academic journal for discussion and debate of Latin American affairs and comparative analysis of Asian and Latin American societies. AJLAS is published by the Latin American Studies Association of Korea (LASAK) quarterly in February, May, August, and November.</div>
             <br></br>
             <div className="home-body">The purpose of AJLAS is to stimulate and disseminate scholarly research in the broad scope of Latin American studies in the humanities and social sciences: economics, political science, international relations, philosophy, history, sociology, geography, anthropology, and literature. Articles with an interdisciplinary approach are especially welcome.</div>
             <br></br>
             <div className="home-header">About JEThelper</div>
             <div className="home-body">JEThelper is an Academic Article Submission Management System that has been built to aid the work of AJLAS’s journal editorial assistants. Users are able to submit new academic papers, and view the current status of the reviewing process. Editorial assistants can store and update the review/article data, auto-generate the quarterly editorial and expenditure reports, and generate email bodies based on the status of the reviewing process. </div>
             <br></br>
             <div className="home-header">About Developer </div>
             <div className="home-body">
               <a href="https://www.linkedin.com/in/jhltom/">Tom Jonghyun Lee</a>
               </div>
             <div className="home-body">University of Pennsylvania, MCIT '21</div>
          </div>
        </div>
      </div>
    );
  }
}