export type Reviver = (key: string, value: any) => any;
export type BeforeParse = (data: string) => string;

export interface Options {
	/**
	 * Applies a function to the JSON string before parsing.
	 */
	beforeParse?: BeforeParse;
	/**
	 * Prescribes how the value originally produced by parsing is transformed, before being returned.
	 * See the [`JSON.parse` docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Using_the_reviver_parameter) for more.
	 */
	reviver?: Reviver;
}

/**
 * Read and parse a JSON file.
 *
 * Strips UTF-8 BOM, uses graceful-fs, and throws more helpful JSON errors.
 *
 * @example
 *
 * import * as loadJsonFile from 'load-json-file';
 *
 * const json = loadJsonFile.sync('foo.json');
 * //=> {foo: true}
 */
export function sync<T = unknown>(filePath: string, options?: Options): T;

/**
 * Read and parse a JSON file.
 *
 * Strips UTF-8 BOM, uses graceful-fs, and throws more helpful JSON errors.
 *
 * @example
 *
 * import loadJsonFile from 'load-json-file';
 *
 * (async () => {
 * 	const json = await loadJsonFile('foo.json');
 * 	//=> {foo: true}
 * })();
 */
export default function loadJsonFile<T = unknown>(filePath: string, options?: Options): Promise<T>;
