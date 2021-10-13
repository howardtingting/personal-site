import React from 'react';
import StyledText from './StyledText';
import SimpleCircle from '../SimpleCircle';
import Borders from './Borders';
import Burger from '../icons/Burger';
import { isColor, getScreenType, defaultProps_ } from '../../utils/typeCheck';
import { useState } from 'react';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*
Usage:
<StyledNav
  leftNavInputs={navList}
  direction={'vertical'}
  xPos={'50px'}
  yPos={'30vh'}
  scale={1.2}
  verticalSpace={50}
  color={'#DAC071'}
  underlineEnter={'fadeInLeft'}
  underlineColor={'linear-gradient(90deg, #000 0%, #DFC274 5%, #887534 35%, #DAC071 85%, #000 100%)'}/>
*/
var defaultNavInputs = [
    {
        text: 'Sample Nav 1',
        url: '/',
        clickHandler: (function (url) {
            if (url === void 0) { url = '/'; }
            return function () { window.open(url); };
        })
    },
    {
        text: 'Sample Nav 2',
        url: '/',
        clickHandler: (function (url) {
            if (url === void 0) { url = '/'; }
            return function () { window.open(url); };
        })
    },
    {
        text: 'Sample Nav 3',
        url: '/',
        clickHandler: (function (url) {
            if (url === void 0) { url = '/'; }
            return function () { window.open(url); };
        })
    },
    {
        text: 'Sample Nav 4',
        url: '/',
        clickHandler: (function (url) {
            if (url === void 0) { url = '/'; }
            return function () { window.open(url); };
        })
    },
];
var checkNavProps = function (props) {
    var finalProps = {};
    finalProps.screen = props.screen || getScreenType(window.innerWidth);
    finalProps.scale = props.scale || 1;
    finalProps.verticalSpace = props.verticalSpace || 30;
    finalProps.xPos = props.xPos || '20px';
    finalProps.yPos = props.yPos || '20px';
    finalProps.fontWeight = props.fontWeight || 300;
    finalProps.direction = props.direction ? props.direction : 'horizontal';
    finalProps.border = props.border || false;
    finalProps.color = isColor(props.color) ? props.color : 'black';
    finalProps.shadow = isColor(props.shadow) ? props.shadow : 'black';
    finalProps.bgColor = props.bgColor || 'none';
    if (props.underlineColor) {
        finalProps.underlineColor = props.underlineColor || finalProps.color;
    }
    else {
        finalProps.underlineColor = 'none';
    }
    finalProps.animationName = props.animationName || 'fadeIn';
    finalProps.animationDuration = props.animationDuration || 2;
    if (props.underlineEnter || props.underlineExit || props.underlineColor) {
        finalProps.underlineEnter = props.underlineEnter || 'fadeIn';
        finalProps.underlineExit = props.underlineExit || 'fadeOut';
    }
    else {
        finalProps.underlineEnter = 'none';
        finalProps.underlineExit = 'none';
    }
    finalProps.highlight = props.highlight || false;
    finalProps.leftNavInputs = props.leftNavInputs || __spreadArray([], defaultNavInputs, true);
    finalProps.rightNavInputs = props.rightNavInputs || __spreadArray([], defaultNavInputs, true);
    finalProps.leftPadding = props.leftPadding || 0;
    finalProps.rightPadding = props.rightPadding || 0;
    return finalProps;
};
var StyledNav = function (props) {
    var _a;
    props = defaultProps_(props);
    var scale, verticalSpace, xPos, yPos, fontWeight, direction, border, color, bgColor, underlineColor, animationName, animationDuration, underlineEnter, underlineExit, highlight, leftNavInputs, rightNavInputs, leftPadding, rightPadding;
    _a = checkNavProps(props);
    ({scale, verticalSpace, xPos, yPos, fontWeight, direction, border, color, bgColor, underlineColor, animationName, animationDuration, underlineEnter, underlineExit, highlight, leftNavInputs, rightNavInputs, leftPadding, rightPadding} = _a);
    /* FONT SCALING */
    var horizontalScale = 11.51375, verticalScale = 22;
    /* HOVER STATE SCHEMA & ANIMATION SETUP */
    var defaultOpacity = 1;
    var hoverOpacity = 1;
    var darkHoverOpacity = 0.5;
    var _b = useState(leftNavInputs.map(function (_, i) { return defaultOpacity; })), leftOpacityEncoding = _b[0], setLeftOpacityEncoding = _b[1];
    var _c = useState(rightNavInputs.map(function (_, i) { return defaultOpacity; })), rightOpacityEncoding = _c[0], setRightOpacityEncoding = _c[1];
    /* NAV BACKGROUND DIMENSIONS */
    var maxNavStrLength = 0;
    leftNavInputs.forEach(function (item) {
        if (maxNavStrLength < item.text.length)
            maxNavStrLength = item.text.length;
    });
    var bgHeight = typeof yPos === 'number'
        ? (verticalScale + yPos) * scale * leftNavInputs.length
        : (verticalScale + parseInt(yPos)) * scale * leftNavInputs.length;
    var bgWidth = (maxNavStrLength * horizontalScale * scale);
    /* BUILDING LEFT NAV LIST */
    var leftNavBar = [];
    leftNavInputs.forEach(function (navObj, index, arr) {
        var text = navObj.text, url = navObj.url, clickHandler = navObj.clickHandler;
        var onClick = clickHandler;
        var onHover = function () {
            setLeftOpacityEncoding(leftOpacityEncoding.map(function (_, i) {
                if (i === index) {
                    return hoverOpacity;
                }
                else {
                    return darkHoverOpacity;
                }
            }));
        };
        var onUnhover = function () {
            setLeftOpacityEncoding(leftOpacityEncoding.map(function (_, i) { return defaultOpacity; }));
        };
        var calculatedDuration = typeof animationDuration === 'number'
            ? animationDuration - (animationDuration * index / arr.length)
            : parseInt(animationDuration) - ((parseInt(animationDuration) / arr.length) * index);
        var NavItem = (React.createElement(StyledText, { key: index, shadow: 'red', shadowOffset: 0.5, opacityEncoding: leftOpacityEncoding, navIndex: index, position: 'absolute', onClick: onClick, textContent: text, fontSize: scale, top: (scale * verticalSpace * index).toString() + 'px', left: leftPadding, bgWidth: (text.length * horizontalScale * scale), bgHeight: bgHeight / leftNavInputs.length + 1, color: color, animationName: animationName, animationDuration: calculatedDuration, waitanimationName: true, onHover: onHover, onUnhover: onUnhover, underlineEnter: underlineEnter, underlineExit: underlineExit, underlinePadding: 7, underlineColor: underlineColor }));
        leftNavBar.push(NavItem);
    });
    /* BUILDING RIGHT NAV LIST */
    var rightNavBar = [];
    var topSpace = 0, rightVerticalHeight = 0;
    rightNavInputs.forEach(function (navObj, index, arr) {
        var text = navObj.text, url = navObj.url, clickHandler = navObj.clickHandler;
        var onClick = clickHandler;
        var onHover = function () {
            setRightOpacityEncoding(rightOpacityEncoding.map(function (_, i) {
                if (i === index) {
                    return hoverOpacity;
                }
                else {
                    return darkHoverOpacity;
                }
            }));
        };
        var onUnhover = function () {
            setRightOpacityEncoding(rightOpacityEncoding.map(function (_, i) { return defaultOpacity; }));
        };
        var calculatedDuration = typeof animationDuration === 'number'
            ? animationDuration - (animationDuration * index / arr.length)
            : parseInt(animationDuration) - ((parseInt(animationDuration) / arr.length) * index);
        var NavItem = (React.createElement(StyledText, { key: index, shadow: 'red', shadowOffset: 0.5, opacityEncoding: rightOpacityEncoding, navIndex: index, position: 'absolute', onClick: onClick, textContent: text, fontScale: scale * 0.9, top: ((topSpace * horizontalScale * scale) + (verticalSpace * index)).toString() + 'px', right: '0px', bgWidth: (verticalScale * scale), bgHeight: (text.length * horizontalScale * scale) + verticalSpace, writingMode: 'vertical-rl', color: color, animationName: animationName, animationDuration: calculatedDuration, waitanimationName: true, onHover: onHover, onUnhover: onUnhover }));
        rightNavBar.push(NavItem);
        topSpace += text.length;
        rightVerticalHeight += (text.length * horizontalScale * scale) + verticalSpace;
    });
    /* DIRECTION SCHEMA */
    var oldBgDims = [bgWidth, bgHeight];
    if (direction === 'horizontal') {
        bgWidth = '100vw';
    }
    else {
        bgHeight = '100vh';
    }
    var leftNavStyle = {
        position: 'absolute',
        width: (typeof bgWidth === 'number') ? (bgWidth * 2) : bgWidth,
        height: bgHeight,
        zIndex: 1
    };
    var leftListStyle = {
        height: oldBgDims[1],
        position: 'absolute',
        top: '50vh',
        transform: 'translate(0,-50%)'
    };
    var rightNavStyle = __assign({}, leftNavStyle);
    var rightListStyle = __assign({}, leftListStyle);
    rightNavStyle.right = 0;
    rightNavStyle.width = verticalScale * 2;
    rightListStyle.height = rightVerticalHeight;
    rightListStyle.right = verticalScale;
    rightListStyle.width = verticalScale;
    rightListStyle.zIndex = 1;
    var leftNavExpanded = (React.createElement("div", { style: leftNavStyle },
        border && (React.createElement(Borders, { width: bgWidth, height: bgHeight })),
        React.createElement("div", { style: leftListStyle }, leftNavBar)));
    var rightNav = (React.createElement("div", { style: rightNavStyle },
        border && (React.createElement(Borders, { width: bgWidth, height: bgHeight })),
        React.createElement("div", { style: rightListStyle }, rightNavBar)));
    /* MOBILE NAV */
    var radius = 56;
    var openNavModal = function () {
        console.log('Opening nav modal');
    };
    var circleOptions = {
        width: radius,
        height: radius,
        borderWidth: 2,
        fill: true,
        top: "calc(50vh - " + radius / 2 + "px)",
        left: "calc(50vw - " + radius / 2 + "px)",
        color: '#2f2f2f',
        opacity: 1,
        content: Burger,
        onClick: (openNavModal),
        zIndex: 9002
    };
    var mobileNavCircle = (React.createElement(SimpleCircle, { options: circleOptions }));
    return (React.createElement(React.Fragment, null,
        (props.windowType[0] === 'mobile') && mobileNavCircle,
        (props.windowType[0] !== 'mobile') && leftNavExpanded,
        (props.windowType[0] !== 'mobile') && rightNav));
};
export default StyledNav;
