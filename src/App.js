import logo from './logo.svg';
import './Landing.css';
import './App.css'
import AddNew from './AddNew'
import AddCourse from './AddCourse'
import LandingPage from './LandingPage';
import HomePage from './HomePage'
import CreateNewDeadLine from './CreateNewDeadline'
import Details from './Details'
import { useLocation } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

function App() {
  let off = 100;
  let path = window.location.pathname
  console.log(path)
 if(path === "/home" || path === "/"){
   off = 100;
 }
 else{
   off = -100
 }
 
 
  return (
    
    <Router>
     <AnimatedSwitch  
     atEnter={{ offset:  -100}}
     atLeave={{ offset: 100 }}
     atActive={{ offset: 0 }}
     mapStyles={(styles) => ({
       transform: `translateX(${styles.offset}%)`,
     })}
     className="switch-wrapper"
    >
      <Route path="/home" component={HomePage}>

      </Route>
      <Route path="/add" component={AddNew}>
      </Route>
      <Route path="/create-new-man" component={CreateNewDeadLine}>

      </Route>
      <Route path="/details/:course/:type/:daysLeft" component={Details}>
      </Route>
      <Route path="/addCourse" component={AddCourse}>
      </Route>
      <Route path="/" component={LandingPage}>
      </Route>
      
      </AnimatedSwitch>
      
    </Router>
  );
}

export default App;
