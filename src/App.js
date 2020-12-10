import logo from './logo.svg';
import './Landing.css';
import AddNew from './AddNew'
import AddCourse from './AddCourse'
import LandingPage from './LandingPage';
import HomePage from './HomePage'
import CreateNewDeadLine from './CreateNewDeadline'
import Details from './Details'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    
    <Router>
    <Switch>
      <Route path="/home">
        <HomePage></HomePage>
      </Route>
      <Route path="/add">
        <AddNew></AddNew>
      </Route>
      <Route path="/create-new-man">
        <CreateNewDeadLine></CreateNewDeadLine>
      </Route>
      <Route path="/details/:course/:type/:daysLeft">
        <Details></Details>
      </Route>
      <Route path="/addCourse">
        <AddCourse></AddCourse>
      </Route>
      <Route path="/">
        <LandingPage></LandingPage>
      </Route>
      
    </Switch>
    </Router>
  );
}

export default App;
