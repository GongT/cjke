///<reference types="mocha"/>

import { expect } from 'chai';
import { CodePointInfo, readFirstCompleteChar } from './firstCompleteChar';
import 'source-map-support/register';
import { unicodeEscape } from './escapeUnicode';
import { stringWidth } from './stringWidth';

function create(char: string, width: number, winCmd = false) {
	let r: CodePointInfo;
	before(() => {
		r = readFirstCompleteChar(`${char}👌~ working ${char}[${unicodeEscape(char)}]`, winCmd);
	});
	it(`should catch output of "${char}"`, function () {
		expect(r.data).is.equal(char);
	});
	it(`should has length of "${char.length}"`, function () {
		expect(r.length).is.equal(char.length);
	});
	it(`should has width of "${width}"`, function () {
		expect(r.width).is.equal(width);
	});
}

// basic
describe('Basic', () => {
	describe('Empty string', () => {
		let r: CodePointInfo;
		before(() => {
			r = readFirstCompleteChar('');
		});
		it(`should return empty`, function () {
			expect(r.data).is.equal('');
		});
		it(`should has length of "0"`, function () {
			expect(r.length).is.equal(0);
		});
		it(`should has width of "0"`, function () {
			expect(r.width).is.equal(0);
		});
	});
	
	describe('Simple word', () => create('W', 1));
	const colorEscape = '\x1B[38;5;10m';
	describe(`${colorEscape}escape sequence\x1B[0m`, () => create(colorEscape, 0));
	
	describe('Escape character', () => create('\x1B', 0));
	describe('Line feed', () => create('\r', 0));
	describe('New line', () => create('\n', 0));
	describe('BELL', () => create('\x07', 0));
});

// CJK
describe('CJK', () => {
	describe('chinese word', () => create('啊', 2));
	describe('japanese word', () => create('あ', 2));
	describe('korean word', () => create('깦', 2));
});

// combining
describe('Combining', () => {
	describe('Combined words', () => create('A\u0300', 1));
	describe('Combined words (cmd)', () => create('A\u0300', 2, true));
	
	describe('Combined CJK words', () => create('啊\u0300', 2));
	describe('Combined CJK words (cmd)', () => create('啊\u0300', 3, true));
	
	describe('Multiple combined words', () => create('A\u0300\u0300\u0300', 1));
	describe('Multiple combined words (cmd)', () => create('A\u0300\u0300\u0300', 4, true));
	
	describe('Combined character', () => create('\u0300', 0));
	describe('Combined character (cmd)', () => create('\u0300', 1, true));
	
	describe('Multiple combined character', () => create('\u0300\u0300\u0300', 0));
	describe('Multiple combined character (cmd)', () => create('\u0300\u0300\u0300', 3, true));
});

// emoji
describe('Emojis', () => {
	describe('😂', () => create('😂', 2));
	describe('👍 (cmd)', () => create('👍', 2, true));
	
	describe('combined 😂\u0300', () => create('😂\u0300', 2));
	describe('combined 😂\u0300 (cmd)', () => create('😂\u0300', 3, true));
	
	describe('sequence 👍🏽', () => create('👍🏽', 2));
	describe('sequence 👍🏽 (cmd)', () => create('👍🏽', 4, true));
	
	describe('combined sequence 👍🏽\u0300', () => create('👍🏽\u0300', 2));
	describe('combined sequence 👍🏽\u0300 (cmd)', () => create('👍🏽\u0300', 5, true));
});

// basic width counting
describe('#stringWidth', () => {
	describe('Width of 𠮟', () => {
		it('should be 2', function () {
			expect(stringWidth('𠮟')).to.equal(2);
		});
	});
	describe('Width of 𠮟👍🏽', () => {
		it('should be 4', function () {
			expect(stringWidth('𠮟👍🏽')).to.equal(4);
		});
	});
	describe('Width of 😂😂😂', () => {
		it('should be 6', function () {
			expect(stringWidth('😂😂😂')).to.equal(6);
		});
	});
	describe('Width of A\u0300', () => {
		it('should be 1', function () {
			expect(stringWidth('A\u0300')).to.equal(1);
		});
	});
	describe('Width of A\u0300 (on cmd)', () => {
		it('should be 2', function () {
			expect(stringWidth('A\u0300', true)).to.equal(2);
		});
	});
	describe('Width of 😂\u0300', () => {
		it('should be 2', function () {
			expect(stringWidth('😂\u0300')).to.equal(2);
		});
	});
	describe('Width of 😂\u0300 (on cmd)', () => {
		it('should be 3', function () {
			expect(stringWidth('😂\u0300', true)).to.equal(3);
		});
	});
});
