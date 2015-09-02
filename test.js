'use strict';
var path = require('path');
var test = require('ava');
var fn = require('./');
var fixture = path.join(__dirname, 'package.json');

test('async', function (t) {
	return fn(fixture).then(function (data) {
		t.is(data.name, 'load-json-file');
	});
});

test('sync', function (t) {
	t.is(fn.sync(fixture).name, 'load-json-file');
	t.end();
});
