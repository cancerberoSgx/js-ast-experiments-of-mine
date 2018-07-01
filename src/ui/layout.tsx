
import { State } from '../types';
import forkRibbon from './forkRibbon';
import React from 'react';
import navbar from './navbar';
import whatsThisModal from './whatsThisModal';

import SplitPane from 'react-split-pane';
import { verticalPaneChanged, horizontalPaneChanged } from './layoutPaneResizeUtil';
import diffModal from './diffModal';

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
      <div id="inputWorkspaceContainer"></div>

      <SplitPane split="vertical"
        defaultSize={'50%'}
        onChange={verticalPaneChanged}
        resizerStyle={{ background: '#000' }}
      >

        <div id="inputCodeWorkspaceContainer"></div>

        <div id="outputWorkspaceContainer"></div>

      </SplitPane>
    </SplitPane>

    {forkRibbon()}
    {whatsThisModal(state)}
    {diffModal(state)}
  </div>

