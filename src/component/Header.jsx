import React from 'react'
import {
  AppBar,
  makeStyles,
  Button,
  Toolbar,
  Typography,
  fade,
  IconButton,
} from '@material-ui/core'
import * as FiIcons from 'react-icons/fi'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1),
      height: '80px',
    },
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
    [theme.breakpoints.up('sm')]: {
      fontSize: '28px',
    },
  },
  headerTitle: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '28px',
    },
  },
  search: {
    color: fade(theme.palette.common.white, 0.7),
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
                <Typography className={classes.headerTitle} variant='h5'>
                  Clone
                </Typography>
              </Button>
            </Link>
            <div className={classes.searchWrapper}>
              <Link to='/search'>
                <IconButton className={classes.search}>
                  <FiIcons.FiSearch />
                </IconButton>
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
