# CJKE strings module
Tools for **C**hinese **J**apanese **K**orean **E**moji string

This module is a replacement of `string-width` which lack of maintenance, I'll push patches into it when it becomes active again.

The code is come from:
 * Write by myself
 * Codebase is copied from sindresorhus/string-width
 * Learn about emojis from tonytonyjan/string-width
 * Unicode tables copied from many wiki pages

Mostly you also need a module called `stringz`

```js
describe("typescript", () => {
	it("is really great", () => {
		should(cleverMan).to.be('using it');
	});
});
```

## APIs
 * isCombiningCharacters - detect a character is in Combining Characters table
 * codePointWidth - get first complete character at beginning of given string, prevent &#FFFF; or ?
 * unicodeEscape - escape string as "\uxxxx\uxxxx\uxxxx" form
 * limitWidth - cut a limited display width of a string
 * stringWidth - calculate display width of a string

> Note:
All param "windowsConsole" defaults to `false`.
When `true`, combine marks (eg. A&#0300;) will count as width 1, emoji chain (👍🏽) will treat as many emojis (👍+🏽).
This is used for windows console
