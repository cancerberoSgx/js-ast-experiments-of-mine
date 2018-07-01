import { programCodeWorkspace, outputWorkspace, inputCodeWorkspace } from '../main';

let lastHeight: number = 0
let lastWidth: number = 0

export function horizontalPaneChanged(h: number) {
  lastHeight = h || lastHeight || Math.trunc(window.innerHeight / 2)
  lastWidth = lastWidth || Math.trunc(window.innerWidth / 2)

  programCodeWorkspace.setEditorWidth(window.innerWidth)
  outputWorkspace.setEditorWidth(window.innerWidth - lastWidth)
  inputCodeWorkspace.setEditorWidth(lastWidth)

  programCodeWorkspace.setEditorHeight(lastHeight)
  outputWorkspace.setEditorHeight(window.innerHeight - lastHeight)
  inputCodeWorkspace.setEditorHeight(window.innerHeight - lastHeight)

  console.log('horizontalPaneChanged', {lastWidth, lastHeight, windowWidth: window.innerWidth, windowHeight: window.innerHeight}) 
}

export function verticalPaneChanged(w: number) {
  lastWidth = w || lastWidth || Math.trunc(window.innerWidth / 2)
  lastHeight = lastHeight || Math.trunc(window.innerHeight / 2)

  outputWorkspace.setEditorWidth(window.innerWidth - lastWidth)
  inputCodeWorkspace.setEditorWidth(lastWidth)
  programCodeWorkspace.setEditorWidth(window.innerWidth)

  outputWorkspace.setEditorHeight(window.innerHeight - lastHeight)
  inputCodeWorkspace.setEditorHeight(window.innerHeight - lastHeight)
  programCodeWorkspace.setEditorHeight(lastHeight)

  console.log('verticalPaneChanged',{lastWidth, lastHeight, windowWidth: window.innerWidth, windowHeight: window.innerHeight})
} 