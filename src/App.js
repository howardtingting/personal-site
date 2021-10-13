import React from 'react';
import StyledNav from './components/complex/StyledNav.js';
import Borders from './components/complex/Borders.js';
import * as laptop from './pages/laptop/laptop.js';
import * as mobile from './pages/mobile/mobile.js';
import { useState, useEffect } from 'react';
import debounce from './utils/debounce.js';
import { getScreenType } from './utils/typeCheck.js';
import './css/defaults/normalize.css';
import './css/defaults/index.css';
function App() {
    var _a = useState(getScreenType(window.innerWidth)), windowType = _a[0], setWindowType = _a[1];
    //const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    //910-1926
    //480-910
    //1926-3600
    useEffect(function () {
        var handleResize = debounce(function () {
            var _a = getScreenType(window.innerWidth), realWidth = _a[0], realHeight = _a[1];
            var virtualWidth = windowType[0], virtualHeight = windowType[1];
            if (realWidth !== virtualWidth) {
                setWindowType([realWidth, realHeight]);
            }
        }, 50);
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
        };
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
    // About: History of self
    // Contact: contact info
    var leftNavList = [
        {
            text: 'Services',
            url: 'http://www.tingtech.us/info',
            clickHandler: (function () { console.log('http://www.tingtech.us/info'); })
        },
        {
            text: 'Acquisition',
            url: 'http://www.tingtech.us/military',
            clickHandler: (function () { console.log('http://www.tingtech.us/sjiu'); })
        },
        {
            text: 'About Me',
            url: 'http://www.tingtech.us/aboutme',
            clickHandler: (function () { console.log('http://www.tingtech.us/about-me'); })
        },
        {
            text: 'Contact',
            url: '',
            clickHandler: (function () { })
        }
    ];
    var rightNavList = [
        {
            text: 'Facebook',
            url: 'https://www.facebook.com/HowardTingling',
            clickHandler: (function () { window.open('https://www.facebook.com/HowardTingling'); })
        },
        {
            text: 'Github',
            url: 'https://github.com/howardtingting/',
            clickHandler: (function () { window.open('https://github.com/howardtingting/'); })
        },
        {
            text: 'LinkedIn',
            url: 'https://www.linkedin.com/in/howardtingting/',
            clickHandler: (function () { window.open('https://www.linkedin.com/in/howardtingting/'); })
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
    var lineColor = 'linear-gradient(90deg, #DFC274 0%, #887534 35%, #DAC071 75%, #977C40 100%)'; //'#8E763B'//
    //calculate default width and height if not given based on direction
    // vertical ? default: width based on text&&scale, height 100vh
    // horizontal ? default: width: 100vw, height based on text&&scale
    var LeftNav = (React.createElement(StyledNav, { leftNavInputs: leftNavList, rightNavInputs: rightNavList, leftPadding: 90, rightPadding: 20, direction: 'vertical', height: '100vh', xPos: '50vw', yPos: '40vh', scale: 1, verticalSpace: 50, color: '#DAC071', animationName: 'fadeInDark', animationDuration: '2s', underlineColor: lineColor, underlineEnter: 'slideInLeftDark', windowType: windowType }));
    //const MobileNav = ({});
    //{(windowType[0] == 'mobile') && (MobileNav)}
    return (React.createElement("div", { className: "container" },
        LeftNav,
        React.createElement(Borders, { width: '100vw', height: '100vh', animationDuration: 5 }),
        windowType[0] !== 'mobile' && (React.createElement(laptop.LandingPage, null)),
        windowType[0] === 'mobile' && (React.createElement(mobile.LandingPage, null))));
}
export default App;
