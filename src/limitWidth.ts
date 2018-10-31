import { readFirstCompleteChar } from './firstCompleteChar';

export interface LimitResult {
	toString(): string;
	
	result: string;
	width: number;
}

function returnValue(result: string, width: number): LimitResult {
	return {
		result, width,
		toString() {
			return result;
		},
		[Symbol.toPrimitive]() {
			return result;
		},
	} as any;
}

export function limitWidth(original: string, limit: number, windowsConsole = false): LimitResult {
	let width = 0;
	let str = original;
	while (str.length > 0) {
		const item = readFirstCompleteChar(str, windowsConsole);
		
		const nextWidth = width + item.length;
		if (nextWidth > limit) {
			return returnValue(original.slice(0, original.length - str.length), width);
		}
		width += item.width;
		if (width === limit) {
			return returnValue(original.slice(0, original.length - str.length), width);
		}
		
		str = str.slice(item.length);
	}
	
	return returnValue(original, width);
}
