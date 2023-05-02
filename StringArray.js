var str = 'abc def';

var a = Array.prototype.push.call(str, ', pushed string')
console.log(a);