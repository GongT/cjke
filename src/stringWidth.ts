import { readFirstCompleteChar } from './firstCompleteChar';

export function stringWidth(str: string, windowsConsole = false) {
	let width = 0;
	while (str.length > 0) {
		const item = readFirstCompleteChar(str, windowsConsole);
		width += item.width;
		
		str = str.slice(item.length);
	}
	return width;
}
