import path from 'path';
import test from 'ava';
import fn from './';

const fixture = path.join(__dirname, 'package.json');

test('async', async t => {
	const data = await fn(fixture);
	t.is(data.name, 'load-json-file');
});

test('sync', t => {
	t.is(fn.sync(fixture).name, 'load-json-file');
});
