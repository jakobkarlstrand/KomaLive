import logo from './logo.svg';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Background from './images/liu.jfif';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
function LandingPage() {
  const options = ['MT1', 'MT2', 'MT3'];
  return (
    <body>
      
        <div style={{backgroundImage: "url(" + Background + ")"}} className="landing_landing-container">
            <div className="landing_welcome">
                <h1>LiUTRACKER</h1>
            </div>
            <div className="landing_welcome-info">
              <h2>Välkommen!</h2>
              <h4>Välj ditt program, vi löser resten.</h4>
              <Dropdown className="landing_drop" options={options} placeholder="VÄLJ PROGRAM"/>
            </div>
            <Link to="/home">
                  <div className="landing_buttonEnter">
                      HÅLL KOLL!
                  </div>
            </Link>
                  <div className="landing_changeToCourse">
                    <h6>Växla till kurser</h6>
                  </div>
        </div>
    </body>
  );
}

export default LandingPage;
