# Getting started
## Steps
1. Create project (provided)
    - `index.html`
    - `index.js`
    - `package.json`
    - jsconfig
    - Parcel
1. Install deps
1. Basic setup
1. Start Parcel
1. Show intermediate result
1. Setup syntax highlighting
1. Install deps: auto by Parcel
1. Show result

## Code
Install deps:
```sh
$ yarn add @codemirror/view @codemirror/state @codemirror/basic-setup
```

Basic setup:
```js
import { basicSetup } from '@codemirror/basic-setup';
import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';

const initialState = EditorState.create({
  doc: `function greet(name) {\n  console.log(\`Hello, \${name}\`);\n}`,
  extensions: [basicSetup],
});

const view = new EditorView({
  parent: document.getElementById('editor'),
  state: initialState,
});

```

Syntax highlighting:
```js
import { javascript } from '@codemirror/lang-javascript';
// ...
const initialState = EditorState.create({
  // ...
  extensions: [basicSetup, javascript()],
})
```