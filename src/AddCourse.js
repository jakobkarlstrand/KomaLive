
import './AddCourse.css'
import { Link } from "react-router-dom";
import house from "./images/house.png";
import plus from "./images/plusNew.png";
import chev from './images/chevron.svg';
import { useState } from 'react';

function InfoBox({ course, name }){
    return(
        <div className="addC_courseTable">
            <div>
                { <p className="addC_course">{ course }</p> }
            </div>
            <div>
                <p className="addC_name">{ name }</p>
            </div>
        </div>
    )
}

function AddCourse(){
    const [imageActive, setImageActive] = useState(false);
    const [selected, setSelected] = useState(false);
    const [selected2, setSelected2] = useState(false);
    const [selected3, setSelected3] = useState(false);
    const [selected4, setSelected4] = useState(false);
    const [selected5, setSelected5] = useState(false);
    const [selected6, setSelected6] = useState(false);
    const [selected7, setSelected7] = useState(false);
    const [selected8, setSelected8] = useState(false);
    const [selected9, setSelected9] = useState(false);
    const [selected10, setSelected10] = useState(false);
    const [selected11, setSelected11] = useState(false);
    const [selected12, setSelected12] = useState(false);


    let content;
    if(true){
        content = <img className="addC_plusIcon" src={plus} alt="Lägg till"></img>;
    } else{
        content = <img className="addC_houseIcon" src={house} alt="Tillbaka"></img>;
    }
    let showClick, showClick2, showClick3, showClick4, showClick5, showClick6, showClick7,
    showClick8, showClick9, showClick10, showClick11, showClick12;
    
    if(selected){
        showClick = <div className="addC_a"></div>;
    }

    if(selected2){
        showClick2 = <div className="addC_a"></div>;
    }

    if(selected3){
        showClick3 = <div className="addC_a"></div>;
    }

    if(selected4){
        showClick4 = <div className="addC_a"></div>;
    }

    if(selected5){
        showClick5 = <div className="addC_a"></div>;
    }

    if(selected6){
        showClick6 = <div className="addC_a"></div>;
    }

    if(selected7){
        showClick7 = <div className="addC_a"></div>;
    }

    if(selected8){
        showClick8 = <div className="addC_a"></div>;
    }

    if(selected9){
        showClick9 = <div className="addC_a"></div>;
    }

    if(selected10){
        showClick10 = <div className="addC_a"></div>;
    }

    if(selected11){
        showClick11 = <div className="addC_a"></div>;
    }

    if(selected12){
        showClick12 = <div className="addC_a"></div>;
    }

    return(
        
    <div>
        <Link to="/home"><div className="addC_backButton"><img className="addC_back" src={chev} alt="Tillbaka"></img></div></Link>
        
        <div className="addC_addCourseList">
        <h1 className="addC_newCourseHeader">KURSER</h1>
        <div id="addC_courseTable" onClick={click}>
        {showClick}
          <InfoBox course="TNA001" name="Matematisk grundkurs"></InfoBox>
        </div>
        <div id="addC_courseTable" onClick={click2}>
        {showClick2}
            <InfoBox course="TNA002" name="Linjär algebra"></InfoBox>
        </div>
        <div id="addC_courseTable" onClick={click3}>
        {showClick3}
            <InfoBox course="TNA003" name="Analys I"></InfoBox>
        </div>
        <div id="addC_courseTable" onClick={click4}>
            {showClick4}
            <InfoBox course="TNA004" name="Analys II"></InfoBox>
        </div>
        <div id="addC_courseTable" onClick={click5}>
        {showClick5}
            <InfoBox course="TNA006" name="Analys III"></InfoBox>
        </div>
        <div id="addC_courseTable" onClick={click6}>
        {showClick6}
            <InfoBox course="TNA007" name="Vektoranalys"></InfoBox>
        </div>
        <div id="addC_courseTable" onClick={click7}>
        {showClick7}
            <InfoBox course="TNM061" name="3-D Datorgrafik"></InfoBox>
        </div>
        <div id="addC_courseTable" onClick={click8}>
        {showClick8}
            <InfoBox course="TNM059" name="Grafisk teknik"></InfoBox>
        </div>
        <div id="addC_courseTable" onClick={click9}>
        {showClick9}
            <InfoBox course="TNG006" name="Matematisk statistik"></InfoBox>
        </div>
        <div id="addC_courseTable" onClick={click10}>
        {showClick10}
            <InfoBox course="TNG015" name="Signaler och system"></InfoBox>
        </div>
        <div id="addC_courseTable" onClick={click11}>
        {showClick11}
            <InfoBox course="TNG032" name="Tillämpad transformteori"></InfoBox>
        </div>
        <div id="addC_courseTable" onClick={click12}>
        {showClick12}
            <InfoBox course="TNG033" name="Programmering i C++"></InfoBox>
        </div>
          
        <div>
        </div>       
        </div>
        
        <div className="addC_stickyboi"></div>
        <Link to="/home">
            <div className="addC_addCourseButtonPlus">
               <p className="addC_addText">{content}</p>
            </div>
    
            {/*<div className="addC_cancelButton">
            <img className="addC_cross" src={cross} alt="Avbryt!"></img>
    </div>*/}
        </Link>  
    </div>  
    )
    /** KOLLA INTE VIDARE!! */
    function click(){
        if(selected === true){
            setSelected(false);
        }else{
            setSelected(true)
        }
    }
    function click2(){
        if(selected2 === true){
            setSelected2(false);
        }else{
            setSelected2(true)
        }
    }
    function click3(){
        if(selected3 === true){
            setSelected3(false);
        }else{
            setSelected3(true)
        }
    }
    function click4(){
        if(selected4 === true){
            setSelected4(false);
        }else{
            setSelected4(true)
        }
    }
    function click12(){
        if(selected12 === true){
            setSelected12(false);
        }else{
            setSelected12(true)
        }
    }
    function click5(){
        if(selected5 === true){
            setSelected5(false);
        }else{
            setSelected5(true)
        }
    }
    function click6(){
        if(selected6 === true){
            setSelected6(false);
        }else{
            setSelected6(true)
        }
    }
    function click7(){
        if(selected7 === true){
            setSelected7(false);
        }else{
            setSelected7(true)
        }
    }
    function click8(){
        if(selected8 === true){
            setSelected8(false);
        }else{
            setSelected8(true)
        }
    }
    function click9(){
        if(selected9 === true){
            setSelected9(false);
        }else{
            setSelected9(true)
        }
    }
    function click10(){
        if(selected10 === true){
            setSelected10(false);
        }else{
            setSelected10(true)
        }
    }
    function click11(){
        if(selected11 === true){
            setSelected11(false);
        }else{
            setSelected11(true)
        }
    }
}

export default AddCourse;