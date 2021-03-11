# Customisation

## Extract basic setup
### Steps
1. Create project (provided)
1. Start Parcel
1. Show starter
1. Copy basic-setup: https://github.com/codemirror/basic-setup/blob/main/src/basic-setup.ts
1. Remove TS types
1. Swap basic-setup
1. Show result

### Code
Basic setup source:
```js
import {keymap, highlightSpecialChars, drawSelection, highlightActiveLine} from "@codemirror/view"
import {Extension, EditorState} from "@codemirror/state"
import {history, historyKeymap} from "@codemirror/history"
import {foldGutter, foldKeymap} from "@codemirror/fold"
import {indentOnInput} from "@codemirror/language"
import {lineNumbers} from "@codemirror/gutter"
import {defaultKeymap} from "@codemirror/commands"
import {bracketMatching} from "@codemirror/matchbrackets"
import {closeBrackets, closeBracketsKeymap} from "@codemirror/closebrackets"
import {searchKeymap, highlightSelectionMatches} from "@codemirror/search"
import {autocompletion, completionKeymap} from "@codemirror/autocomplete"
import {commentKeymap} from "@codemirror/comment"
import {rectangularSelection} from "@codemirror/rectangular-selection"
import {defaultHighlightStyle} from "@codemirror/highlight"
import {lintKeymap} from "@codemirror/lint"

export const basicSetup: Extension = [
  lineNumbers(),
  highlightSpecialChars(),
  history(),
  foldGutter(),
  drawSelection(),
  EditorState.allowMultipleSelections.of(true),
  indentOnInput(),
  defaultHighlightStyle.fallback,
  bracketMatching(),
  closeBrackets(),
  autocompletion(),
  rectangularSelection(),
  highlightActiveLine(),
  highlightSelectionMatches(),
  keymap.of([
    ...closeBracketsKeymap,
    ...defaultKeymap,
    ...searchKeymap,
    ...historyKeymap,
    ...foldKeymap,
    ...commentKeymap,
    ...completionKeymap,
    ...lintKeymap
  ])
]

export {EditorView} from "@codemirror/view"
export {EditorState} from "@codemirror/state"
```

Swap basic setup:
```js
import { basicSetup } from './basicSetup';
```

## Bind tab key
### Steps
1. Why?
    - Don't trap Tab key: bad for accessibility
    - If you do this, mention Escape hatch!
1. Add keybinding to basic setup
1. Show result

### Code
Keybinding:
```js
import { defaultKeymap, defaultTabBinding } from '@codemirror/commands';
// ...
keymap.of([
  // ...
  defaultTabBinding,
]),
```

## Set tab size
### Steps
1. Show current tab size (4)
1. Set tab size
1. Show result

### Code
Set tab size:
```js
// ...
export const basicSetup = [
  // ...
  EditorState.tabSize.of(2),
];
```