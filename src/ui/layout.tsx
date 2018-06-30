import exampleList from './exampleList';
import { State } from '../types';
import forkRibbon from './forkRibbon';
import React from 'react';
import navbar from './navbar';
export default (state: State) => 
<div className="container-fluid">
  <h5>Welcome to my JavaScript/TypeScript AST technology experiments</h5>
  {navbar(state)}
  {exampleList(state)}
  {forkRibbon()}
</div>


