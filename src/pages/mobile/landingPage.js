// LANDING PAGE
import React from 'react';
import StyledText from '../../components/complex/StyledText';
import { useState } from 'react';
/*
1. Title
2. Background
3. Action Call
*/
var LandingPage = React.memo(function (props) {
    //910-1860
    //480-910
    //1860-3600
    var highlight = 1;
    var noHighlight = 0.8;
    var _a = useState(highlight), logoOpacity = _a[0], setLogoOpacity = _a[1];
    var _b = useState(noHighlight), nameOpacity = _b[0], setNameOpacity = _b[1];
    var _c = useState(noHighlight), devOpacity = _c[0], setDevOpacity = _c[1];
    var _d = useState(noHighlight), consultOpacity = _d[0], setConsultOpacity = _d[1];
    /* FONT SCHEMA */
    var horizontalScale = 11.51375, verticalScale = 22;
    var LogoText = (React.createElement(StyledText, { textContent: "TingTech", zIndex: 9003, top: "40px", left: '40px', fontScale: 0.9, opacity: logoOpacity, onHover: function () { setLogoOpacity(noHighlight); }, onUnhover: function () { setLogoOpacity(highlight); }, onClick: function () { window.location.reload(); }, color: '#DAC071', animationName: 'fadeIn', animationDuration: 1, shadow: 'red', shadowOffset: 0.5, underlined: true, underlineColor: 'transparent' }));
    var nameFontScale = 1.5;
    var nameTextContent = "Howard Ting";
    var nameTextWidth = nameTextContent.length * horizontalScale * nameFontScale;
    var nameTextHeight = nameFontScale * verticalScale;
    var NameText = (React.createElement(StyledText, { textContent: "Howard Ting", bottom: "calc(50vh - " + nameTextHeight * 2 + "px)", left: "calc(50vw - " + nameTextWidth / 2 + "px)", fontScale: nameFontScale, opacity: nameOpacity, color: '#DAC071', animationName: 'fadeInDark', underlineEnter: 'fadeIn', underlineExit: 'fadeOut', underlinePadding: 10, animationDuration: 0.9, shadow: 'red', scaleSize: true, underlined: true, underlineColor: '#9A8541', onAnimationEnd: function () { } }));
    var devFontScale = 0.8;
    var devTextContent = "<Web Development>";
    var devTextWidth = devTextContent.length * horizontalScale * devFontScale;
    var devTextHeight = devFontScale * verticalScale;
    var DeveloperText = (React.createElement(StyledText, { textContent: devTextContent, onClick: function () { console.log('Navigating to Projects/Archive'); }, bottom: "calc(50vh - 140px)", left: "calc(50vw - " + devTextWidth / 2 + "px)", fontScale: devFontScale, opacity: devOpacity, onHover: function () { setDevOpacity(highlight); }, onUnhover: function () { setDevOpacity(noHighlight); }, color: '#DAC071', animationName: 'fadeInDark', underlineEnter: 'fadeIn', underlineExit: 'fadeOut', underlinePadding: 6, underlined: true, underlineColor: '#9A8541', animationDuration: 1.1, shadow: 'red', shadowOffset: 0.5, onAnimationEnd: function () { } }));
    // const lineOptions = {
    //   direction: 'horizontal',
    //   width: '1px',
    //   length: '100px',
    //   bottom: `calc(50vh - 112px)`,
    //   left: `calc(50vw - 50px)`,
    //   color: '#9A8541',
    //   animationName: 'fadeInDark',
    //   animationDuration: 1
    // }
    //
    // const Line_1 = (<SimpleLine options={lineOptions}/>);
    var consFontScale = 0.8;
    var consTextContent = "<Software Consultation>";
    var consTextWidth = consTextContent.length * horizontalScale * consFontScale;
    var consTextHeight = consFontScale * verticalScale;
    var ConsultText = (React.createElement(StyledText, { textContent: consTextContent, onClick: function () { console.log('Navigating to Projects/Archive'); }, bottom: "calc(50vh - 105px)", left: "calc(50vw - " + consTextWidth / 2 + "px)", fontScale: consFontScale, opacity: consultOpacity, onHover: function () { setConsultOpacity(highlight); }, onUnhover: function () { setConsultOpacity(noHighlight); }, color: '#DAC071', animationName: 'fadeInDark', underlined: true, underlineEnter: 'fadeIn', underlineExit: 'none', underlinePadding: 6, animationDuration: 1, shadow: 'red', shadowOffset: 0.5, underlineColor: '#9A8541', onAnimationEnd: function () { } }));
    //480-910
    //1860-3600
    return (React.createElement("div", { className: "landingPage" },
        LogoText,
        NameText,
        ConsultText,
        DeveloperText));
});
export default LandingPage;
