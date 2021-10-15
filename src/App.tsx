import React from 'react';
import StyledNav from './components/complex/StyledNav';
import SimpleCircle from './components/SimpleCircle';
import Borders from './components/complex/Borders';
import * as laptop from './pages/laptop/laptop';
import * as mobile from './pages/mobile/mobile';
import { useState, useEffect } from 'react';
import debounce from './utils/debounce';
import * as scrollControl from './utils/scrollControl';
import {getScreenType} from './utils/typeCheck';
import './css/defaults/normalize.css';
import './css/defaults/index.css';

function App() {
  const [windowType, setWindowType] = useState(getScreenType(window.innerWidth));
  //const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  //1926-3600
  //910-1926
  //480-910
  useEffect(() => {
    const handleResize = debounce(() => {
      let realWidth = getScreenType(window.innerWidth);
      let virtualWidth = windowType;
      if (realWidth !== virtualWidth) {
        setWindowType(realWidth);
      }
    }, 50);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
    // About: History of self
  });
  /*
  {
    text: 'Github',
    url: 'https://github.com/howardtingting/',
    clickHandler: (() => {window.open('https://github.com/howardtingting/');})
  },
  {
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/howardtingting/',
    clickHandler: (() => {window.open('https://www.linkedin.com/in/howardtingting/');})
  },
  */
  // Info: Services provided, pricing, etc.
  // Military Tech: SJIU
  // Contact: contact info
  const leftNavList = [
    {
      text: 'Services',
      url: 'http://www.tingtech.us/info',
      clickHandler: (() => {console.log('http://www.tingtech.us/info');})
    },
    {
      text: 'Acquisition',
      url: 'http://www.tingtech.us/military',
      clickHandler: (() => {console.log('http://www.tingtech.us/sjiu');})
    },
    {
      text: 'About Me',
      url: 'http://www.tingtech.us/aboutme',
      clickHandler: (() => {console.log('http://www.tingtech.us/about-me');})
    },
    {
      text: 'Contact',
      url: '',
      clickHandler: (() => {})
    }
  ];
  const rightNavList = [
    {
      text: 'Facebook',
      url: 'https://www.facebook.com/HowardTingling',
      clickHandler: (() => {window.open('https://www.facebook.com/HowardTingling');})
    },
    {
      text: 'Github',
      url: 'https://github.com/howardtingting/',
      clickHandler: (() => {window.open('https://github.com/howardtingting/');})
    },
    {
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/howardtingting/',
      clickHandler: (() => {window.open('https://www.linkedin.com/in/howardtingting/');})
    },
  ];
  /*
  0. Global styles
  1. Navbar
  2. Landing Page
  3. Descriptions Page
  4. Projects Page
  5. Blog
  6. Footer
  */
  const lineColor = 'linear-gradient(90deg, #DFC274 0%, #887534 35%, #DAC071 75%, #977C40 100%)' //'#8E763B'//
  //calculate default width and height if not given based on direction
  // vertical ? default: width based on text&&scale, height 100vh
  // horizontal ? default: width: 100vw, height based on text&&scale
  const LeftNav = (<StyledNav
    leftNavInputs={leftNavList}
    rightNavInputs={rightNavList}
    leftPadding={90}
    rightPadding={20}
    direction={'vertical'}
    height={'100vh'}
    xPos={'50vw'}
    yPos={'40vh'}
    scale={1}
    verticalSpace={50}
    color={'#DAC071'}
    animationName={'fadeInDark'}
    animationDuration={'2s'}
    underlineColor={lineColor}
    underlineEnter={'slideInLeftDark'}
    windowType={windowType}/>);
  return (
    <div className="container">
      {LeftNav}
      <Borders
        width={'100vw'}
        height={'100vh'}
        animationDuration={5}/>
      {(windowType != 'mobile') && (<laptop.LandingPage/>)}
      {(windowType == 'mobile') && (<mobile.LandingPage/>)}
    </div>
  );
}

export default App;
