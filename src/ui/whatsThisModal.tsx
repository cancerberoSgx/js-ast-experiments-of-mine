import React from 'react';
import { State } from '../types';

export default (state: State)=>

<div className={"modal fade"} id="whatsThisModal" role="dialog" aria-labelledby="whatsThisModalLabel" aria-hidden="true">
  <div className={"modal-dialog modal-lg"} role="document">
    <div className={"modal-content"}>
      <div className={"modal-header"}>
        <h5 className={"modal-title"} id="whatsThisModalLabel">What's this</h5>
        <button type="button" className={"close"} data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className={"modal-body"}>
      
        <p>This is a playground to test (and learn) JavaScript technologies related JavaScript / TypeScript code parsing, AST, transversing, transformations, parsing, code generation, etc. Right now it support libraries like recast, jscodeshift, ast-types, esprima, acorn, astring, etc.</p>
        
        <p>At the left you have editors for the core being executed (program) and the input code that will be processed by it. At the right the output returned by the program. At the top there's a menu that allows you to select one of the available examples and execute it.  </p>

        <p><a href="https://github.com/cancerberoSgx/js-ast-experiments-of-mine">Project home page</a>. </p>

      </div>
      <div className={"modal-footer"}>
        <button type="button" className={"btn btn-secondary"} data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

