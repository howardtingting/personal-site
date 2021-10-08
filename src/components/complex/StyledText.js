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
  /* GENERIC ELEMENTS */
  finalProps.position = props.position || 'absolute';
  finalProps.opacity = props.opacity || '100%';
  finalProps.top = props.top || 0;
  finalProps.bottom = props.bottom || 0;
  finalProps.right = props.right || 0;
  finalProps.left = props.left || 0;
  finalProps.color = props.color || 'white';

  /* UNDERLINE SCHEMA */
  if (props.underlineColor) {
    finalProps.underlineColor = props.underlineColor || finalProps.color;
  } else {
    finalProps.underlineColor = 'none';
  }
  finalProps.animation = props.animation || 'navAnim_1';
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
  const [underlined, setUnderlined] = useState(false);
  const [beenUnderlined, setBeenUnderlined] = useState(false);
  const [finishAnimation, setFinishAnimation] = useState(false);
  let click,
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
    fontSize;
  ({
    click,
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
    fontSize
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
    if (finishAnimation) {
      setBeenUnderlined(true);
      setUnderlined(true);
    }
  }
  const onUnhover = () => {
    unhoverCallback();
    if (finishAnimation) setUnderlined(false);
  }

  /* ONCLICK */
  const onClick = () => {
    customClick();
  }

  /* STYLEDTEXT SPECIFIC ELEMS */
  let shadow = props.shadow || '';
  if (!isColor(shadow)) {
    shadow = '';
  }

  /* FONT SCHEMA */
  let horizontalScale = 7.47581818,
      verticalScale = 22;
  if (fontWeight === 300) {
    horizontalScale = 7.47581818;
  } else {
    //fontWeight===600
    horizontalScale = 8.5750909;
  }
  const length = (fontSize * horizontalScale * content.length);
  const height = (verticalScale * fontSize);

  const style = {
    position: position,
    height: bgHeight || height,
    width: bgWidth || length,
    cursor: click ? 'pointer' : 'auto'
  }

  // if (click) {
  //   style.cursor = 'pointer'
  // }

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

  const enteringUnderlineOptions = {
    direction: 'horizontal',
    width: '1px',
    length: length,
    top: height + underlinePadding,
    color: underlineColor,
    animation: underlineEnter,
    animationDuration: 0.3,
    animationDirection: animationDirection
  }
  const EnteringUnderline = (<Line options={enteringUnderlineOptions} onMouseEnter={()=>{}} onMouseLeave={()=>{}}/>);

  const exitingUnderlineOptions = {
    direction: 'horizontal',
    width: '1px',
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
    position={position}
    left={'1px'}
    top={'1px'}
    content={content}
    color={shadow}
    fontSize={fontSize}
    opacity={opacity}
    animation={animation}
    animationDuration={animationDuration+0.1}
    animationDirection={animationDirection}
    animationIterationCount={animationIterationCount}
    animationDelay={animationDelay}
    onAnimationEnd={onAnimationEnd}/>;

  const MainText = <Text
    width={bgWidth}
    height={bgHeight}
    click={click}
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
      {underlined && beenUnderlined && (finishAnimation || !waitAnimation) &&
        (EnteringUnderline)}
      {!underlined && beenUnderlined && (finishAnimation || !waitAnimation) &&
        (ExitingUnderline)}
      {shadow && (ShadowText)}
      {MainText}
    </div>
  )
  //create text and underline elems using above props
  /*
  1. onMouseEnter, setUnderlined
  2. if underlined, render underline animation
  */
}

export default StyledText;
