interface Options {
	/**
	 * Applies a function to the JSON string before parsing.
	 */
	beforeParse?: Function
	/**
	 * Prescribes how the value originally produced by parsing is transformed, before being returned.
	 * See the [JSON.parse docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Using_the_reviver_parameter) for more.
	 */
	reviver?: Function
}

/**
 * Read and parse a JSON file.
 *
 * Strips UTF-8 BOM, uses graceful-fs, and throws more helpful JSON errors.
 *
 * @returns {void}
 * @example
 * import * as loadJsonFile from 'load-json-file';
 *
 * loadJsonFile.sync('foo.json')
 * console.log(json);
 */
export function sync(filepath: string, options?: Options): void;

/**
 * Read and parse a JSON file.
 *
 * Strips UTF-8 BOM, uses graceful-fs, and throws more helpful JSON errors.
 *
 * @returns {Promise<void>}
 * @example
 * import loadJsonFile 'load-json-file';
 *
 * (async () => {
 *     await loadJsonFile('foo.json');
 *     console.log('done');
 * })();
 */
export default function loadJsonFile(filepath: string, options?: Options): Promise<void>;
