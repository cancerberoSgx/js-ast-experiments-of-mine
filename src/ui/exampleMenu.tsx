import React from 'react';
import { dispatchSelectExample } from '../controller';
import { getExamples, exampleTagNames, exampleTagValues } from '../examples';


export default () =>

  <li className={"nav-item dropdown"}> 
    <a className="nav-link dropdown-toggle" href="#" tabIndex={0} data-toggle="dropdown" data-submenu>Examples</a>

    <div className="dropdown-menu">

      <div className="dropdown dropright dropdown-submenu">
        <button className="dropdown-item dropdown-toggle" type="button" data-toggle="dropdown">All</button>
        <div className="dropdown-menu">
          {getExamples().map(ex =>
            <button className="dropdown-item" key={ex.name}
              onClick={() => dispatchSelectExample(ex.name)}
              title={ex.description}>
              {ex.name}
            </button>
          )}
        </div>
      </div>

      {exampleTagNames.map(tag =>
        <div className="dropdown dropright dropdown-submenu">
          <button className="dropdown-item dropdown-toggle" type="button" data-toggle="dropdown">{tag}</button>
          <div className="dropdown-menu">
            {exampleTagValues[tag].map(tagValue =>
              <div className="dropdown dropright dropdown-submenu">
                <button className="dropdown-item dropdown-toggle" type="button">{tagValue}</button>
                <div className="dropdown dropdown-menu">
                  {/* <div className="dropdown dropright dropdown-menu"> */}
                    {getExamples().filter(e => (e.tags || []).find(t => t.tag === tag) && (e.tags || []).find(t => t.tag === tag).values.indexOf(tagValue) !== -1).map(ex =>
                      <button className="dropdown-item" key={ex.name}
                        onClick={() => dispatchSelectExample(ex.name)}
                        title={ex.description}>
                        {ex.name}
                      </button>
                    )}
                  </div>
                </div>
              // </div>
            )}
          </div>
        </div>
      )}
    </div>
  </li>