import { javascript } from '@codemirror/lang-javascript';
import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';

import { basicSetup } from './basicSetup';

const initialState = EditorState.create({
  doc: `function greet(name) {\n  console.log(\`Hello, \${name}\`);\n}`,
  extensions: [basicSetup, javascript()],
});

const view = new EditorView({
  parent: document.getElementById('editor'),
  state: initialState,
});
