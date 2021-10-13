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
    var LogoText = (React.createElement(StyledText, { textContent: "TingTech", zIndex: 9003, top: "40px", left: '40px', fontScale: 0.9, opacity: logoOpacity, onHover: function () { setLogoOpacity(noHighlight); }, onUnhover: function () { setLogoOpacity(highlight); }, onClick: function () { window.location.reload(); }, color: '#DAC071', animationName: 'fadeIn', animationDuration: 1, shadow: 'red', shadowOffset: 0.5, underlined: true, underlineColor: 'transparent' }));
    var NameText = (React.createElement(StyledText, { textContent: "Howard Ting", bottom: "199px", right: '10vw', fontScale: 5, opacity: nameOpacity, color: '#DAC071', animationName: 'slideInRightDark', underlineEnter: 'slideInRight', underlineExit: 'fadeOut', underlinePadding: 10, animationDuration: 2, shadow: 'red', scaleSize: true, underlined: true, underlineColor: '#9A8541', onAnimationEnd: function () { } }));
    var DeveloperText = (React.createElement(StyledText, { textContent: "<Web Development>", onClick: function () { console.log('Navigating to Projects/Archive'); }, bottom: "155px", right: '14vw', fontScale: 1, opacity: devOpacity, onHover: function () { setDevOpacity(highlight); }, onUnhover: function () { setDevOpacity(noHighlight); }, color: '#DAC071', animationName: 'slideInUpDark', underlineEnter: 'slideInRightDark', underlineExit: 'fadeOut', underlinePadding: 4, animationDuration: 2.3, shadow: 'red', shadowOffset: 0.5, underlineColor: '#9A8541', onAnimationEnd: function () { } }));
    var ConsultText = (React.createElement(StyledText, { textContent: "<Software Consultation>", onClick: function () { console.log('Navigating to Projects/Archive'); }, bottom: "155px", right: 'calc(14vw + 233px)', fontScale: 1, opacity: consultOpacity, onHover: function () { setConsultOpacity(highlight); }, onUnhover: function () { setConsultOpacity(noHighlight); }, color: '#DAC071', animationName: 'slideInFarUpDark', underlineEnter: 'slideInRightDark', underlineExit: 'fadeOut', underlinePadding: 4, animationDuration: 2.25, shadow: 'red', shadowOffset: 0.5, underlineColor: '#9A8541', onAnimationEnd: function () { } }));
    //480-910
    //1860-3600
    return (React.createElement("div", { className: "landingPage" },
        LogoText,
        NameText,
        (ConsultText),
        DeveloperText));
});
export default LandingPage;
