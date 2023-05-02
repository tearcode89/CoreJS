var NewConstructor = function () {
    console.log('this is new constructor!!');
};

var dataTypes = [
    1,
    'test',
    true,
    {},
    [],
    function () {},
    /test/,
    new Number(),
    new String(),
    new Boolean(),
    new Object(),
    new Array(),
    new Function(),
    new RegExp(),
    new Date(),
    new Error(),
]

dataTypes.forEach(function(d) {
    d.constructor = NewConstructor;
    console.log(d.constructor, '&', d instanceof NewConstructor)
})