var numbers = [10,20,3,16,45];
var max = Math.max.apply({x:1}, numbers);
var min = Math.min.apply(null, numbers);

console.log(max, min)