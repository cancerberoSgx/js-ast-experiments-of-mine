import { programCodeWorkspace, outputWorkspace, inputCodeWorkspace } from './workspace';

let lastHeight: number = 0
let lastWidth: number = 0

export function horizontalPaneChanged(h: number) {
  lastHeight = h ===0 ?  Math.trunc(window.innerHeight / 2) : h 
  lastWidth = lastWidth || Math.trunc(window.innerWidth / 2)

  programCodeWorkspace.setEditorWidth(window.innerWidth)
  outputWorkspace.setEditorWidth(window.innerWidth - lastWidth)
  inputCodeWorkspace.setEditorWidth(lastWidth)

  programCodeWorkspace.setEditorHeight(lastHeight)
  outputWorkspace.setEditorHeight(window.innerHeight - lastHeight)
  inputCodeWorkspace.setEditorHeight(window.innerHeight - lastHeight)

  // console.log('horizontalPaneChanged', {lastWidth, lastHeight, windowWidth: window.innerWidth, windowHeight: window.innerHeight}) 
}

export function verticalPaneChanged(w: number) {
  lastWidth = w ===0 ?  Math.trunc(window.innerWidth / 2) : w
  lastHeight = lastHeight || Math.trunc(window.innerHeight / 2)

  outputWorkspace.setEditorWidth(window.innerWidth - lastWidth)
  inputCodeWorkspace.setEditorWidth(lastWidth)
  programCodeWorkspace.setEditorWidth(window.innerWidth)

  outputWorkspace.setEditorHeight(window.innerHeight - lastHeight)
  inputCodeWorkspace.setEditorHeight(window.innerHeight - lastHeight)
  programCodeWorkspace.setEditorHeight(lastHeight)

  // console.log('verticalPaneChanged',{lastWidth, lastHeight, windowWidth: window.innerWidth, windowHeight: window.innerHeight})
} 


export function resetLayout() {
  verticalPaneChanged(0)
  horizontalPaneChanged(0)
}