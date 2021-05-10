import { makeStyles, fade, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(2, 3),
    marginTop: '16px',
    backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.up('sm')]: {
      width: '92%',
      margin: '16px auto',
      borderRadius: theme.shape.borderRadius,
    },
  },
  heading: {
    color: fade(theme.palette.common.white, 0.6),
    textTransform: 'capitalize',
    fontWeight: '450',
  },
}))

function Content() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography className={classes.heading} variant='h5'>
        trending
      </Typography>
    </div>
  )
}

export default Content
