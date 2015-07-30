'use strict';

function Random(range) {
	if (!Random.isRange(range)) {
		throw new Error('Range for random-measure has invalid format. ex) -128~128');
	}

	var val = range.split('~');
	this.from = Number(val[0]);
	this.to = Number(val[1]);

	if (this.from < 0) {
		this.to += -(this.from);
	}
}

Random.prototype.measure = function () {
	return Math.floor((Math.random() * this.to) + this.from);
};

Random.isRange = function(range) {
	return /-?(\d.*)~-?(\d.*)/.test(range);
};

module.exports = Random;
