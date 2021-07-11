import { IconButton, makeStyles, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.up('sm')]: {
      height: '200px',
    },
    [theme.breakpoints.up('md')]: {
      height: '300px',
    },
  },
  icons: {
    width: '60%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconColor: {
    color: 'white',
  },
}))

function Footer() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.icons}>
        <Link
          to={{
            pathname: 'https://github.com/ChenzierKabrabam/reactjs-moviedb',
          }}
          target='_blank'
        >
          <IconButton>
            <Typography variant='h2'>
              <AiIcons.AiFillGithub className={classes.iconColor} />
            </Typography>
          </IconButton>
        </Link>
        <Link
          to={{
            pathname: 'https://www.instagram.com/chenzier666',
          }}
          target='_blank'
        >
          <IconButton>
            <Typography variant='h2'>
              <AiIcons.AiOutlineInstagram className={classes.iconColor} />
            </Typography>
          </IconButton>
        </Link>
        <Link
          to={{
            pathname: 'https://www.twitter.com/chenzierk',
          }}
          target='_blank'
        >
          <IconButton>
            <Typography variant='h2'>
              <AiIcons.AiOutlineTwitter className={classes.iconColor} />
            </Typography>
          </IconButton>
        </Link>
      </div>
    </div>
  )
}
export default Footer
