import {expectType} from 'tsd-check';
import loadJsonFile, {sync, Reviver, BeforeParse} from '.';

(async () => {
	// To-Do => Expand Tests
	// https://github.com/sindresorhus/write-json-file/blob/master/index.test-d.ts
	expectType<Reviver>(() => 1);
	expectType<Reviver>((a: string) => a.length);
	expectType<Reviver>((a: string, b: string) => a.length - b.length);

	expectType<BeforeParse>((data) => data);

	expectType<unknown>(await loadJsonFile('unicorn.json'));

	expectType<unknown>(sync('unicorn.json'));
})();