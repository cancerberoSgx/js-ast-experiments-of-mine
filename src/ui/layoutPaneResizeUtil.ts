import { programCodeWorkspace, outputWorkspace, inputCodeWorkspace } from '../main';

let lastHeight: number = 0
let lastWidth: number = 0
export function horizontalPaneChanged(h: number) {
  lastHeight = h || lastHeight
  lastWidth = lastWidth || Math.trunc(window.innerWidth / 2)

  programCodeWorkspace.setEditorHeight(lastHeight)
  outputWorkspace.setEditorHeight(window.innerHeight - lastHeight)
  inputCodeWorkspace.setEditorHeight(window.innerHeight - lastHeight)

  programCodeWorkspace.setEditorWidth(window.innerWidth)
  outputWorkspace.setEditorWidth(window.innerWidth - lastWidth)
  inputCodeWorkspace.setEditorWidth(lastWidth)
  console.log('horizontalPaneChanged', {lastWidth, lastHeight, windowWidth: window.innerWidth, windowHeight: window.innerHeight})
}

export function verticalPaneChanged(w: number) {
  lastWidth = w || lastWidth
  lastHeight = lastHeight || Math.trunc(window.innerHeight / 2)
  
  outputWorkspace.setEditorWidth(window.innerWidth - lastWidth)
  inputCodeWorkspace.setEditorWidth(lastWidth)
  programCodeWorkspace.setEditorWidth(window.innerWidth)

  outputWorkspace.setEditorHeight(window.innerHeight - lastHeight)
  inputCodeWorkspace.setEditorHeight(lastHeight)
  programCodeWorkspace.setEditorHeight(lastHeight)
  console.log('verticalPaneChanged',{lastWidth, lastHeight, windowWidth: window.innerWidth, windowHeight: window.innerHeight})
}