import logo from './logo.svg';
import Dropdown from 'react-dropdown';
import './AddNew.css'
import chev from './images/chevron.svg';
import addIcon from './images/add.png';
import task from './images/task.svg';
import circle from './images/circle.png';
import gear from './images/gear.svg';
import { Link } from 'react-router-dom';




function HomePage() {
  const options = ['MT1', 'MT2', 'MT3'];
  return (
    <body>
      
      
        <div className="container">
          

          <div className="topHeader">
            <h1>Lägg till en kurs eller påminelse</h1>
          </div>
          <Link className="linkManualButton" to="/addCourse">
            <div className="addCourseButton">
              <img className="add" src={addIcon}/>
                <h2> Kurs</h2>
            </div>
            </Link>
              <Link className="linkManualButton" to="/create-new-man">
                <div className="addManualButton">
                  <img className="task" src={task}/>
                  <h2> Påminnelse</h2>
               </div>
             </Link>
                  <Link className="linkTillbaka" to="/home">
                    <div className="tillbaka">
                    <img className="chev" src={chev}/>
                      
                    </div></Link>
               
        </div>
            
    </body>
  );
}

export default HomePage;
