l1 = [2,4,3]
l2 = [5,6,4]

var addTwoNumbers = function(l1, l2) {
    console.log(typeof l1);

    s1 = parseInt(l1.join(''))
    s2 = parseInt(l2.join(''))

    return String(s1+s2).split('')

};

console.log(addTwoNumbers(l1, l2))