var debounce = function (fn, ms) {
    var timer;
    return function (_) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            timer = null;
            fn.apply(this, args);
        }, ms);
    };
};
//debounce is a function that executes fn argument every ms time
export default debounce;
