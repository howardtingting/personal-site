import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles';

//For TopNav, refer to WovenMagazine
//For LeftNav, refer to blackmadre
const useStyles = makeStyles({
  liTopNav: {
    'margin-left': '15px',
    'margin-right': '15px',
  },
  ulLeftNav: {
    'list-style': 'none',
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between',
  },
  liLeftNav: {
    'margin-left': '50px',
    'margin-right': '50px',
  }
});

const Button = ({ text, style }) => {
  return (
    <button style={style}>
      { text }
    </button>
  )
}

Button.defaultProps = {
  style: {color: 'white', backgroundColor: 'black'},
  text: 'Default TingTech Button'
}

Button.propTypes = {
  text: PropTypes.string, //.isRequired
  style: PropTypes.object
}

export default Button
