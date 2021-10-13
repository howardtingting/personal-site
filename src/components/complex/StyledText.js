import React from 'react';
import Line from '../SimpleLine';
import Text from '../SimpleText';
import { isColor } from '../../utils/typeCheck';
import { useState } from 'react';
var checkNavProps = function (props) {
    var finalProps = {};
    /* CLICK SCHEMA */
    if (props.onClick) {
        finalProps.customClick = props.onClick;
        finalProps.click = true;
    }
    else {
        finalProps.customClick = function () { };
        finalProps.click = false;
    }
    /* SHADOW SCHEMA */
    finalProps.shadow = props.shadow || '';
    if (!isColor(finalProps.shadow)) {
        finalProps.shadow = '';
    }
    finalProps.shadowOffset = props.shadowOffset || 1;
    /* GENERIC ELEMENTS */
    finalProps.position = props.position || 'absolute';
    finalProps.opacity = props.opacity || '100%';
    finalProps.top = props.top || 0;
    finalProps.bottom = props.bottom || 0;
    finalProps.right = props.right || 0;
    finalProps.left = props.left || 0;
    finalProps.color = props.color || 'white';
    finalProps.zIndex = props.zIndex || 'auto';
    finalProps.writingMode = props.writingMode || 'horizontal-tb';
    /* UNDERLINE SCHEMA */
    finalProps.underlined = props.underlined || false;
    if (props.underlineColor) {
        finalProps.underlineColor = props.underlineColor || finalProps.color;
    }
    else {
        finalProps.underlineColor = 'none';
    }
    finalProps.animationName = props.animationName || 'fadeIn';
    if (props.underlineEnter || props.underlineExit || props.underlineColor) {
        finalProps.underlineEnter = props.underlineEnter || 'fadeIn';
        finalProps.underlineExit = props.underlineExit || 'fadeOut';
    }
    else {
        finalProps.underlineEnter = 'none';
        finalProps.underlineExit = 'none';
    }
    /* ANIMATION ELEMS */
    finalProps.animationName = props.animationName || '';
    finalProps.animationDuration = props.animationDuration || 5;
    finalProps.animationDirection = props.animationDirection || 'normal';
    finalProps.animationIterationCount = props.animationIterationCount || 1;
    finalProps.animationDelay = props.animationDelay || 0;
    // animation end schema
    finalProps.animationEndCallback = props.onAnimationEnd || (function () { });
    finalProps.hoverCallback = props.onHover ? props.onHover : (function () { });
    finalProps.unhoverCallback = props.onUnhover ? props.onUnhover : (function () { });
    finalProps.textContent = props.textContent || 'Place Content Here';
    finalProps.fontWeight = props.fontWeight || 300;
    finalProps.fontScale = props.fontScale || 1;
    /* BACKGROUND SIZE SCHEMA */
    finalProps.bgWidth = props.bgWidth || 0;
    finalProps.bgHeight = props.bgHeight || 0;
    finalProps.underlinePadding = props.underlinePadding || 0; //top, right, bottom, left
    /* Nav opacity schema */
    finalProps.navIndex = props.navIndex || 0;
    finalProps.opacityEncoding = props.opacityEncoding || [0];
    return finalProps;
};
var StyledText = function (props) {
    var _a;
    var _b = useState(false), isUnderlined = _b[0], setIsUnderlined = _b[1];
    var _c = useState(false), beenUnderlined = _c[0], setBeenUnderlined = _c[1];
    var _d = useState(false), finishAnimation = _d[0], setFinishAnimation = _d[1];
    var _e = useState(1), scaleFont = _e[0], setScaleFont = _e[1];
    var click, shadow, shadowOffset, bgWidth, bgHeight, position, opacity, navIndex, opacityEncoding, top, bottom, right, left, color, underlined, underlineColor, underlineEnter, underlineExit, underlinePadding, animationName, animationDuration, animationDirection, animationIterationCount, animationDelay, animationEndCallback, hoverCallback, unhoverCallback, customClick, textContent, fontWeight, fontScale, writingMode, zIndex;
    (_a = checkNavProps(props), click = _a.click, shadow = _a.shadow, shadowOffset = _a.shadowOffset, bgWidth = _a.bgWidth, bgHeight = _a.bgHeight, position = _a.position, opacity = _a.opacity, navIndex = _a.navIndex, opacityEncoding = _a.opacityEncoding, top = _a.top, bottom = _a.bottom, right = _a.right, left = _a.left, color = _a.color, underlined = _a.underlined, underlineColor = _a.underlineColor, underlineEnter = _a.underlineEnter, underlineExit = _a.underlineExit, underlinePadding = _a.underlinePadding, animationName = _a.animationName, animationDuration = _a.animationDuration, animationDirection = _a.animationDirection, animationIterationCount = _a.animationIterationCount, animationDelay = _a.animationDelay, animationEndCallback = _a.animationEndCallback, hoverCallback = _a.hoverCallback, unhoverCallback = _a.unhoverCallback, customClick = _a.customClick, textContent = _a.textContent, fontWeight = _a.fontWeight, fontScale = _a.fontScale, writingMode = _a.writingMode, zIndex = _a.zIndex);
    opacity = (typeof props.navIndex === 'number') ? opacityEncoding[navIndex] : opacity;
    var onAnimationEnd = function () {
        animationEndCallback();
        setFinishAnimation(true);
    };
    console.log("Why");
    // hover schema for underlining text
    var waitAnimation = true;
    if (props.waitAnimation === false)
        waitAnimation = false;
    var onHover = function () {
        hoverCallback();
        if (finishAnimation && !underlined) {
            setBeenUnderlined(true);
            setIsUnderlined(true);
        }
    };
    var onUnhover = function () {
        unhoverCallback();
        if (finishAnimation && !underlined)
            setIsUnderlined(false);
    };
    /* ONCLICK */
    var onClick = function () {
        customClick();
    };
    /* FONT SCHEMA */
    var horizontalScale = 11.51375, verticalScale = 22;
    var length = (fontScale * horizontalScale * textContent.length);
    var height = (verticalScale * fontScale);
    var style = {
        position: position,
        height: bgHeight || height,
        width: bgWidth || length,
        cursor: click ? 'pointer' : 'auto',
        zIndex: zIndex,
    };
    if (top === 0) {
        if (bottom !== 0) {
            style.bottom = bottom;
        }
        else {
            style.top = top;
        }
    }
    else {
        style.top = top;
    }
    if (left === 0) {
        if (right !== 0) {
            style.right = right;
        }
        else {
            style.left = left;
        }
    }
    else {
        style.left = left;
    }
    var enteringUnderlineOptions = writingMode === 'vertical-rl'
        ? {
            direction: 'vertical',
            width: '1px',
            length: length,
            right: bgWidth + underlinePadding,
            color: underlineColor,
            animationName: underlineEnter,
            animationDuration: 0.3,
            animationDirection: animationDirection,
            animationFillMode: 'forwards'
        }
        : {
            direction: 'horizontal',
            width: '1px',
            length: length,
            top: height + underlinePadding,
            color: underlineColor,
            animationName: underlineEnter,
            animationDuration: 0.3,
            animationDirection: animationDirection,
            animationFillMode: 'forwards'
        };
    var EnteringUnderline = (React.createElement(Line, { options: enteringUnderlineOptions, onMouseEnter: function () { }, onMouseLeave: function () { } }));
    var exitingUnderlineOptions = writingMode === 'vertical-rl'
        ? {
            direction: 'vertical',
            width: '1px',
            opacity: 0,
            length: length,
            right: bgWidth + underlinePadding,
            color: underlineColor,
            animationName: underlineExit,
            animationDuration: 0.3,
            animationDirection: animationDirection,
            animationFillMode: 'forwards'
        }
        : {
            direction: 'horizontal',
            width: '1px',
            opacity: 0,
            length: length,
            top: height + underlinePadding,
            color: underlineColor,
            animationName: underlineExit,
            animationDuration: 0.3,
            animationDirection: animationDirection,
            animationFillMode: 'forwards'
        };
    var ExitingUnderline = (React.createElement(Line, { options: exitingUnderlineOptions, onMouseEnter: function () { }, onMouseLeave: function () { } }));
    var ShadowText = React.createElement(Text, { click: click, writingMode: writingMode, position: position, left: shadowOffset, top: shadowOffset, textContent: textContent, color: shadow, fontScale: fontScale, opacity: opacity, animationName: animationName, animationDuration: animationDuration + 0.05, animationDirection: animationDirection, animationIterationCount: animationIterationCount, animationDelay: animationDelay, onAnimationEnd: onAnimationEnd });
    var MainText = React.createElement(Text, { width: bgWidth, height: bgHeight, click: click, writingMode: writingMode, textContent: textContent, color: color, fontScale: fontScale, opacity: opacity, animationName: animationName, animationDuration: animationDuration, animationDirection: animationDirection, animationIterationCount: animationIterationCount, animationDelay: animationDelay, onAnimationEnd: onAnimationEnd, onHover: onHover, onUnhover: onUnhover, onClick: onClick });
    return (React.createElement("div", { style: style },
        (underlined || (isUnderlined && beenUnderlined)) && (finishAnimation || !waitAnimation) &&
            (EnteringUnderline),
        !underlined && !isUnderlined && beenUnderlined && (finishAnimation || !waitAnimation) &&
            (ExitingUnderline),
        shadow && (ShadowText),
        MainText));
};
export default StyledText;
