import React from 'react';
import StyledNav from './components/complex/StyledNav';
import SimpleCircle from './components/SimpleCircle'
import Borders from './components/complex/Borders';
import LandingPage from './pages/landingPage';
import { useState, useEffect } from 'react';
import { debounce } from './utils/debounce';
import {getScreenType} from './utils/typeCheck';
import './css/defaults/index.css';
import './css/components/customKeyframes.css'
import './css/defaults/normalize.css';

function App() {
  const [windowType, setWindowType] = useState(getScreenType(window.innerWidth));
  //const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  //910-1926
  //480-910
  //1926-3600
  useEffect(() => {
    const handleResize = debounce(() => {
      let [realWidth, realHeight] = getScreenType(window.innerWidth);
      let [virtualWidth, virtualHeight] = windowType;
      if (realWidth !== virtualWidth) {
        setWindowType([realWidth, realHeight]);
      }
    }, 50);
    window.addEventListener('resize', handleResize);
    return _ => {
      window.removeEventListener('resize', handleResize);
    }
  });
  const navList = [
    {
      text: 'Projects',
      url: 'http://www.tingtech.us/projects',
      clickHandler: (() => {console.log('http://www.tingtech.us/info');})
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
    {
      text: 'Contact',
      url: '',
      clickHandler: (() => {})
    }
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
  const NormalNav = (<StyledNav
    navInputs={navList}
    direction={'vertical'}
    xPos={'50px'}
    yPos={'30vh'}
    scale={1.2}
    verticalSpace={50}
    color={'#DAC071'}
    underlineColor={lineColor}
    underlineEnter={'fadeInLeft'}/>);
  //const MobileNav = ({});
  //{(windowType[0] == 'mobile') && (MobileNav)}
  const radius = 56;
  const circleParams = {
    width: radius,
    height: radius,
    color: 'grey',
    // color: '#DAC071',
    borderWidth: 2,
    opacity: '50%'
  };
  const circleOptions = {
    width: radius,
    height: radius,
    borderWidth: 2,
    fill: true,
    top: `calc(50vh - ${circleParams.height/2}px)`,
    left: `calc(50vw - ${circleParams.width/2}px)`,
    color: circleParams.color,
    opacity: circleParams.opacity
  };
  const testCircle = (<SimpleCircle options={circleOptions}/>);

  return (
    <div className="container">
      {(windowType[0] !== 'mobile') && (NormalNav)}
      {testCircle}
      <Borders
        width={'100vw'}
        height={'100vh'}
        animationDuration={5}
        />
      {windowType[0] === 'laptop' && (<LandingPage/>)}
    </div>
  );
}

export default App;
