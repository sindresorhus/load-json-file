import path from 'node:path';
import {fileURLToPath} from 'node:url';
import test from 'ava';
import {loadJsonFile, loadJsonFileSync} from './index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fixture = path.join(__dirname, 'package.json');

test('async', async t => {
	const data = await loadJsonFile(fixture);
	t.is(data.name, 'load-json-file');
});

test('sync', t => {
	t.is(loadJsonFileSync(fixture).name, 'load-json-file');
});

test('beforeParse option', async t => {
	const data = await loadJsonFile(fixture, {
		beforeParse: string => string.replace('"name": "load-json-file"', '"name": "foo"'),
	});
	t.is(data.name, 'foo');
});

test('reviver option', async t => {
	const data = await loadJsonFile(fixture, {
		reviver: (key, value) => key === 'name' ? 'foo' : value,
	});
	t.is(data.name, 'foo');
});
