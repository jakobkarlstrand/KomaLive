import addIcon from './images/add.png';
import gear from './images/gear.svg';
import bytProgram from './images/user.svg'
import chev from './images/chevron.svg'
import days from './images/calendar.svg'
import task from './images/task.svg'
import circle from './images/circle.png'
import Dropdown from 'react-dropdown';
import './Home.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";



function InfoRow({course, type, daysLeft}){
    let styler =""
    if(daysLeft < 5){
        styler = <div className="smallCircle" style={{color: "#da6d6d"}}>{daysLeft}</div>
    }
    else{
        styler = <div className="smallCircle">{daysLeft}</div>
    }
    let row =(
        <Link style={{textDecoration: "none", color: "black"}} to={"/details/" + course + "/" + type + "/" + daysLeft}>
        <div className="rowContainer">
            <div className="leftLeft">
            <img className="chev" src={chev}/>
            </div>
            <div className="leftCol">
            <div className="upperDiv">
                <h3>{type}</h3>
            </div>
            <div className="lowerDiv">
                <h5>{course}</h5>
            </div>
            </div>
            <div className="rightCol">
                {styler}
            </div>

        </div>
        </Link>
    )
    return row;
}

function HomePage() {
  return (
      <html>
        <body>
            <div className="home-container">
                <div className="header-container">
                <div className="upperButtons">
                    <div className="helpButtonWrapper">
                        <Link to="/"> 
                            <div className="helpButton"><img className="shuffle" src={bytProgram}/>
                            </div>
                        </Link>
                    </div>
                    <div className="settingsButtonWrapper">
                        <div className="settingsButton"><img className="gear" src={gear}/>
                        </div>
                    </div>
                </div>
                
                <div className="wrapper-counter">
                    <div className="counter-container" onClick={() => window.location="/details/TNA006/Tenta/2"}>
                        <div className="theh1">
                            <h1>2</h1>
                        </div>   
                        <div className="thep">
                            <p>dagar</p>
                        </div>
                    </div>
                </div>
                </div>
                <div>
                <div class="custom-shape-divider-top-1605541414">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
</div>
    
    <div className="infoTable">
        <div className="icon-wrapper">
            <div className="img1">
                <img src={task}/>
            </div>
            <div className="img2">
                <img src={days}/>
            </div>
        </div>
        <InfoRow course="TNA006" type="Tenta" daysLeft="2"></InfoRow>
        <InfoRow course="TNM046" type="Tenta" daysLeft="4"></InfoRow>
        <InfoRow course="PRIVAT" type="Ansöka om jobb" daysLeft="6"></InfoRow>
        <InfoRow course="TNM043" type="Inlämning" daysLeft="9"></InfoRow>
        <InfoRow course="TNA006" type="Tenta" daysLeft="11"></InfoRow>
        <InfoRow course="TNM046" type="Tenta" daysLeft="12"></InfoRow>
        <InfoRow course="PRIVAT" type="Ansöka om jobb" daysLeft="12"></InfoRow>
        <InfoRow course="TNM043" type="Inlämning" daysLeft="20"></InfoRow>
        <InfoRow course="TNM043" type="Inlämning" daysLeft="20"></InfoRow>
        <InfoRow course="TNM043" type="Inlämning" daysLeft="20"></InfoRow>
        <InfoRow course="TNM043" type="Inlämning" daysLeft="20"></InfoRow>
    </div>
    <div className="stickyBoi">

    </div>
    <div className="lowerButton">
        <Link to="add">
            <div className="addButton"><img className="addIcon" src={addIcon}></img></div>
        </Link>
    </div>
    <div className="gap">

    </div>
            </div>
        </body>
    </html>
  );
}

export default HomePage;
