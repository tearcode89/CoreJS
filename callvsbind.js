var obj = {
    outer: function () {
        console.log(this);
        var innerFunc = function () {
            console.log('innerFunc의 실행 부분 ',this)
        };
        // innerFunc.call(this)
        innerFunc()
    }
}

obj.outer()