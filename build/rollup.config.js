import typescript from 'rollup-plugin-typescript2';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { resolve } from 'path';
import { readFileSync } from 'fs';

const OPWD = process.cwd();

process.chdir(resolve(__dirname, '..'));

const pkg = require(resolve('package.json'));
const tsconfig = resolve('src/tsconfig.build.json');

const external = [
	pkg.name,
	'fs',
	'path',
	...Object.keys(pkg.dependencies || {}),
	...Object.keys(pkg.devDependencies || {}),
];

const watch = {
	chokidar: true,
	include: 'src/**',
};

const plugins = [
	nodeResolve(),
	typescript({tsconfig}),
	commonjs(),
];

const esMainFile = resolve(pkg['jsnext:main']) || resolve('dist/main.es');
const jsMainFile = resolve(pkg['main']) || resolve('dist/main.js');

const banner = readFileSync(resolve('build/loader.js'), 'utf8');

const commonOutput = {
	intro: banner,
	sourcemap: true,
	name: pkg.name.replace(/^@/, '').replace(/\//g, '__'),
};

const config = [
	{
		input: resolve('src/_index.ts'),
		plugins,
		external,
		watch,
		output: [
			{
				file: esMainFile, format: 'esm',
				...commonOutput,
			},
		],
	},
	{
		input: resolve('src/_index.ts'),
		plugins,
		external,
		watch,
		output: [
			{
				file: jsMainFile, format: 'cjs',
				...commonOutput,
			},
		],
	},
];

process.chdir(OPWD);
export default config;
