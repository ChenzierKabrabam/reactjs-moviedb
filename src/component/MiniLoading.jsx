import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'calc(100vh - 56px)',
    backgroundColor: theme.palette.secondary.dark,
    display: 'grid',
    placeItems: 'center',
    zIndex: '99',
    [theme.breakpoints.up('md')]: {
      height: 'calc(100vh - 80px)',
    },
  },
  '@keyframes loading': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  loader: {
    width: '50px',
    height: '50px',
    border: `4px solid ${theme.palette.secondary.main}`,
    borderTop: `4px solid ${theme.palette.secondary.dark}`,
    animationName: '$loading',
    animationDuration: '2.5s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    borderRadius: '50%',
  },
}))

export default function MiniLoading() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.loader}></div>
      </div>
    </React.Fragment>
  )
}
