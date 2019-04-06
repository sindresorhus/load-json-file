import {expectType} from 'tsd';
import {JsonValue} from 'type-fest';
import loadJsonFile = require('.');
import {Reviver, BeforeParse} from '.';

expectType<Reviver>(() => 1);
expectType<Reviver>((a: string) => a.length);
expectType<Reviver>((a: string, b: string) => a.length - b.length);

expectType<BeforeParse>(data => data);

expectType<Promise<JsonValue>>(loadJsonFile('unicorn.json'));

expectType<JsonValue>(loadJsonFile.sync('unicorn.json'));
