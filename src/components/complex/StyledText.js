import React from 'react';
import Line from '../SimpleLine';
import Text from '../SimpleText';
import { isColor } from '../../utils/typeCheck';
import { debounce } from '../../utils/debounce';
import { useState } from 'react';


const checkNavProps = (props) => {
  const finalProps = {}
  /* CLICK SCHEMA */
  if (props.onClick) {
    finalProps.customClick = props.onClick;
    finalProps.click = true;
  } else {
    finalProps.customClick = () => {};
    finalProps.click = false;
  }

  /* SHADOW SCHEMA */
  finalProps.shadow = props.shadow || '';
  if (!isColor(finalProps.shadow)) { finalProps.shadow = ''; }
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
  } else {
    finalProps.underlineColor = 'none';
  }
  finalProps.animation = props.animation || 'fadeIn';
  if (props.underlineEnter || props.underlineExit || props.underlineColor) {
    finalProps.underlineEnter = props.underlineEnter || 'fadeIn';
    finalProps.underlineExit = props.underlineExit || 'fadeOut';
  } else {
    finalProps.underlineEnter = 'none';
    finalProps.underlineExit = 'none';
  }

  /* ANIMATION ELEMS */
  finalProps.animation = props.animation || '';
  finalProps.animationDuration = props.animationDuration || 5;
  finalProps.animationDirection = props.animationDirection || 'normal';
  finalProps.animationIterationCount = props.animationIterationCount || 1;
  finalProps.animationDelay = props.animationDelay || 0;
  // animation end schema
  finalProps.animationEndCallback = props.onAnimationEnd || (() => {});
  finalProps.hoverCallback = props.onHover ? props.onHover : (() => {});
  finalProps.unhoverCallback = props.onUnhover ? props.onUnhover : (() => {});

  finalProps.content = props.content || 'Place Content Here';
  finalProps.fontWeight = props.fontWeight || 300;
  finalProps.fontSize = props.fontSize || 1;

  /* BACKGROUND SIZE SCHEMA */
  finalProps.bgWidth = props.bgWidth || 0;
  finalProps.bgHeight = props.bgHeight || 0;
  finalProps.underlinePadding = props.underlinePadding || 0; //top, right, bottom, left

  /* Nav opacity schema */
  finalProps.navIndex = props.navIndex || 0;
  finalProps.opacityEncoding = props.opacityEncoding || [0];
  return finalProps;
}

const StyledText = (props) => {
  const [isUnderlined, setIsUnderlined] = useState(false);
  const [beenUnderlined, setBeenUnderlined] = useState(false);
  const [finishAnimation, setFinishAnimation] = useState(false);
  const [scaleFont, setScaleFont] = useState(1);
  let click,
    shadow,
    shadowOffset,
    bgWidth,
    bgHeight,
    position,
    opacity,
    navIndex,
    opacityEncoding,
    top,
    bottom,
    right,
    left,
    color,
    underlined,
    underlineColor,
    underlineEnter,
    underlineExit,
    underlinePadding,
    animation,
    animationDuration,
    animationDirection,
    animationIterationCount,
    animationDelay,
    animationEndCallback,
    hoverCallback,
    unhoverCallback,
    customClick,
    content,
    fontWeight,
    fontSize,
    writingMode,
    zIndex;
  ({
    click,
    shadow,
    shadowOffset,
    bgWidth,
    bgHeight,
    position,
    opacity,
    navIndex,
    opacityEncoding,
    top,
    bottom,
    right,
    left,
    color,
    underlined,
    underlineColor,
    underlineEnter,
    underlineExit,
    underlinePadding,
    animation,
    animationDuration,
    animationDirection,
    animationIterationCount,
    animationDelay,
    animationEndCallback,
    hoverCallback,
    unhoverCallback,
    customClick,
    content,
    fontWeight,
    fontSize,
    writingMode,
    zIndex
  } = checkNavProps(props));
  opacity = (typeof props.navIndex === 'number') ? opacityEncoding[navIndex] : opacity;
  const onAnimationEnd = () => {
    animationEndCallback();
    setFinishAnimation(true);
  }
  // hover schema for underlining text
  let waitAnimation = true;
  if (props.waitAnimation === false) waitAnimation = false;

  const onHover = () => {
    hoverCallback();
    if (finishAnimation && !underlined) {
      setBeenUnderlined(true);
      setIsUnderlined(true);
    }
  }
  const onUnhover = () => {
    unhoverCallback();
    if (finishAnimation && !underlined) setIsUnderlined(false);
  }

  /* ONCLICK */
  const onClick = () => {
    customClick();
  }

  /* FONT SCHEMA */
  let horizontalScale = 11.51375, verticalScale = 22;
  const length = (fontSize * horizontalScale * content.length);
  const height = (verticalScale * fontSize);

  const style = {
    position: position,
    height: bgHeight || height,
    width: bgWidth || length,
    cursor: click ? 'pointer' : 'auto',
    zIndex: zIndex
  }

  if (top === 0) {
      if (bottom !== 0) {
        style.bottom = bottom
      }
      else {
        style.top = top
      }
  } else {
    style.top = top;
  }
  if (left === 0) {
      if (right !== 0) { style.right = right }
      else { style.left = left }
  } else {
      style.left = left;
  }

  const enteringUnderlineOptions = writingMode === 'vertical-rl'
  ? {
    direction: 'vertical',
    width: '2px',
    length: length,
    right: bgWidth + underlinePadding,
    color: underlineColor,
    animation: underlineEnter,
    animationDuration: 0.3,
    animationDirection: animationDirection
  }
  : {
    direction: 'horizontal',
    width: '2px',
    length: length,
    top: height + underlinePadding,
    color: underlineColor,
    animation: underlineEnter,
    animationDuration: 0.3,
    animationDirection: animationDirection
  }
  const EnteringUnderline = (<Line options={enteringUnderlineOptions} onMouseEnter={()=>{}} onMouseLeave={()=>{}}/>);

  const exitingUnderlineOptions = writingMode === 'vertical-rl'
  ? {
    direction: 'vertical',
    width: '2px',
    opacity: 0,
    length: length,
    right: bgWidth + underlinePadding,
    color: underlineColor,
    animation: underlineExit,
    animationDuration: 0.3,
    animationDirection: animationDirection,
    animationFillMode: 'forwards'
  }
  : {
    direction: 'horizontal',
    width: '2px',
    opacity: 0,
    length: length,
    top: height + underlinePadding,
    color: underlineColor,
    animation: underlineExit,
    animationDuration: 0.3,
    animationDirection: animationDirection,
    animationFillMode: 'forwards'
  };
  const ExitingUnderline = (<Line options={exitingUnderlineOptions} onMouseEnter={()=>{}} onMouseLeave={()=>{}}/>);

  const ShadowText = <Text
    click={click}
    writingMode={writingMode}
    position={position}
    left={shadowOffset}
    top={shadowOffset}
    content={content}
    color={shadow}
    fontSize={fontSize}
    opacity={opacity}
    animation={animation}
    animationDuration={animationDuration+0.05}
    animationDirection={animationDirection}
    animationIterationCount={animationIterationCount}
    animationDelay={animationDelay}
    onAnimationEnd={onAnimationEnd}/>;

  const MainText = <Text
    width={bgWidth}
    height={bgHeight}
    click={click}
    writingMode={writingMode}
    content={content}
    color={color}
    fontSize={fontSize}
    opacity={opacity}
    animation={animation}
    animationDuration={animationDuration}
    animationDirection={animationDirection}
    animationIterationCount={animationIterationCount}
    animationDelay={animationDelay}
    onAnimationEnd={onAnimationEnd}
    onHover={onHover}
    onUnhover={onUnhover}
    onClick={onClick}/>;
  return(
    <div style={style}>
      {(underlined || (isUnderlined && beenUnderlined)) && (finishAnimation || !waitAnimation) &&
        (EnteringUnderline)}
      {!underlined && !isUnderlined && beenUnderlined && (finishAnimation || !waitAnimation) &&
        (ExitingUnderline)}
      {shadow && (ShadowText)}
      {MainText}
    </div>
  )
}

export default StyledText;
