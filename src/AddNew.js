import logo from './logo.svg';
import Dropdown from 'react-dropdown';
import './AddNew.css'
import chev from './images/cancel.png';
import addIcon from './images/add.png';
import task from './images/task.svg';
import circle from './images/circle.png';
import gear from './images/gear.svg';
import { Link } from 'react-router-dom';




function HomePage() {
  const options = ['MT1', 'MT2', 'MT3'];
  return (
    <body>
      
      
        <div className="ADDNEW_container">
          

          <div className="ADDNEW_topHeader">
            <h1>Lägg till en kurs eller påminnelse</h1>
          </div>
          <Link className="ADDNEW_linkCourseButton" to="/addCourse">
            <div className="ADDNEW_addCourseButton">
              <img className="ADDNEW_add" src={addIcon}/>
                <h2> Kurs</h2>
            </div>
            </Link>
              <Link className="ADDNEW_linkManualButton" to="/create-new-man">
                <div className="ADDNEW_addManualButton">
                  <img className="ADDNEW_task" src={task}/>
                  <h2> Påminnelse</h2>
               </div>
             </Link>
                  <Link className="ADDNEW_linkTillbaka" to="/home">
                    <div className="ADDNEW_tillbaka">
                    <img className="ADDNEW_chev" src={chev}/>
                      
                    </div></Link>
               
        </div>
            
    </body>
  );
}

export default HomePage;
