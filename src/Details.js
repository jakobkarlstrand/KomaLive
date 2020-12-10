import logo from './logo.svg';
import Dropdown from 'react-dropdown';
import chev from './images/chevron.svg';
import './Details.css'
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

function Details() {

    const [notes, addNotes] = useState(["Inga anteckningar hittades"])

    function changeNotes(event){
      event.preventDefault();
      addNotes(event.target[0].value)
      
    }
    let { course } = useParams();
    let { type } = useParams();
    let { daysLeft } = useParams();

  return (
    <body>
      <div className="DETAILS_cont">
        <div className="DETAILS_linkTillbaka">
          <Link to="/home"> 
              <img className="DETAILS_chev" src={chev}/>
          </Link>
        </div>
        <div className="DETAILS_pageTitle">
          <div className="DETAILS_course">
             <h3 className="DETAILS_infospan">{course}</h3>
          </div>
          <div className="DETAILS_type">
             <h3 className="DETAILS_infospan">{type}</h3>
          </div>
          <div className="DETAILS_days">
            <div className="circleBoi">
              <h3 className="DETAILS_infospan">{daysLeft}</h3>
            </div>
          </div>
          <h4>Anteckningar:</h4>
        </div>
        <div className="DETAILS_notes">
            <h4>{notes}</h4>
        </div>
        <div className="DETAILS_note">
        <h2>Lägg till anteckning</h2>
        <div className="DETAILS_theform">
          <form className="DETAILS_form" onSubmit={changeNotes}>
            <textarea type="text"></textarea>
            <button type="submit">LÄGG TILL</button>
          </form>
        </div>
        </div>    
        
      </div>     
    </body>
  );
}

export default Details;
