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

## Custom keybinding
### Steps
1. Explain goal: Ctrl+U -> uppercase
1. Create keybinding
1. Create command
    - Explain commands
    - Explain immutable state
    - Explain ranges
    - Use scaffolding at first
    - Explain `return true`
1. Create helper
1. Register keybinding
1. Show result

### Code
Create keybinding:
```js
export const uppercaseKeybinding = {
  key: 'Ctrl-u',
  run: uppercase,
};
```

Create command:
```js
export function uppercase(view) {
  const transaction = view.state.changeByRange((range) =>
    uppercaseRange(range, view.state),
  );
  view.dispatch(transaction);

  return true;
}
```

Create helper:
```js
function uppercaseRange(range, state) {
  const originalText = state.sliceDoc(range.from, range.to);
  const newText = originalText.toUpperCase();

  const change = {
    from: range.from,
    insert: newText,
    to: range.to,
  };

  const transactionForRange = {
    changes: change,
    range,
  };

  return transactionForRange;
}
```

Register keybinding:
```js
import { uppercaseKeybinding } from './uppercase';
// ...
keymap.of([
  // ...
  uppercaseKeybinding,
]),
```

## Syntax highlighting
### Steps
1. Install deps
1. Create custom highlight style
1. Register custom highlight style
1. Show result

### Code
Install deps:
```sh
$ yarn add @datacamp/waffles-tokens
```

Create custom highlight style:
```js
import { HighlightStyle, tags as t } from '@codemirror/highlight';
import { colors } from '@datacamp/waffles-tokens';

const baseTokens = [
  { color: colors.blueText, tag: [t.atom, t.bool] },
  { color: colors.greenText, tag: t.comment },
  { color: colors.redText, tag: t.invalid },
  { color: colors.blueText, tag: t.keyword },
  { color: colors.pinkText, tag: t.number },
  { color: colors.pinkText, tag: t.string },
];

export const customHighlightStyle = HighlightStyle.define(baseTokens);
```

Register custom highlight style:
```js
import { customHighlightStyle } from './highlight';
// ...
export const basicSetup = [
  // ...
  // Replace: defaultHighlightStyle,
  customHighlightStyle,
];
```

## Custom theme
### Steps
1. Use JetBrains Mono font
    - Add font to HTML
    - Create theme
    - Use theme
1. Style active line
1. Style line numbers

### Code
Add font to HTML:
```html
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet"> 
```

Create theme:
```js
/* eslint-disable sort-keys-fix/sort-keys-fix */
import { EditorView } from '@codemirror/view';

export const customTheme = EditorView.theme({
  '.cm-scroller': {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '14px',
  },
});
```

Use theme:
```js
import { customTheme } from './theme';
// ... 
export const basicSetup = [
  // ...
  customTheme,
];
```

Style active line:
```js
import { colors } from '@datacamp/waffles-tokens';

export const customTheme = EditorView.theme({
  // ...
  '.cm-line': {
    border: '2px solid transparent',
    padding: '0',
  },
  '.cm-activeLine': {
    backgroundColor: colors.white,
    borderColor: colors.grey200,
  },
});
```

Style line numbers:
```js
export const customTheme = EditorView.theme({
  '.cm-gutters': {
    backgroundColor: 'white',
    borderRightColor: 'white',
  },
});
```