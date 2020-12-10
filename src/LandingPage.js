import video from './images/welcomeBW.mp4';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Background from './images/liu.jfif';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function LandingPage() {
  const options = ['MT1', 'MT2', 'MT3'];
  return (

    <body>
        <div className="landing-container">
		<div className="fade">
		</div>
		<video autoPlay="autoplay" muted loop="loop" id="myVideo" className="theVideo">
			<source src={video} type="video/mp4"/>
		</video>
		<img className="backgroundIMG" src={Background}/>
            <div className="welcome">
                <h1>LiUTRACKER</h1>
            </div>
            <div className="welcome-info">
                <h2>Välkommen!</h2>

                <h4>Välj ditt program, vi löser resten.</h4>
                <Dropdown className="drop" options={options} placeholder="VÄLJ PROGRAM"/>

            </div>
            <div className="buttonEnter">
            <Link to="/home">
                HÅLL KOLL!</Link>
            </div>
			<div className="bgblur">
			</div>
            <div className="changeToCourse">
              <h6>Växla till kurser</h6>
            </div>

        </div>
    </body>
  );
}

export default LandingPage;
