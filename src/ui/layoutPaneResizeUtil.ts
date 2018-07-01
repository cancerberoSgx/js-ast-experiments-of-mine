import { programCodeWorkspace, outputWorkspace, inputCodeWorkspace } from '../main';

let lastHeight: number
let lastWidth: number
export function horizontalPaneChanged(h: number) {
  lastHeight = h
  lastWidth = lastWidth ||Math.trunc(document.body.clientWidth/2)
  programCodeWorkspace.setEditorHeight(h)
  outputWorkspace.setEditorHeight((document.body.clientHeight + 57) - h)
  inputCodeWorkspace.setEditorHeight((document.body.clientHeight + 57) - h)
  programCodeWorkspace.setEditorWidth(document.body.clientWidth)
  outputWorkspace.setEditorWidth(document.body.clientWidth - lastWidth)
  inputCodeWorkspace.setEditorWidth(lastWidth)
}

export function verticalPaneChanged(w: number) {
  lastWidth = w | lastWidth
  lastHeight = lastHeight ||Math.trunc(document.body.clientHeight/2)

  outputWorkspace.setEditorWidth(document.body.clientWidth - lastWidth)
  inputCodeWorkspace.setEditorWidth(lastWidth)
  programCodeWorkspace.setEditorWidth(document.body.clientWidth)

  outputWorkspace.setEditorHeight((document.body.clientHeight + 57) - lastHeight)
  inputCodeWorkspace.setEditorHeight(lastHeight + 57)
  programCodeWorkspace.setEditorHeight(lastHeight)
}