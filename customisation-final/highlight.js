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
