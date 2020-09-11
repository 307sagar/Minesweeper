// import {Helmet} from "react-helmet";
import React from 'react';
import {minesweeper} from '../utils/minesweeper'

class MineSweeperComponent extends React.Component{


componentDidMount(){
  const script = document.createElement("script");
  script.src = "./utils/minesweeper.js";
  script.async = true;
  document.body.appendChild(script);
}


render(){
    return(
      <div id="component">
        <br></br>
        <br></br>
        <br></br>
      <label id='status'> Click to begin</label>
      
      </div>
    );
    }
}

export default MineSweeperComponent;