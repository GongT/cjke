//// - rollup
//// - base
export { emojiRegex } from './base';
export { emojiRegexStarting } from './base';
export { emojiSimpleRegex } from './base';
export { SupportInfo } from './base';
export { allSupport } from './base';
export { windowsConsole } from './base';
export { mintty } from './base';
//// - combiningCharacters
export { combiningCharactersRegex } from './combiningCharacters';
export { isCombiningCharacters } from './combiningCharacters';
//// - escapeUnicode
export { unicodeEscape } from './escapeUnicode';
//// - firstCompleteChar
export { CodePointInfo } from './firstCompleteChar';
export { readFirstCompleteChar } from './firstCompleteChar';
//// - limitWidth
export { LimitResult } from './limitWidth';
export { limitWidth } from './limitWidth';
//// - stringWidth
export { stringWidth } from './stringWidth';
//// - test

/*
{
    "baseIndentSize": 0,
    "indentSize": 4,
    "tabSize": 4,
    "indentStyle": 2,
    "newLineCharacter": "\n",
    "convertTabsToSpaces": false,
    "insertSpaceAfterCommaDelimiter": true,
    "insertSpaceAfterSemicolonInForStatements": true,
    "insertSpaceBeforeAndAfterBinaryOperators": true,
    "insertSpaceAfterConstructor": false,
    "insertSpaceAfterKeywordsInControlFlowStatements": true,
    "insertSpaceAfterFunctionKeywordForAnonymousFunctions": false,
    "insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": false,
    "insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": false,
    "insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": true,
    "insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces": false,
    "insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces": false,
    "insertSpaceAfterTypeAssertion": false,
    "insertSpaceBeforeFunctionParenthesis": false,
    "placeOpenBraceOnNewLineForFunctions": false,
    "placeOpenBraceOnNewLineForControlBlocks": false,
    "insertSpaceBeforeTypeAnnotation": false
}
*/