export default function isSelection(editorState) {
  const selection = editorState.getSelection();
  const start = selection.getStartOffset();
  const end = selection.getEndOffset();
  return start !== end;
}
