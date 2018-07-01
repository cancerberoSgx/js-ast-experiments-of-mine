
import { State } from '../types';
import forkRibbon from './forkRibbon';
import React from 'react';
import navbar from './navbar';
import whatsThisModal from './whatsThisModal';

import SplitPane from 'react-split-pane';
import { inputWorkspace, outputWorkspace, InputCodeProjectWorkspace, inputCodeWorkspace } from '../main';

export default (state: State) =>
  <div >
    {navbar(state)}
    <SplitPane
      split="horizontal"
      defaultSize={'50%'}
      onChange={horizontalPaneChanged}
      className="primary"
      pane1Style={{ background: '#eee' }}
      resizerStyle={{ background: '#000' }}
    >
      <div id="inputWorkspaceContainer"></div>

      <SplitPane split="vertical"
        // minSize={100}
        defaultSize={'50%'}
        paneStyle={{}}
        onChange={verticalPaneChanged}
        pane2Style={{ background: '#aaa4ba' }}>

        <div id="inputCodeWorkspaceContainer"></div>
        <div id="outputWorkspaceContainer"></div>

      </SplitPane>
    </SplitPane>

    {forkRibbon()}
    {whatsThisModal(state)}
  </div>


let lastHeight: number
let lastWidth: number
export  function horizontalPaneChanged(h: number) {
  lastHeight = h
  inputWorkspace.setEditorHeight(h)
  outputWorkspace.setEditorHeight((document.body.clientHeight + 57) - h)
  inputCodeWorkspace.setEditorHeight((document.body.clientHeight + 57) - h)
  inputWorkspace.setEditorWidth(document.body.clientWidth)
  outputWorkspace.setEditorWidth(document.body.clientWidth - lastWidth)
  inputCodeWorkspace.setEditorWidth(lastWidth)
}
export function verticalPaneChanged(w: number) {
  lastWidth = w
  outputWorkspace.setEditorWidth(document.body.clientWidth - w)
  inputCodeWorkspace.setEditorWidth(w)
  inputWorkspace.setEditorWidth(document.body.clientWidth)
  outputWorkspace.setEditorHeight((document.body.clientHeight + 57) - lastHeight)
  inputCodeWorkspace.setEditorHeight(lastHeight + 57)
  inputWorkspace.setEditorHeight(lastHeight)
}