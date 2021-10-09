export const isColor = (strColor) => {
  const s = new Option().style;
  s.color = strColor;
  return s.color !== '';
}

export const validCss = (propName, propVal) => {
  const s = document.createElement('div').style;
  s[propName] = propVal;
  return ((s[propName] !== '') && (typeof s[propName] !== 'undefined'));
}

export const getScreenType = (width, height=null) => {
  if (width < 1926 && width > 910) {
    return ['laptop', 'laptop'];
  } else if (width >= 1926) {
    return ['wide', 'wide'];
  } else {
    return ['mobile', 'mobile'];
  }
}
const pxTypes = ['top', 'bottom', 'right', 'left', 'width', 'height', 'borderWidth'];
const timeTypes = ['animationDelay', 'animationDuration'];
export const defaultProps = (props, excludeTypes=[]) => {
  const style = {};
  // Transfer ALL props into style
  Object.keys(props).forEach((type) => {
    style[type] = props[type];
  })
  // Define default values for style
  const propTypes = {
    'position': 'absolute',
    'cursor': 'auto',
    'opacity': '100%',
    'top': 0,
    'bottom': 0,
    'right': 0,
    'left': 0,
    'width': 0,
    'height': 0,
    'color': 'white',
    'borderStyle': 'solid',
    'borderWidth': 1,
    'animation': 'unset',
    'animationDuration': 3,
    'animationDirection': 'normal',
    'animationIterationCount': 1,
    'animationDelay': 0,
    'animationFillMode': 'none',
    'onAnimationEnd': (() => {}),
    'windowType': getScreenType(window.innerWidth),
    'zIndex': 'auto'
  };
  // Normalize time and dimension inputs
  pxTypes.forEach((type) => {
    if (typeof props[type] === 'number') {
      propTypes[type] = props[type] + 'px';
    } else if (typeof props[type] === 'string') {
      if (typeof parseInt(props[type]) === 'number') {
        propTypes[type] = props[type]
      }
    }
  });
  timeTypes.forEach((type) => {
    if (typeof props[type] === 'number') {
      propTypes[type] = props[type] + 's';
    }
  });
  // Set defaults
  Object.keys(propTypes).forEach((propName) => {
    const propVal = propTypes[propName];
    style[propName] = validCss(propName, props[propName]) ? props[propName] : propTypes[propName];
  });

  // Remove defaults for original prop values for each excluded type
  excludeTypes.forEach((type) => {
    style[type] = props[type];
  })
  // Handling miscellaneous edge cases
  if (style.onClick) {
    style.cursor = 'pointer';
  } else {
    style.onClick = (() => {});
  }
  return style;
}
