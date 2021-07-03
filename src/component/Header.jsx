import {
  AppBar,
  InputBase,
  makeStyles,
  Button,
  Toolbar,
  Typography,
  fade,
} from '@material-ui/core'
import * as FiIcons from 'react-icons/fi'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.dark,
  },
  contentAlignment: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoButton: {
    color: fade(theme.palette.common.white, 0.8),
    textTransform: 'capitalize',
    // textDecoration: 'none',
  },
  search: {
    width: '50%',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    width: '100%',
    color: 'white',
    opacity: '62%',
  },
  inputField: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
  },
}))
function Header() {
  const classes = useStyles()
  return (
    <>
      <AppBar className={classes.root} position='static'>
        <Toolbar>
          <div className={classes.contentAlignment}>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Button
                startIcon={<FiIcons.FiActivity />}
                className={classes.logoButton}
              >
                <Typography variant='h5'>Clone</Typography>
              </Button>
            </Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <FiIcons.FiSearch />
              </div>
              <InputBase
                placeholder='Search...'
                classes={{ root: classes.inputRoot, input: classes.inputField }}
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
