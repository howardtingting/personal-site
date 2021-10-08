import React from 'react';
import StyledText from './StyledText';
import Borders from './Borders';
import { isColor, getScreenType } from '../../utils/typeCheck';
import { useState } from 'react'
import '../../css/components/customKeyframes.css';
/*
Usage:
<StyledNav
  navInputs={navList}
  direction={'vertical'}
  xPos={'50px'}
  yPos={'30vh'}
  scale={1.2}
  verticalSpace={50}
  color={'#DAC071'}
  underlineEnter={'fadeInLeft'}
  underlineColor={'linear-gradient(90deg, #000 0%, #DFC274 5%, #887534 35%, #DAC071 85%, #000 100%)'}/>
*/
const checkNavProps = (props) => {
  const finalProps = {}
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
  finalProps.animation = props.animation || 'fadeIn';
  if (props.underlineEnter || props.underlineExit || props.underlineColor) {
    finalProps.underlineEnter = props.underlineEnter || 'fadeIn';
    finalProps.underlineExit = props.underlineExit || 'fadeOut';
  } else {
    finalProps.underlineEnter = 'none';
    finalProps.underlineExit = 'none';
  }
  finalProps.highlight = props.highlight || false;
  finalProps.navInputs = props.navInputs || [
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
  ];
  return finalProps;
}

const StyledNav = (props) => {
  let scale,
      verticalSpace,
      xPos,
      yPos,
      fontWeight,
      direction,
      border,
      color,
      bgColor,
      underlineColor,
      animation,
      underlineEnter,
      underlineExit,
      highlight,
      navInputs;
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
    animation,
    underlineEnter,
    underlineExit,
    highlight,
    navInputs
  } = checkNavProps(props));
  /* FONT SCALING */
  let horizontalScale = 7.47581818,
      verticalScale = 22;
  if (fontWeight === 300) {
    horizontalScale = 7.47581818;
  } else {
    //fontWeight===600
    horizontalScale = 8.5750909;
  }
  /* HOVER STATE SCHEMA & ANIMATION SETUP */
  const defaultOpacity = 1;
  const hoverOpacity = 1;
  const darkHoverOpacity = 0.5;
  const [opacityEncoding, setOpacityEncoding] = useState(navInputs.map((_, i) => defaultOpacity));
  const encoding = {}
  encoding[0] = useState(defaultOpacity)
  encoding[1] = useState(defaultOpacity)
  encoding[2] = useState(defaultOpacity)
  encoding[3] = useState(defaultOpacity)
  // for (let i = 0; i < navInputs.length; i++) {
  //   encoding[i] = useState(defaultOpacity);
  // }
  /* NAV BACKGROUND DIMENSIONS */
  let maxNavStrLength = 0;
  navInputs.forEach((item) => {
    if (maxNavStrLength < item.length) maxNavStrLength = item.length;
  });
  let bgHeight = (verticalScale + parseInt(yPos)) * scale * navInputs.length;
  let bgWidth = (maxNavStrLength * horizontalScale * scale) + parseInt(xPos);


  /* BUILDING NAV LIST */
  const navBar = [];
  navInputs.forEach((navObj, index) => {
    const text = navObj.text,
          url = navObj.url,
          clickHandler = navObj.clickHandler;
    const onClick = clickHandler;
    const onHover = () => {
      setOpacityEncoding(opacityEncoding.map((_, i) => {
        if (i===index) {
          return hoverOpacity;
        } else {
          return darkHoverOpacity;
        }
      }));
    }
    const onUnhover = () => {
      setOpacityEncoding(opacityEncoding.map((_, i) => defaultOpacity));
    }
    const NavItem = (<StyledText
      className={'navAnim_1'}
      key={index}
      shadow={'red'}
      opacityEncoding={opacityEncoding}
      navIndex={index}
      position={'absolute'}
      onClick={onClick}
      content={text}
      fontSize={scale}
      top={(scale*verticalSpace*index).toString() + 'px'}
      left={bgWidth}
      bgWidth={(text.length * horizontalScale * scale)}
      bgHeight={bgHeight/navInputs.length}
      color={color}
      animation={animation}
      animationDuration={navInputs.length-index}
      waitAnimation={true}
      onHover={onHover}
      onUnhover={onUnhover}
      underlineEnter={underlineEnter}
      underlineExit={underlineExit}
      underlinePadding={7}
      underlineColor={underlineColor}/>);
    navBar.push(NavItem);
  });

  if (direction === 'horizontal') {
    bgWidth = '100vw'
  } else {
    bgHeight = '100vh';
  }
  const navStyle = {
    position: 'absolute',
    // width: bgWidth*2,
    height: bgHeight,
    zIndex:9001
  }
  const listStyle = {
    position: 'absolute',
    top: yPos
  }

  return (
    <div style={navStyle}>
      {border && (<Borders width={bgWidth} height={bgHeight}/>)}
      <div style={listStyle}>
        {navBar}
      </div>
    </div>)
}

export default StyledNav;
