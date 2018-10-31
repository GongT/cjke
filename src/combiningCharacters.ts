export const combiningCharactersRegex = /[\u{0300}-\u{036F}]|[\u{1AB0}-\u{1AFF}]|[\u{1DC0}-\u{1DFF}]|[\u{20D0}-\u{20FF}]|[\u{FE20}-\u{FE2F}]/ug;

/** @internal */
export const combiningCharactersRegexStarting = /^([\u{0300}-\u{036F}]|[\u{1AB0}-\u{1AFF}]|[\u{1DC0}-\u{1DFF}]|[\u{20D0}-\u{20FF}]|[\u{FE20}-\u{FE2F}])+/ug;

export function isCombiningCharacters(code: number) {
	return (code >= 0x300 && code <= 0x36F) ||
	       (code >= 0x1AB0 && code <= 0x1AFF) ||
	       (code >= 0x1DC0 && code <= 0x1DFF) ||
	       (code >= 0x20D0 && code <= 0x20FF) ||
	       (code >= 0xFE20 && code <= 0xFE2F);
}
