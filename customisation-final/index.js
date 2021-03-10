import { javascript } from '@codemirror/lang-javascript';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';

import { basicSetup } from './basicSetup';
import { uppercaseKeybinding } from './uppercase';

const initialState = EditorState.create({
  doc: `function greet(name) {\n  console.log(\`Hello, \${name}\`);\n}`,
  extensions: [basicSetup, javascript(), keymap.of([uppercaseKeybinding])],
});

const view = new EditorView({
  parent: document.getElementById('editor'),
  state: initialState,
});
