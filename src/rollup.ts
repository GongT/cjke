import * as isFullwidthCodePointProxy from 'is-fullwidth-code-point';
import * as ansiRegexConstructorProxy from 'ansi-regex';
import * as emojiRegexConstructorProxy from 'emoji-regex/es2015';

/** @internal */
export const isFullwidthCodePoint: typeof isFullwidthCodePointProxy = (<any>isFullwidthCodePointProxy).default || isFullwidthCodePointProxy;
/** @internal */
export const ansiRegexConstructor: typeof ansiRegexConstructorProxy = (<any>ansiRegexConstructorProxy).default || ansiRegexConstructorProxy;
/** @internal */
export const emojiRegexConstructor: typeof emojiRegexConstructorProxy = (<any>emojiRegexConstructorProxy).default || emojiRegexConstructorProxy;
