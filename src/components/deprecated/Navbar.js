import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

//For TopNav, refer to WovenMagazine
//For LeftNav, refer to blackmadre
const useStyles = makeStyles({
  liBase: {
    'position': 'absolute',
    'color': 'white',
    'cursor': 'pointer',
    'overflow': 'hidden',
    '&:hover': {
      'color': '#c7c446',
      'text-decoration': 'underline'
    }
  },
  ulTopNav: {
    'list-style': 'none',
    'display': 'flex',
    'justify-content': 'center',
    'margin-left': '50px',
    'margin-right': '50px'
  },
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

const Navbar = ({ navList, navType, navURLs }) => {
  //navList = ['Info', 'Projects', 'Archive', 'Contact']
  const css = useStyles();
  const liStyle = css['li' + navType + 'Nav'];
  const liBase = css['liBase'];
  const ulStyle = css['ul' + navType + 'Nav'];
  let key = 0;
  const liGenerator = (navItem) => {
    return (<li key={key++} className={`${liStyle} ${liBase}`}> {navItem} </li>)
  }
  const ul = []
  console.log(navList)
  for (let i = 0; i < navList.length; i++) {
    console.log(navList[i])
    ul.push(liGenerator(navList[i]))
  }
  return (
    <ul className={ulStyle}>
      {ul}
    </ul>
  )
}

Navbar.defaultProps = {
  title: 'Default TingTech Header',
}

Navbar.propTypes = {
  title: PropTypes.string, //.isRequired
}

export default Navbar;
