
import { State } from '../types';
import forkRibbon from './forkRibbon';
import React from 'react';
import navbar from './navbar';
import whatsThisModal from './modal/whatsThisModal';

import SplitPane from 'react-split-pane';
import { verticalPaneChanged, horizontalPaneChanged } from '../uiUtil';
import diffModal from './modal/diffModal';
import selectedExampleDescriptionModal from './modal/selectedExampleDescriptionModal';

export default (state: State) =>
  <div >
    {navbar(state)}
    <SplitPane
      split="horizontal"
      defaultSize={'50%'}
      onChange={horizontalPaneChanged}
      className="primary"
      resizerStyle={{ background: '#000' }}
    >
      <div>
        <div className="workspace-label">program code</div>
        <div id="inputWorkspaceContainer"></div>
      </div>
      <SplitPane split="vertical"
        defaultSize={'50%'}
        onChange={verticalPaneChanged}
        resizerStyle={{ background: '#000' }}
      > 
        <div>
          <div className="workspace-label">input code</div>
          <div id="inputCodeWorkspaceContainer"></div>
        </div>
        <div>
          <div className="workspace-label">output code</div>
          <div id="outputWorkspaceContainer"></div>
        </div>

      </SplitPane>
    </SplitPane>

    {forkRibbon()}
    {whatsThisModal(state)}
    {diffModal(state)}
    {selectedExampleDescriptionModal()}
  </div>

