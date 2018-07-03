import React from 'react';
import { dispatchExecuteExample, dispatchSelectExample } from '../controller';
import { examples } from '../examples';
import { State } from '../types';
import { showDiffModalHandler } from './modal/diffModal';

export default (state: State) =>
  <nav className={"navbar navbar-expand-md navbar-dark bg-dark"}>
    <button className={"navbar-toggler"} type="button" data-toggle="collapse" tabIndex={1} data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
      <span className={"navbar-toggler-icon"}></span>
    </button>

    <div className={"collapse navbar-collapse justify-content-md-left"} id="navbarsExample08">
      <ul className={"navbar-nav"}>

        <li className="nav-item">
          <a className={"nav-link executeLink"} href="#" id="dropdown02" onClick={() => dispatchExecuteExample()}>Execute!</a>
        </li>

        <li className={"nav-item dropdown"}>
          <a className={"nav-link dropdown-toggle"} href="#" id="dropdown08" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Examples</a>
          <div className={"dropdown-menu"} aria-labelledby="dropdown08">
            {examples.map(ex => 
              <a className="dropdown-item" key={ex.name} 
                onClick={() => dispatchSelectExample(ex.name)}
                href="#" title={ex.description}>
                {ex.name}
              </a>)}
          </div>
        </li>

        <li className={"nav-item dropdown"}>
          <a className={"nav-link dropdown-toggle"} href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Actions</a>
          <div className={"dropdown-menu"} aria-labelledby="dropdown01">
            <a className={"dropdown-item"} href="#" onClick={showDiffModalHandler}>Diff Input &amp; Output</a>
            <a className={"dropdown-item"} href="#selectedExampleDescription" data-toggle="modal" data-target="#selectedExampleDescriptionModal">Description of this Example</a>
          </div>
        </li>

        <li className={"nav-item dropdown"}>
          <a className={"nav-link dropdown-toggle"} href="#" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Search</a>
          <div className={"dropdown-menu"} aria-labelledby="dropdown02">
            <a className={"dropdown-item"} href="#saveProject" data-toggle="modal" data-target="#saveProjectModal">search examples</a>
            <a className={"dropdown-item"} href="#loadProject" data-toggle="modal" data-target="#loadProjectModal">by name</a>
            <a className={"dropdown-item"} href="#loadProject" data-toggle="modal" data-target="#loadProjectModal">or tag</a>
            <a className={"dropdown-item"} href="#loadProject" data-toggle="modal" data-target="#loadProjectModal">or language, etc</a>
            <a className={"dropdown-item"} href="#loadProject" data-toggle="modal" data-target="#loadProjectModal">not implemented yet</a>
          </div>
        </li>


        <li className="nav-item">
          <a className="nav-link" data-toggle="modal" href="#" data-target="#whatsThisModal">About</a>
        </li>

      </ul>
    </div>
  </nav>

