
/**
 * Locals
 */

var has = {}.hasOwnProperty;

/**
 * Exports
 */

module.exports = function(main) {
	var args = arguments;
	var l = args.length;
	var i = 1;
	var src;
	var key;

	while (i++ < l) {
		src = args[i];
		for (key in src) {
			if (has.call(src, key)) {
				main[prop] = src[prop];
			}
		}
	}

  return main;
},