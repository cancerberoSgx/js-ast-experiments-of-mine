import React from 'react';
import { getState } from '../../workspace';

export default () =>

  <div className={"modal fade"} id="selectedExampleDescriptionModal" role="dialog" aria-labelledby="selectedExampleDescriptionModalLabel" aria-hidden="true">
    <div className={"modal-dialog modal-lg"} role="document">
      <div className={"modal-content"}>  
        <div className={"modal-header"}>
          <h5 className={"modal-title"} id="selectedExampleDescriptionModalLabel">{getState().selectedExample.name}</h5>
          <button type="button" className={"close"} data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className={"modal-body"}>

          <p>The current example is called "{getState().selectedExample.name}"</p>

          <p>Description: </p>
          {getState().selectedExample.description.split('\n').map(line =>
            <p>{line}</p>
          )}

          <p>Tags: </p>
          <pre>{JSON.stringify(getState().selectedExample.tags, null, 2)}</pre>

        </div>
        <div className={"modal-footer"}>
          <button type="button" className={"btn btn-secondary"} data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

