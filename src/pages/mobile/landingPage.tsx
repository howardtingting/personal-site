// LANDING PAGE
import React from 'react';
import StyledText from '../../components/complex/StyledText';
// import SimpleLine from '../../components/SimpleLine';
import { useState } from 'react';

/*
1. Title
2. Background
3. Action Call
*/

const LandingPage = React.memo((props) => {
  //910-1860
  //480-910
  //1860-3600
  const highlight = 1;
  const noHighlight = 0.6;
  const [logoOpacity, setLogoOpacity] = useState(highlight)
  const [nameOpacity, setNameOpacity] = useState(noHighlight);
  const [devOpacity, setDevOpacity] = useState(noHighlight);
  const [consultOpacity, setConsultOpacity] = useState(noHighlight);

  /* FONT SCHEMA */
  let horizontalScale = 11.51375, verticalScale = 22;

  const LogoText = (<StyledText
    textContent={"TingTech"}
    zIndex={9003}
    top={"40px"}
    left={'40px'}
    fontScale={0.9}
    opacity={logoOpacity}
    onHover={() => { setLogoOpacity(noHighlight); }}
    onUnhover={() => { setLogoOpacity(highlight); }}
    onClick={() => {window.location.reload()}}
    color={'#DAC071'}
    animationName={'fadeIn'}
    animationDuration={1}
    shadow={'red'}
    shadowOffset={0.5}
    underlined={true}
    underlineColor={'transparent'}/>);

  const nameFontScale = 1.5;
  const nameTextContent = "Howard Ting";
  const nameTextWidth = nameTextContent.length * horizontalScale * nameFontScale;
  const nameTextHeight = nameFontScale * verticalScale;

  const NameText = (<StyledText
    textContent={"Howard Ting"}
    bottom={`calc(50vh - ${nameTextHeight*2}px)`}
    left={`calc(50vw - ${nameTextWidth/2}px)`}
    fontScale={nameFontScale}
    opacity={nameOpacity}
    onHover={() => { setNameOpacity(noHighlight); }}
    onUnhover={() => { setNameOpacity(highlight); }}
    color={'#DAC071'}
    animationName={'fadeInDark'}
    underlineEnter={'fadeIn'}
    underlineExit={'fadeOut'}
    underlinePadding={10}
    animationDuration={0.9}
    shadow={'red'}
    scaleSize={true}
    underlined={true}
    underlineColor={'#9A8541'}
    onAnimationEnd={()=>{}}/>);

  const devFontScale = 0.8;
  const devTextContent = "<Web Development>";
  const devTextWidth = devTextContent.length * horizontalScale * devFontScale;
  const devTextHeight = devFontScale * verticalScale;
  const DeveloperText = (<StyledText
    textContent={devTextContent}
    onClick={()=>{console.log('Navigating to Projects/Archive')}}
    bottom={`calc(50vh - 140px)`}
    left={`calc(50vw - ${devTextWidth/2}px)`}
    fontScale={devFontScale}
    opacity={devOpacity}
    onHover={() => { setDevOpacity(highlight); }}
    onUnhover={() => { setDevOpacity(noHighlight); }}
    color={'#DAC071'}
    animationName={'fadeInDark'}
    underlineEnter={'fadeIn'}
    underlineExit={'fadeOut'}
    underlinePadding={6}
    underlined={true}
    underlineColor={'#9A8541'}
    animationDuration={1.1}
    shadow={'red'}
    shadowOffset={0.5}
    onAnimationEnd={()=>{}}
  />);

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

  const consFontScale = 0.8;
  const consTextContent = "<Software Consultation>";
  const consTextWidth = consTextContent.length * horizontalScale * consFontScale;
  const consTextHeight = consFontScale * verticalScale;
  const ConsultText = (<StyledText
    textContent={consTextContent}
    onClick={()=>{console.log('Navigating to Projects/Archive')}}
    bottom={`calc(50vh - 105px)`}
    left={`calc(50vw - ${consTextWidth/2}px)`}
    fontScale={consFontScale}
    opacity={consultOpacity}
    onHover={() => { setConsultOpacity(highlight); }}
    onUnhover={() => { setConsultOpacity(noHighlight); }}
    color={'#DAC071'}
    animationName={'fadeInDark'}
    underlined={true}
    underlineEnter={'fadeIn'}
    underlineExit={'none'}
    underlinePadding={6}
    animationDuration={1}
    shadow={'red'}
    shadowOffset={0.5}
    underlineColor={'#9A8541'}
    onAnimationEnd={()=>{/*last animation; do something*/}}
  />);


  //480-910
  //1860-3600
  return(<div className="landingPage">
    {LogoText}
    {NameText}
    {ConsultText}
    {DeveloperText}
  </div>);
});

export default LandingPage;
