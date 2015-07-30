'use strict';
var assert = require('assert');
var RandomMeasure = require('./');

function testRandome(from, to) {
	var m = new RandomMeasure(from + '~' + to);
	var loop = 100000;

	while(--loop) {
		var val = m.measure();
		assert.ok(from < val < to, 'return invalid value: ' + val + ' to: ' + to + ' from: ' + from);
	}
}
it('should returns number be in given ranges', function () {
	testRandome(0, 100);
	testRandome(-100, 100);
	testRandome(500, 10000);
	testRandome(-128, 128);
	testRandome(10, 20);
	testRandome(-1500, 10000);
});
