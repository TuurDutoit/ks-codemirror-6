/* eslint-disable sort-keys-fix/sort-keys-fix */
import { EditorView } from '@codemirror/view';
import { colors } from '@datacamp/waffles-tokens';

export const customTheme = EditorView.theme({
  '.cm-scroller': {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '14px',
  },
  '.cm-line': {
    border: '2px solid transparent',
    padding: '0',
  },
  '.cm-activeLine': {
    backgroundColor: colors.white,
    borderColor: colors.grey200,
  },
  '.cm-gutters': {
    backgroundColor: 'white',
    borderRightColor: 'white',
  },
});
