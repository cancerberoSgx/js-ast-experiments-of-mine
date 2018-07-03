import React from 'react';
import { dispatchSelectExample } from '../controller';
import { getExamples, exampleTagNames, exampleTagValues } from '../examples';


export default () =>

  <li className={"nav-item dropdown examples-main-menu-container"}> 
    <a className="nav-link dropdown-toggle" href="#" tabIndex={0} data-toggle="dropdown" data-submenu>Examples</a>

    <div className="dropdown-menu examples-main-menu">

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
        <div className="dropdown dropright dropdown-submenu" key={tag}>
          <button className="dropdown-item dropdown-toggle" type="button" data-toggle="dropdown" data-tag-label={tag}>{tag}</button>
          <div className="dropdown-menu" data-tag={tag}>
            {exampleTagValues[tag].map(tagValue =>
              <div className="dropdown dropright dropdown-submenu" key={tagValue}>
                <button className="dropdown-item dropdown-toggle"  data-tag-value-label={tagValue} type="button">{tagValue}</button>
                <div className="dropdown dropdown-menu" data-tag-value={tagValue}>
                    {getExamples().filter(e => (e.tags || []).find(t => t.tag === tag) && (e.tags || []).find(t => t.tag === tag).values.indexOf(tagValue) !== -1).map(ex =>
                      <button className="dropdown-item" key={ex.name}
                        onClick={() => dispatchSelectExample(ex.name)}
                        title={ex.description}>
                        {ex.name}
                      </button>
                    )}
                  </div>
                </div>
            )}
          </div>
        </div>
      )}
    </div>
  </li>