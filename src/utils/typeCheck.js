export var isColor = function (strColor) {
    var s = new Option().style;
    s.color = strColor;
    return s.color !== '';
};
export var validCss = function (propName, propVal) {
    var s = document.createElement('div').style;
    s[propName] = propVal;
    var finalCssVal = s[propName];
    return ((finalCssVal !== '') && (typeof finalCssVal !== 'undefined'));
};
export var getScreenType = function (width, height) {
    if (width < 1926 && width > 910) {
        return ['laptop', 'laptop'];
    }
    else if (width >= 1926) {
        return ['wide', 'wide'];
    }
    else {
        return ['mobile', 'mobile'];
    }
};
var pxTypes = ['top', 'bottom', 'right', 'left', 'width', 'height', 'borderWidth'];
var timeTypes = ['animationDelay', 'animationDuration'];
export var defaultProps_ = function (props, excludeTypes) {
    if (excludeTypes === void 0) { excludeTypes = []; }
    var style = {};
    // Transfer ALL props into style
    Object.keys(props).forEach(function (type) {
        style[type] = props[type];
    });
    // Define default values for style
    var propTypes = {
        'position': 'absolute',
        'cursor': 'auto',
        'opacity': 1,
        'top': 0,
        'bottom': 0,
        'right': 0,
        'left': 0,
        'width': 0,
        'height': 0,
        'color': 'white',
        'borderStyle': 'solid',
        'borderWidth': 1,
        'animation': 'unset',
        'animationDuration': 3,
        'animationDirection': 'normal',
        'animationIterationCount': 1,
        'animationDelay': 0,
        'animationFillMode': 'none',
        'onAnimationEnd': (function () { }),
        'windowType': getScreenType(window.innerWidth),
        'zIndex': 'auto'
    };
    // Normalize time and dimension inputs
    pxTypes.forEach(function (type) {
        if (typeof props[type] === 'number') {
            propTypes[type] = props[type] + 'px';
        }
        else if (typeof props[type] === 'string') {
            if (typeof parseInt(props[type]) === 'number') {
                propTypes[type] = props[type];
            }
        }
    });
    timeTypes.forEach(function (type) {
        if (typeof props[type] === 'number') {
            propTypes[type] = props[type] + 's';
        }
    });
    // Set defaults
    Object.keys(propTypes).forEach(function (propName) {
        var propVal = propTypes[propName];
        style[propName] = validCss(propName, props[propName]) ? props[propName] : propTypes[propName];
    });
    // Remove defaults for original prop values for each excluded type
    excludeTypes.forEach(function (type) {
        style[type] = props[type];
    });
    // Handling miscellaneous edge cases
    if (style.onClick) {
        style.cursor = 'pointer';
    }
    else {
        style.onClick = (function () { });
    }
    return style;
};
//Shape of props, defaults, and output of defaultProps() is determined by caller
export var defaultProps = function (props, defaults) {
    var finalProp = {};
    pxTypes.forEach(function (type) {
        if (typeof props[type] === 'number') {
            defaults[type] = props[type] + 'px';
        }
        else if (typeof props[type] === 'string') {
            if (typeof parseInt(props[type]) === 'number') {
                defaults[type] = props[type];
            }
        }
        finalProp[type] = defaults[type];
    });
    timeTypes.forEach(function (type) {
        if (typeof props[type] === 'number') {
            defaults[type] = props[type] + 's';
        }
        finalProp[type] = defaults[type];
    });
    Object.keys(defaults).forEach(function (propName) {
        if (validCss(propName, defaults[propName])) {
            finalProp[propName] = validCss(propName, props[propName]) ? props[propName] : defaults[propName];
        }
        else {
            finalProp[propName] = defaults[propName];
        }
    });
    return finalProp;
};
