import { autocompletion, completionKeymap } from '@codemirror/autocomplete';
import { closeBrackets, closeBracketsKeymap } from '@codemirror/closebrackets';
import { defaultKeymap } from '@codemirror/commands';
import { commentKeymap } from '@codemirror/comment';
import { foldGutter, foldKeymap } from '@codemirror/fold';
import { lineNumbers } from '@codemirror/gutter';
import { defaultHighlightStyle } from '@codemirror/highlight';
import { history, historyKeymap } from '@codemirror/history';
import { indentOnInput } from '@codemirror/language';
import { lintKeymap } from '@codemirror/lint';
import { bracketMatching } from '@codemirror/matchbrackets';
import { rectangularSelection } from '@codemirror/rectangular-selection';
import { highlightSelectionMatches, searchKeymap } from '@codemirror/search';
import { EditorState } from '@codemirror/state';
import {
  drawSelection,
  highlightActiveLine,
  highlightSpecialChars,
  keymap,
} from '@codemirror/view';

/// This is an extension value that just pulls together a whole lot of
/// extensions that you might want in a basic editor. It is meant as a
/// convenient helper to quickly set up CodeMirror without installing
/// and importing a lot of packages.
///
/// Specifically, it includes...
///
///  - [the default command bindings](#commands.defaultKeymap)
///  - [line numbers](#gutter.lineNumbers)
///  - [special character highlighting](#view.highlightSpecialChars)
///  - [the undo history](#history.history)
///  - [a fold gutter](#fold.foldGutter)
///  - [custom selection drawing](#view.drawSelection)
///  - [multiple selections](#state.EditorState^allowMultipleSelections)
///  - [reindentation on input](#language.indentOnInput)
///  - [the default highlight style](#highlight.defaultHighlightStyle) (as fallback)
///  - [bracket matching](#matchbrackets.bracketMatching)
///  - [bracket closing](#closebrackets.closeBrackets)
///  - [autocompletion](#autocomplete.autocompletion)
///  - [rectangular selection](#rectangular-selection.rectangularSelection)
///  - [active line highlighting](#view.highlightActiveLine)
///  - [selection match highlighting](#search.highlightSelectionMatches)
///  - [search](#search.searchKeymap)
///  - [commenting](#comment.commentKeymap)
///  - [linting](#lint.lintKeymap)
///
/// (You'll probably want to add some language package to your setup
/// too.)
///
/// This package does not allow customization. The idea is that, once
/// you decide you want to configure your editor more precisely, you
/// take this package's source (which is just a bunch of imports and
/// an array literal), copy it into your own code, and adjust it as
/// desired.
export const basicSetup = [
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
    ...lintKeymap,
  ]),
];