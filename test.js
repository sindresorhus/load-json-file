import path from 'path';
import test from 'ava';
import m from './';

const fixture = path.join(__dirname, 'package.json');

test('async', async t => {
	const data = await m(fixture);
	t.is(data.name, 'load-json-file');
});

test('sync', t => {
	t.is(m.sync(fixture).name, 'load-json-file');
});
