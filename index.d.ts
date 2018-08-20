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
 * Read and parse a JSON file
 *
 * Strips UTF-8 BOM, uses graceful-fs, and throws more helpful JSON errors.
 *
 * @param {string} filepath Filepath
 * @param {any} data Data
 * @param {object} [options] Optional parameters
 * @param {function} [options.beforeParse] Applies a function to the JSON string before parsing.
 * @param {function} [options.reviver] Prescribes how the value originally produced by parsing is transformed, before being returned.
 * See the [JSON.parse docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Using_the_reviver_parameter) for more.
 * @returns {void}
 * @example
 * const loadJsonFile = require('load-json-file');
 *
 * loadJsonFile.sync('foo.json')
 * console.log(json);
 */
export function sync(filepath: string, options?: Options): void;

/**
 * Read and parse a JSON file
 *
 * Strips UTF-8 BOM, uses graceful-fs, and throws more helpful JSON errors.
 *
 * @param {string} filepath Filepath
 * @param {any} data Data
 * @param {object} [options] Optional parameters
 * @param {function} [options.beforeParse] Applies a function to the JSON string before parsing.
 * @param {function} [options.reviver] Prescribes how the value originally produced by parsing is transformed, before being returned.
 * See the [JSON.parse docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Using_the_reviver_parameter) for more.
 * @returns {Promise<void>}
 * @example
 * const loadJsonFile = require('load-json-file');
 *
 * loadJsonFile('foo.json').then(json => {
 * 	console.log(json);
 * 	//=> {foo: true}
 * });
 */
export default function loadJsonFile(filepath: string, options?: Options): Promise<void>;
