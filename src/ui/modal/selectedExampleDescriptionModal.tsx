import React from 'react';
import { getState } from '../../workspace';

export default ()=>

<div className={"modal fade"} id="selectedExampleDescriptionModal" role="dialog" aria-labelledby="selectedExampleDescriptionModalLabel" aria-hidden="true">
  <div className={"modal-dialog modal-lg"} role="document">
    <div className={"modal-content"}>
      <div className={"modal-header"}>
        <h5 className={"modal-title"} id="selectedExampleDescriptionModalLabel">What's this</h5>
        <button type="button" className={"close"} data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className={"modal-body"}>
      
        <h3>{getState().selectedExample.name}</h3>

        <h4>Description</h4>

        <p>{getState().selectedExample.description}</p>

      </div>
      <div className={"modal-footer"}>
        <button type="button" className={"btn btn-secondary"} data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

