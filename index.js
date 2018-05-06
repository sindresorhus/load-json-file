'use strict';
const path = require('path');
const fs = require('graceful-fs');
const stripBom = require('strip-bom');
const parseJson = require('parse-json');
const pify = require('pify');

const parse = (data, fp, options) => {
	options = options || {};
	data = stripBom(data);
	if (typeof options.beforeParse === 'function') {
		data = options.beforeParse(data);
	}
	return parseJson(data, options.reviver, path.relative('.', fp));
};

module.exports = (fp, options) => pify(fs.readFile)(fp, 'utf8').then(data => parse(data, fp, options));
module.exports.sync = (fp, options) => parse(fs.readFileSync(fp, 'utf8'), fp, options);
