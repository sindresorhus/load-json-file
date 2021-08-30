import {expectType, expectAssignable} from 'tsd';
import {JsonValue} from 'type-fest';
import {loadJsonFile, loadJsonFileSync, Reviver, BeforeParse} from './index.js';

expectAssignable<Reviver>(() => 1);

expectType<BeforeParse>(data => data); // eslint-disable-line @typescript-eslint/no-unsafe-return

expectType<Promise<JsonValue>>(loadJsonFile('unicorn.json'));

expectType<JsonValue>(loadJsonFileSync('unicorn.json'));
