import logo from "./logo.svg";
import Dropdown from "react-dropdown";
import dead_plusIcon from "./images/clearplus.png";
import dead_chev from "./images/chevron.svg";
import "./NewDeadline.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function TextInput({ header, tooltip }) {
  return (
    <div className="dead_inputWrapper">
      <div className="dead_header">
        <div className="dead_header-left">
          <h2>{header}</h2>
        </div>
        <div className="dead_header-right">
          <h2>{tooltip}</h2>
        </div>
      </div>
      <div className="dead_textarea">
        <input></input>
      </div>
    </div>
  );
}

function HomePage() {
  const options = ["MT1", "MT2", "MT3"];
  return (
    <div className="dead:body">
      <body>
        <div className="dead_layer">
          <div className="dead_back">
            <Link to="/home">
              <img className="dead_chev" src={dead_chev} />
            </Link>
          </div>
          <div className="dead_container">
            <div className="dead_pageTitle">
              <h1>Ny påminnelse...</h1>
            </div>

            <TextInput
              header="TITEL"
              tooltip="(T.EX: MT-STYRELSEN)"
            ></TextInput>
            <TextInput
              header="TYP"
              tooltip="(T.EX: MÖTE / INLÄMNING)"
            ></TextInput>
            <TextInput header="DATUM" tooltip="(YYYY-MM-DD)"></TextInput>
            <TextInput header="ÖVRIGT" tooltip="(T.EX: SAL TP51)"></TextInput>

            <div className="dead_ButtonText">
              <Link to="/home">
                <img className="dead_plusIcon" src={dead_plusIcon}></img>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default HomePage;
