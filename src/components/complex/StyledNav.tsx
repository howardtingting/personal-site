import React from 'react';
import StyledText from './StyledText';
import SimpleCircle from '../SimpleCircle';
import Borders from './Borders';
import Burger from '../icons/Burger'
import { useState } from 'react'
import { isColor, getScreenType, defaultProps } from '../../utils/typeCheck';
import * as IFs from '../../interfaces/interfaces';
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
const defaultNavInputs = [
  {
    text: 'Sample Nav 1',
    url: '/',
    clickHandler: ((url='/') => () => {window.open(url)})
  },
  {
    text: 'Sample Nav 2',
    url: '/',
    clickHandler: ((url='/') => () => {window.open(url)})
  },
  {
    text: 'Sample Nav 3',
    url: '/',
    clickHandler: ((url='/') => () => {window.open(url)})
  },
  {
    text: 'Sample Nav 4',
    url: '/',
    clickHandler: ((url='/') => () => {window.open(url)})
  },
]
const checkNavProps: (props: IFs.AnyJSON) => IFs.AnyJSON = (props) => {
  const finalProps: IFs.AnyJSON = {}
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
  } else {
    finalProps.underlineColor = 'none';
  }
  if (props.underlineEnter || props.underlineExit || props.underlineColor) {
    finalProps.underlineEnter = props.underlineEnter || 'fadeIn';
    finalProps.underlineExit = props.underlineExit || 'fadeOut';
  } else {
    finalProps.underlineEnter = 'none';
    finalProps.underlineExit = 'none';
  }
  finalProps.animationName = props.animationName || 'fadeIn';
  finalProps.animationDuration = props.animationDuration || 2;
  finalProps.highlight = props.highlight || false;
  finalProps.leftNavInputs = props.leftNavInputs || [...defaultNavInputs];
  finalProps.rightNavInputs = props.rightNavInputs || [...defaultNavInputs];
  finalProps.leftPadding = props.leftPadding || 0;
  finalProps.rightPadding = props.rightPadding || 0;
  return finalProps;
}

const StyledNav = (props: IFs.AnyJSON) => {
  const defaults = {
    screen: props.screen || getScreenType(window.innerWidth),
    scale: props.scale || 1,
    verticalSpace: props.verticalSpace || 30,
    xPos: props.xPos || '20px',
    yPos: props.yPos || '20px',
    fontWeight: props.fontWeight || 300,
    direction: props.direction ? props.direction : 'horizontal',
    border: props.border || false,
    color: isColor(props.color) ? props.color : 'black',
    shadow: isColor(props.shadow) ? props.shadow : 'black',
    bgColor: props.bgColor || 'none',
    underlineColor: props.underlineColor || props.color || 'none',
    underlineEnter: (props.underlineEnter || props.underlineExit || props.underlineColor) ?  (props.underlineEnter ? props.underlineEnter : 'fadeIn') : 'none',
    underlineExit: (props.underlineEnter || props.underlineExit || props.underlineColor) ?  (props.underlineExit ? props.underlineExit : 'fadeOut') : 'none',
    animationName: props.animationName || 'fadeIn',
    animationDuration: props.animationDuration || 2,
    highlight: props.highlight || false,
    leftNavInputs: props.leftNavInputs || [...defaultNavInputs],
    rightNavInputs: props.rightNavInputs || [...defaultNavInputs],
    leftPadding: props.leftPadding || 0,
    rightPadding: props.rightPadding || 0
  }
  props = defaultProps(props, defaults);
  let scale: number,
      verticalSpace: number,
      xPos: IFs.cssDimensions | number,
      yPos: IFs.cssDimensions | number,
      fontWeight: number,
      direction: 'horizontal' | 'vertical',
      border: IFs.cssDimensions | number,
      color: string,
      bgColor: string,
      underlineColor: string,
      animationName: string,
      animationDuration: IFs.cssDimensions | number,
      underlineEnter: string,
      underlineExit: string,
      highlight: boolean,
      leftNavInputs: Array<IFs.AnyJSON>,
      rightNavInputs: Array<IFs.AnyJSON>,
      leftPadding: IFs.cssDimensions | number,
      rightPadding: IFs.cssDimensions | number;
  ({
    scale,
    verticalSpace,
    xPos,
    yPos,
    fontWeight,
    direction,
    border,
    color,
    bgColor,
    underlineColor,
    animationName,
    animationDuration,
    underlineEnter,
    underlineExit,
    highlight,
    leftNavInputs,
    rightNavInputs,
    leftPadding,
    rightPadding
  } = props);
  /* FONT SCALING */
  let horizontalScale = 11.51375,
      verticalScale = 22;

  /* HOVER STATE SCHEMA & ANIMATION SETUP */
  const defaultOpacity = 1;
  const hoverOpacity = 1;
  const darkHoverOpacity = 0.5;
  const [leftOpacityEncoding, setLeftOpacityEncoding] = useState(leftNavInputs.map((_, i) => defaultOpacity));
  const [rightOpacityEncoding, setRightOpacityEncoding] = useState(rightNavInputs.map((_, i) => defaultOpacity));
  /* NAV BACKGROUND DIMENSIONS */
  let maxNavStrLength = 0;
  leftNavInputs.forEach((item) => {
    if (maxNavStrLength < item.text.length) maxNavStrLength = item.text.length;
  });
  let bgHeight: IFs.cssDimensions | number = typeof yPos === 'number'
    ? (verticalScale + yPos) * scale * leftNavInputs.length
    : (verticalScale + parseInt(yPos)) * scale * leftNavInputs.length;
  let bgWidth: IFs.cssDimensions | number = (maxNavStrLength * horizontalScale * scale);


  /* BUILDING LEFT NAV LIST */
  const leftNavBar: Array<React.ReactElement<any, any>> = [];
  leftNavInputs.forEach((navObj, index, arr) => {
    const text = navObj.text,
          url = navObj.url,
          clickHandler = navObj.clickHandler;
    const onClick = clickHandler;
    const onHover = () => {
      setLeftOpacityEncoding(leftOpacityEncoding.map((_, i) => {
        if (i===index) {
          return hoverOpacity;
        } else {
          return darkHoverOpacity;
        }
      }));
    }
    const onUnhover = () => {
      setLeftOpacityEncoding(leftOpacityEncoding.map((_, i) => defaultOpacity));
    }
    const calculatedDuration = typeof animationDuration === 'number'
      ? animationDuration - (animationDuration*index/arr.length)
      : parseInt(animationDuration as string)-((parseInt(animationDuration as string)/arr.length)*index);
    const NavItem = (<StyledText
      key={index}
      shadow={'red'}
      shadowOffset={0.5}
      opacityEncoding={leftOpacityEncoding}
      navIndex={index}
      position={'absolute'}
      onClick={onClick}
      textContent={text}
      fontSize={scale}
      top={(scale*verticalSpace*index).toString() + 'px'}
      left={leftPadding}
      bgWidth={(text.length * horizontalScale * scale)}
      bgHeight={bgHeight as number/leftNavInputs.length + 1}
      color={color}
      animationName={animationName}
      animationDuration={calculatedDuration}
      waitanimationName={true}
      onHover={onHover}
      onUnhover={onUnhover}
      underlineEnter={underlineEnter}
      underlineExit={underlineExit}
      underlinePadding={7}
      underlineColor={underlineColor}/>);
    leftNavBar.push(NavItem);
  });

  /* BUILDING RIGHT NAV LIST */
  const rightNavBar: Array<React.ReactElement<any, any>> = [];
  let topSpace = 0, rightVerticalHeight = 0;
  rightNavInputs.forEach((navObj, index, arr) => {
    const text = navObj.text,
          url = navObj.url,
          clickHandler = navObj.clickHandler;
    const onClick = clickHandler;
    const onHover = () => {
      setRightOpacityEncoding(rightOpacityEncoding.map((_, i) => {
        if (i===index) {
          return hoverOpacity;
        } else {
          return darkHoverOpacity;
        }
      }));
    }
    const onUnhover = () => {
      setRightOpacityEncoding(rightOpacityEncoding.map((_, i) => defaultOpacity));
    }
    const calculatedDuration = typeof animationDuration === 'number'
      ? animationDuration - (animationDuration*index/arr.length)
      : parseInt(animationDuration as string)-((parseInt(animationDuration as string)/arr.length)*index);
    const NavItem = (<StyledText
      key={index}
      shadow={'red'}
      shadowOffset={0.5}
      opacityEncoding={rightOpacityEncoding}
      navIndex={index}
      position={'absolute'}
      onClick={onClick}
      textContent={text}
      fontScale={scale*0.9}
      top={((topSpace * horizontalScale * scale) + (verticalSpace*index)).toString() + 'px'}
      right={'0px'}
      bgWidth={(verticalScale * scale)}
      bgHeight={(text.length*horizontalScale*scale) + verticalSpace}
      writingMode={'vertical-rl'}
      color={color}
      animationName={animationName}
      animationDuration={calculatedDuration}
      waitanimationName={true}
      onHover={onHover}
      onUnhover={onUnhover}/>);
    rightNavBar.push(NavItem);
    topSpace += text.length;
    rightVerticalHeight += (text.length*horizontalScale*scale) + verticalSpace;
  });

/* DIRECTION SCHEMA */

  const oldBgDims = [bgWidth, bgHeight];
  if (direction === 'horizontal') {
    bgWidth = '100vw'
  } else {
    bgHeight = '100vh';
  }
  const leftNavStyle: IFs.AnyJSON = {
    position: 'absolute',
    width: (typeof bgWidth === 'number') ? (bgWidth*2) : bgWidth,
    height: bgHeight,
    zIndex:1
  }
  const leftListStyle: IFs.AnyJSON = {
    height: oldBgDims[1],
    position: 'absolute',
    top: '50vh',
    transform: 'translate(0,-50%)'
  }
  const rightNavStyle: IFs.AnyJSON = {...leftNavStyle}
  const rightListStyle: IFs.AnyJSON = {...leftListStyle}
  rightNavStyle.right=0;
  rightNavStyle.width = verticalScale * 2;
  rightListStyle.height = rightVerticalHeight;
  rightListStyle.right = verticalScale;
  rightListStyle.width = verticalScale;
  rightListStyle.zIndex = 1;
  const leftNavExpanded = (
    <div style={leftNavStyle}>
      {border && (<Borders width={bgWidth} height={bgHeight}/>)}
      <div style={leftListStyle}>
        {leftNavBar}
      </div>
    </div>);

  const rightNav = (
    <div style={rightNavStyle}>
      {border && (<Borders width={bgWidth} height={bgHeight}/>)}
      <div style={rightListStyle}>
        {rightNavBar}
      </div>
    </div>);

/* MOBILE NAV */
  const radius = 56;

  const openNavModal = () => {
    console.log('Opening nav modal');
  }

  const circleOptions = {
    width: radius,
    height: radius,
    cursor: 'pointer',
    borderWidth: 2,
    fill: true,
    top: `calc(50vh - ${radius/2}px)`,
    left: `calc(50vw - ${radius/2}px)`,
    color: '#2f2f2f',
    opacity: 1,
    content: Burger,
    onClick: (openNavModal),
    zIndex: 9002
  };

  const mobileNavCircle = (<SimpleCircle options={circleOptions}/>);

  return (<div style={{width:'100%', height:'100%'}}>
    {(props.windowType !== 'mobile') && mobileNavCircle}
    {(props.windowType !== 'mobile') && leftNavExpanded}
    {(props.windowType !== 'mobile') && rightNav}
    </div>);
}

export default StyledNav;
