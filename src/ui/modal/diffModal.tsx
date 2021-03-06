import React from 'react';
import { State } from '../../types';
import { getMonaco } from 'monaco-typescript-project-util';
import { inputCodeWorkspace, outputWorkspace } from '../../workspace';

export default (state: State) =>

  <div className={"modal fade"} id="diffEditorModal" role="dialog" aria-labelledby="diffEditorModalTitle" aria-hidden="true">
    <div className={"modal-dialog modal-lg"} role="document">
      <div className={"modal-content"}>
        <div className={"modal-header"}>
          <h5 className={"modal-title"} id="diffEditorModalTitle">Diff</h5>
          <button type="button" className={"close"} data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className={"modal-body"}>
          <div id="diffEditorContainer" className="editor"></div>
        </div>
        <div className={"modal-footer"}>
          <button type="button" className={"btn btn-secondary"} data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>


 
 
import * as monaco from 'monaco-editor'
let $modal: any
export function showDiffModalHandler() {

  if($modal){
    $modal.modal('show')
  } else {

    $modal = $('#diffEditorModal')
    $modal.modal({})

    let diffEditor: monaco.editor.IStandaloneDiffEditor
    $modal.on('hide.bs.modal', () => {
      if (diffEditor) {
        diffEditor.dispose()
        diffEditor = null
      }
    })
    
    $modal.on('shown.bs.modal', () => {
      if(diffEditor){
        return 
      } 
      const editorContainer = document.querySelector<HTMLElement>('#diffEditorContainer')
      Object.assign(editorContainer.style, {
        width: Math.trunc(window.innerWidth * 0.95) + 'px',
        height: Math.trunc(window.innerHeight * 0.80) + 'px'
      })
      var originalModel = inputCodeWorkspace.getCurrentFileModel()
      var modifiedModel = outputWorkspace.getCurrentFileModel()
      diffEditor = getMonaco().editor.createDiffEditor(editorContainer, {
        automaticLayout: true
      });
      diffEditor.setModel({
        original: originalModel,
        modified: modifiedModel
      });
    })
  }
}