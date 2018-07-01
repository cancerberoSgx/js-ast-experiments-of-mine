import React from 'react';
import { examples } from '../examples';
import { dispatchSelectExample, dispatchExecuteExample } from '../controller';
import { State } from '../types';

export default (state: State) =>
  <nav className={"navbar navbar-expand-md navbar-dark bg-dark"}>
    <button className={"navbar-toggler"} type="button" data-toggle="collapse" tabIndex={1} data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
      <span className={"navbar-toggler-icon"}></span>
    </button>

    <div className={"collapse navbar-collapse justify-content-md-left"} id="navbarsExample08">
      <ul className={"navbar-nav"}>

        {/* <li className={"nav-item dropdown"}>
          <a className={"nav-link dropdown-toggle"} href="#" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Project</a>
          <div className={"dropdown-menu"} aria-labelledby="dropdown06">
            <a className={"dropdown-item"} href="#saveProject" data-toggle="modal" data-target="#saveProjectModal">Save Project</a>
            <a className={"dropdown-item"} href="#loadProject" data-toggle="modal" data-target="#loadProjectModal">Load Project</a>
          </div>
        </li> */}
        <li className={"nav-item dropdown"}>
          <a className={"nav-link executeLink"} href="#" id="dropdown02"   onClick={()=>dispatchExecuteExample()}>Execute!</a>
          {/* <div className={"dropdown-menu"} aria-labelledby="dropdown06"> */}
            {/* <a className={"dropdown-item"}  onClick={()=>getActionManager().installTypes(state.project)}>Install @types</a> */}
            {/* <a className={"dropdown-item"} onClick={()=>{getEmitOutput(state)}}>Emit Output</a> */}
          {/* </div> */}
        </li>

        <li className={"nav-item dropdown"}>
          <a className={"nav-link dropdown-toggle"} href="#" id="dropdown08" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Examples</a>
          <div className={"dropdown-menu"} aria-labelledby="dropdown08">
            {examples.map(ex => <a className={"dropdown-item"} key={ex.name} onClick={()=>dispatchSelectExample(ex.name)}>{ex.name}</a>)}
          </div>
        </li>

        <li className={"nav-item dropdown"}>
          <a className={"nav-link dropdown-toggle"} href="#" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</a>
          <div className={"dropdown-menu"} aria-labelledby="dropdown09">
            <a className={"dropdown-item"} data-toggle="modal" data-target="#whatsThisModal">What's this?</a>
            <a className={"dropdown-item"} href="https://github.com/cancerberoSgx/js-ast-experiments-of-mine">Project home</a>
          </div>
        </li>


      </ul>
    </div>
  </nav>

