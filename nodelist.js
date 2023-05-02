function a() {
    var argv = Array.prototype.slice.call(arguments);
    argv.forEach(function(arg) {
        console.log(arg)
    })
}

a(1,2,3);

var nodeList = document.querySelectorAll('div');
console.log(typeof nodeList)
var nodeArr = Array.prototype.slice.call(nodeList);
console.log(nodeArr);

nodeArr.forEach(function(node){
    console.log(node);
})

