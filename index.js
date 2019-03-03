'use strict';
const path = require('path');
const {promisify} = require('util');
const fs = require('graceful-fs');
const stripBom = require('strip-bom');
const parseJson = require('parse-json');

const parse = (data, filePath, options = {}) => {
	data = stripBom(data);

	if (typeof options.beforeParse === 'function') {
		data = options.beforeParse(data);
	}

	return parseJson(data, options.reviver, path.relative(process.cwd(), filePath));
};

const loadJsonFile = async (filePath, options) => parse(await promisify(fs.readFile)(filePath, 'utf8'), filePath, options);
module.exports = loadJsonFile;
// TODO: Remove this for the next major release
module.exports.default = loadJsonFile;
module.exports.sync = (filePath, options) => parse(fs.readFileSync(filePath, 'utf8'), filePath, options);
