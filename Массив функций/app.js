/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

var compose = function(functions) {
    
	return function(x) {
        for (let index = functions.length - 1; index != - 1; index--) {
            x = functions[index](x)
        }
        console.log(x);
    }
};



const fn = compose([x => x + 1, x => 2 * x])
fn(4) // 9