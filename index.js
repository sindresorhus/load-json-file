import {readFileSync} from 'node:fs';
import {readFile} from 'node:fs/promises';

const parse = (buffer, {beforeParse, reviver} = {}) => {
	// Unlike `buffer.toString()` and `fs.readFile(path, 'utf8')`, `TextDecoder`` will remove BOM.
	let data = new TextDecoder().decode(buffer);

	if (typeof beforeParse === 'function') {
		data = beforeParse(data);
	}

	return JSON.parse(data, reviver);
};

export async function loadJsonFile(filePath, options) {
	const buffer = await readFile(filePath);
	return parse(buffer, options);
}

export function loadJsonFileSync(filePath, options) {
	const buffer = readFileSync(filePath);
	return parse(buffer, options);
}
