import { makeStyles, fade, InputBase } from '@material-ui/core'
import React from 'react'
import * as FiIcons from 'react-icons/fi'

const useStyles = makeStyles((theme) => ({
  search: {
    width: '100%',
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    [theme.breakpoints.up('sm')]: {
      width: '350px',
      height: '50px',
    },
  },
  searchIcon: {
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
    // backgroundColor: 'blue',
  },
  inputRoot: {
    width: '100%',
    color: 'white',
    opacity: '62%',
    fontSize: '1.125rem',
    // backgroundColor: 'green',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem',
    },
  },
  inputField: {
    padding: theme.spacing(),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
  },
}))

function Search(props) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <FiIcons.FiSearch />
        </div>
        <InputBase
          placeholder='Search...'
          classes={{ root: classes.inputRoot, input: classes.inputField }}
          type='search'
          value={props.query}
          onKeyPress={props.onHandleOnChange}
        />
      </div>
    </React.Fragment>
  )
}

export default Search
