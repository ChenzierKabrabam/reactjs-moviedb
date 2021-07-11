import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.secondary.dark,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    // transition: 'opacity 0.3s',
    borderRadius: '50%',
  },
}))

function Loading() {
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <div className={classes.loader}></div>
      </div>
    </>
  )
}

export default Loading
